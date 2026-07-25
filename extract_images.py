import re, base64, os

with open('../onzone-clone.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'data:image/([a-zA-Z]+);base64,([^"\')\s]+)'
matches = re.findall(pattern, content)

os.makedirs('public/images', exist_ok=True)

print(f"Found {len(matches)} images")
for i, (ext, b64data) in enumerate(matches):
    try:
        clean = b64data.strip()
        img_data = base64.b64decode(clean)
        fname = f'public/images/img_{i}.{ext}'
        with open(fname, 'wb') as f:
            f.write(img_data)
        print(f"Saved {fname} ({len(img_data)} bytes)")
    except Exception as e:
        print(f"Error on image {i}: {e}")

print("Done!")
