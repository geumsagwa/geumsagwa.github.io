# PPTX(zip) 안 ppt/media 이미지 중 QR로 보이는 정사각형 PNG를 골라 leaflet-assets에 저장
import re
import zipfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE / "leaflet-assets" / "homepage-qr-from-pptx.png"
NEW_FOLDER = Path(r"C:\Users\pass6\OneDrive\문서\카카오톡 받은 파일\새 폴더")


def png_wh(data: bytes) -> tuple[int, int] | None:
    if len(data) < 24 or data[:8] != b"\x89PNG\r\n\x1a\n":
        return None
    w = int.from_bytes(data[16:20], "big")
    h = int.from_bytes(data[20:24], "big")
    return w, h


def find_pptx() -> Path | None:
    if NEW_FOLDER.is_dir():
        xs = list(NEW_FOLDER.glob("*.pptx"))
        if xs:
            return max(xs, key=lambda p: p.stat().st_size)
    alt = HERE / "source-brochure.pptx"
    return alt if alt.is_file() else None


def main() -> None:
    ppt = find_pptx()
    if not ppt:
        raise SystemExit("pptx 없음: 새 폴더 또는 source-brochure.pptx")
    candidates: list[tuple[int, int, bytes, str]] = []
    with zipfile.ZipFile(ppt, "r") as z:
        for name in z.namelist():
            if not re.match(r"ppt/media/image\d+\.png$", name, re.I):
                continue
            raw = z.read(name)
            wh = png_wh(raw)
            if not wh:
                continue
            w, h = wh
            if w == h and 120 <= w <= 900:
                candidates.append((w, len(raw), raw, name))
    if not candidates:
        raise SystemExit("정사각형 PNG 후보 없음. ppt/media 내용 확인 필요.")
    candidates.sort(key=lambda t: (-t[0], -t[1]))
    best = candidates[0]
    OUT.write_bytes(best[2])
    print("저장:", OUT, "출처:", best[3], "크기:", best[0], "px")


if __name__ == "__main__":
    main()
