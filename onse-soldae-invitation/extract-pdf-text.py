#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""PDF에서 텍스트 추출 (검색 가능한 PDF용).
사용: python extract-pdf-text.py "경로\\파일.pdf" [출력.txt]

스캔 PDF(이미지뿐인 경우)는 OCR이 따로 필요합니다.
"""
from __future__ import annotations

import sys


def main() -> None:
    try:
        from pypdf import PdfReader
    except ImportError:
        print("pypdf가 없습니다. 설치: pip install pypdf", file=sys.stderr)
        sys.exit(1)

    if len(sys.argv) < 2:
        print(__doc__.strip())
        sys.exit(1)

    path = sys.argv[1]
    out_path = sys.argv[2] if len(sys.argv) > 2 else None

    reader = PdfReader(path)
    parts: list[str] = []
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        parts.append(f"--- page {i + 1} ---\n{text}")

    result = "\n\n".join(parts).strip()
    if not result.replace("-", "").strip():
        print(
            "추출된 텍스트가 거의 없습니다. "
            "페이지가 이미지로만 된 스캔본이면 OCR(예: Adobe, 네이버 클로바 OCR)이 필요합니다.",
            file=sys.stderr,
        )

    if out_path:
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(result)
        print(f"저장: {out_path}")
    else:
        print(result)


if __name__ == "__main__":
    main()
