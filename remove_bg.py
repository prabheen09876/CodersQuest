from PIL import Image

def remove_background(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        new_data = []
        # Assuming the background is white or near white, or black.
        # Let's check the corner pixel to determine background color
        bg_color = img.getpixel((0, 0))
        
        print(f"Detected background color at (0,0): {bg_color}")

        threshold = 30 

        for item in datas:
            # Check if pixel is close to background color
            if all(abs(item[i] - bg_color[i]) < threshold for i in range(3)):
                new_data.append((255, 255, 255, 0)) # Transparent
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(image_path, "PNG")
        print(f"Successfully removed background from {image_path}")

    except Exception as e:
        print(f"Error: {e}")

remove_background('public/assets/cursor-sword.png')
