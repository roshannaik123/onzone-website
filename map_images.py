import re

with open('../onzone-clone.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract CSS classes/IDs that contain base64 images along with their order
# Find all CSS rule blocks that have background-image with base64
css_pattern = re.compile(r'(\.[\w-]+)\s*\{[^}]*background-image\s*:\s*url\([\'"]?data:image', re.DOTALL)
css_matches = list(css_pattern.finditer(content))
print("CSS classes with base64 images:")
for m in css_matches:
    print(f"  {m.group(1)}")

# Also find inline style background-image base64
inline_pattern = re.compile(r'class="([^"]+)"[^>]*style="[^"]*background-image\s*:\s*url\([\'"]?data:image', re.DOTALL)
inline_matches = list(inline_pattern.finditer(content))
print("\nInline elements with base64 backgrounds:")
for m in inline_matches:
    print(f"  class: {m.group(1)}")

# Also find global image counter order
all_base64 = re.findall(r'data:image/[a-zA-Z]+;base64,', content)
print(f"\nTotal base64 image occurrences: {len(all_base64)}")
