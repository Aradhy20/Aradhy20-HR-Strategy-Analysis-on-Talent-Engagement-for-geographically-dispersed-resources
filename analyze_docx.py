import mammoth
from pathlib import Path

# Path to the DOCX file
docx_path = Path("/vercel/sandbox/uploads/ARADHYA FINAL WEBSITE.docx")

# Extract text from DOCX
with open(docx_path, "rb") as docx_file:
    result = mammoth.extract_raw_text(docx_file)
    text = result.value

# Split into paragraphs (assuming paragraphs are separated by double newlines or similar)
paragraphs = [para.strip() for para in text.split('\n\n') if para.strip()]

# Print all paragraphs
for i, para in enumerate(paragraphs, 1):
    print(f"{i}. {para}")

# Save to JSON for further analysis
import json
with open("/vercel/sandbox/document_content.json", "w") as f:
    json.dump(paragraphs, f, indent=2)

print(f"\nTotal paragraphs: {len(paragraphs)}")
print("Content saved to document_content.json")