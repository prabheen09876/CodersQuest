from PIL import Image
import os

try:
    img_path = 'public/assets/cursor-sword.png'
    if os.path.exists(img_path):
        img = Image.open(img_path)
        img = img.resize((32, 32), Image.Resampling.NEAREST)
        img.save(img_path)
        print(f"Successfully resized {img_path} to 32x32")
    else:
        print(f"File not found: {img_path}")
except Exception as e:
    print(f"Error: {e}")
