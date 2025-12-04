from PIL import Image

def process_cursor(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        new_data = []
        # The user image likely has a white background or a specific color.
        # We'll assume top-left pixel is background.
        bg_color = img.getpixel((0, 0))
        print(f"Detected background color: {bg_color}")
        
        threshold = 50 # Increased threshold to catch anti-aliasing around the white border

        for item in datas:
            # Check if pixel is close to background color
            if all(abs(item[i] - bg_color[i]) < threshold for i in range(3)):
                new_data.append((255, 255, 255, 0)) # Transparent
            else:
                new_data.append(item)

        img.putdata(new_data)
        
        # Resize to 32x32 using Nearest Neighbor to keep pixel art look
        # But first, let's crop to content to maximize the sword size within 32x32
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        # Resize maintaining aspect ratio to fit in 32x32
        img.thumbnail((32, 32), Image.Resampling.NEAREST)
        
        # Create a new 32x32 transparent canvas
        final_img = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
        
        # Paste the resized sword in the center (or top-left for cursor hotspot)
        # For a sword, usually top-left or center. Let's do top-left for standard cursor feel
        final_img.paste(img, (0, 0))
        
        final_img.save(output_path, "PNG")
        print(f"Successfully processed and saved to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

process_cursor('user_cursor.png', 'public/assets/cursor-sword.png')
