import docx
import json

doc = docx.Document('/vercel/sandbox/uploads/ARADHYA FINAL WEBSITE.docx')

all_paragraphs = []
for para in doc.paragraphs:
    text = para.text.strip()
    if text:
        all_paragraphs.append(text)

print(f"Total paragraphs: {len(all_paragraphs)}")
print("\n=== COMPLETE DOCUMENT STRUCTURE ===\n")

for i, para in enumerate(all_paragraphs, 1):
    print(f"{i}. {para}")

with open('/vercel/sandbox/document_structure.json', 'w', encoding='utf-8') as f:
    json.dump(all_paragraphs, f, indent=2, ensure_ascii=False)

print("\n\n=== Document saved to document_structure.json ===")
