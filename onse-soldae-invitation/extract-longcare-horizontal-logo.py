# 장기요양보험 CI PDF(longcare-logo-source.pdf)에서 좌우조합형 로고만 잘라 PNG로 저장
import pathlib

import fitz

HERE = pathlib.Path(__file__).resolve().parent
PDF = HERE / "leaflet-assets" / "longcare-logo-source.pdf"
OUT = HERE / "leaflet-assets" / "longcare-insurance-logo-horizontal.png"

# 플레이스먼트 기준 (PDF 포인트). Matrix(2,2)와 동일 영역이 되도록 2배 래스터 픽셀 ÷ 2
LEFT, TOP, W, H = 24.0, 416.0, 350.0, 76.0


def main() -> None:
    if not PDF.is_file():
        raise SystemExit(f"PDF 없음: {PDF}")
    pdf = fitz.open(PDF)
    page = pdf[0]
    clip = fitz.Rect(LEFT, TOP, LEFT + W, TOP + H)
    pix = page.get_pixmap(
        matrix=fitz.Matrix(2, 2), clip=clip, alpha=False
    )
    pix.save(OUT.as_posix())
    pdf.close()
    print("저장:", OUT)


if __name__ == "__main__":
    main()
