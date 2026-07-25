import re
with open('../onzone-clone.html', 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'data:image/[^;]+;base64,[^"]+', 'base64_image_removed', content)
with open('clean.html', 'w', encoding='utf-8') as out:
    out.write(content)
