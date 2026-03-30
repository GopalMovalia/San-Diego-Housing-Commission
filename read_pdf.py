import sys
try:
    import PyPDF2
    with open('20260219141339137 RFP IT-26-07 Website Redesign.pdf', 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        text = ""
        for i in range(min(10, len(reader.pages))): # Read first 10 pages to avoid huge output
            text += reader.pages[i].extract_text() + "\n"
        with open('pdf_content.txt', 'w', encoding='utf-8') as out:
            out.write(text)
    print("PyPDF2 success")
except ImportError:
    try:
        import fitz
        doc = fitz.open('20260219141339137 RFP IT-26-07 Website Redesign.pdf')
        text = ""
        for i in range(min(10, len(doc))):
            text += doc[i].get_text() + "\n"
        with open('pdf_content.txt', 'w', encoding='utf-8') as out:
            out.write(text)
        print("fitz success")
    except ImportError:
        print("Missing pdf libraries. Please install PyPDF2 or PyMuPDF.")
