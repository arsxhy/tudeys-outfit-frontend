import os
import re

directory = '/home/arsxhy/Projects/Coba-Coba-Vibe-Coding/TudeysOutfit/frontend/src'
api_url_var = "${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}"

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace "http://localhost:3001..." with `${...}...`
    # E.g. "http://localhost:3001/products" -> `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/products`
    content = re.sub(r'"http://localhost:3001([^"]*)"', rf'`{api_url_var}\1`', content)
    
    # Replace `http://localhost:3001...` with `${...}...`
    content = re.sub(r'`http://localhost:3001([^`]*)`', rf'`{api_url_var}\1`', content)

    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Processed {filepath}")

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                if 'http://localhost:3001' in f.read():
                    process_file(filepath)
