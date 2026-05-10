"""Extract visible text from PPTX (first pass: a:t runs)."""
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

A_NS = "{http://schemas.openxmlformats.org/drawingml/2006/main}t"
PPT = Path(__file__).resolve().parent / "source-brochure.pptx"


def slide_text(xml_bytes: bytes) -> str:
    root = ET.fromstring(xml_bytes)
    parts = []
    for t in root.iter(A_NS):
        if t.text:
            parts.append(t.text)
        if t.tail:
            parts.append(t.tail)
    return "".join(parts)


def main() -> None:
    if not PPT.is_file():
        print("Missing:", PPT)
        return
    with zipfile.ZipFile(PPT, "r") as z:
        slides = sorted(
            [n for n in z.namelist() if re.match(r"ppt/slides/slide\d+\.xml", n)],
            key=lambda s: int(re.search(r"slide(\d+)", s).group(1)),
        )
        lines = []
        for i, name in enumerate(slides, 1):
            raw = slide_text(z.read(name)).replace("\xa0", " ")
            lines.append(f"=== SLIDE {i} ===")
            lines.append((raw.strip() or "(empty)").replace("\r", ""))
            lines.append("")
        out = Path(__file__).resolve().parent / "pptx-extracted.txt"
        out.write_text("\n".join(lines), encoding="utf-8")
        print("Wrote", out)


if __name__ == "__main__":
    main()
