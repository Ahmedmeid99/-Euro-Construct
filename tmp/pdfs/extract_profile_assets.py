from pathlib import Path
from PIL import Image
from pypdf import PdfReader

source = Path(r'D:\Websites\bolt\Euro Construct - English Profile.pdf')
output = Path('public/profile')
output.mkdir(parents=True, exist_ok=True)
reader = PdfReader(source)

def save_image(page_number: int, image_name: str, output_name: str) -> Path:
    page = reader.pages[page_number - 1]
    source_image = next(image for image in page.images if image.name == image_name)
    image = source_image.image.convert('RGB')
    path = output / output_name
    image.save(path, 'JPEG', quality=88, optimize=True)
    return path

save_image(4, 'Image130.jpg', 'hero-construction.jpg')
save_image(3, 'Image96.jpg', 'about-cranes.jpg')

project_sources = {
    13: ['Image837.jpg'],
    14: ['Image847.jpg'],
    15: ['Image856.jpg'],
    16: ['Image870.jpg'],
    17: ['Image879.jpg'],
    18: ['Image888.jpg', 'Image889.jp2'],
    19: ['Image899.jpg'],
    20: ['Image908.jpg'],
    21: ['Image917.jpg'],
    22: ['Image926.jpg'],
    23: ['Image936.jpg'],
    24: ['Image945.jpg'],
    25: ['Image954.jpg'],
    26: ['Image963.jpg', 'Image964.jpg'],
    27: ['Image973.jpg'],
    28: ['Image982.jpg', 'Image983.jpg'],
    29: ['Image992.jpg'],
    30: ['Image1001.jpg'],
    31: ['Image1010.jpg'],
    32: ['Image1019.jpg'],
    33: ['Image1030.jpg'],
}

for page_number, image_names in project_sources.items():
    images = []
    for image_name in image_names:
        source_image = next(image for image in reader.pages[page_number - 1].images if image.name == image_name)
        images.append(source_image.image.convert('RGB'))

    if len(images) == 1:
        final = images[0]
    else:
        height = 1000
        resized = []
        for image in images:
            width = round(image.width * height / image.height)
            resized.append(image.resize((width, height), Image.Resampling.LANCZOS))
        final = Image.new('RGB', (sum(image.width for image in resized), height), 'white')
        cursor = 0
        for image in resized:
            final.paste(image, (cursor, 0))
            cursor += image.width

    final.save(output / f'project-{page_number - 12:02d}.jpg', 'JPEG', quality=88, optimize=True)

client_output = output / 'clients'
client_output.mkdir(exist_ok=True)
client_images = [
    image for image in reader.pages[9].images
    if 400 <= image.image.width <= 500 and 95 <= image.image.height <= 170
]
for index, source_image in enumerate(client_images, start=1):
    source_image.image.convert('RGBA').save(client_output / f'client-{index:02d}.png', 'PNG', optimize=True)

contact_sheet = Image.new('RGB', (1000, 600), 'white')
for index, source_image in enumerate(client_images):
    logo = source_image.image.convert('RGB')
    logo.thumbnail((185, 125))
    x = (index % 5) * 200 + 8
    y = (index // 5) * 190 + 25
    contact_sheet.paste(logo, (x, y))
contact_sheet.save('tmp/pdfs/client-contact.jpg', 'JPEG', quality=92)
