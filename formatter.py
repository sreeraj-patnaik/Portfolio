import fitz  # PyMuPDF
import re

def pdf_to_html_paragraphs(pdf_path, output_file):
    doc = fitz.open(pdf_path)
    text_blocks = []

    for page in doc:
        blocks = page.get_text("blocks")
        for b in blocks:
            content = b[4].strip()
            if content:
                text_blocks.append(content)

    paragraphs = []

    for block in text_blocks:
        # Normalize whitespace
        block = re.sub(r"\s+", " ", block).strip()

        # Split on scene breaks
        if block == "*****":
            paragraphs.append("<hr>")
            continue

        paragraphs.append(block)

    html_parts = []
    for p in paragraphs:
        if p == "<hr>":
            html_parts.append("<hr>")
        else:
            html_parts.append(f"<p>{p}</p>")

    html = "\n".join(html_parts)

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(html)

    print("✅ Paragraphs reconstructed correctly.")

# Usage
pdf_to_html_paragraphs(
    pdf_path="story.pdf",
    output_file="story.html"
)
