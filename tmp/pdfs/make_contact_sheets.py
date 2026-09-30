from pathlib import Path
from PIL import Image, ImageDraw

files = sorted(Path('tmp/pdfs/profile_pages').glob('page-*.jpg'))
groups = (files[:12], files[12:24], files[24:])

for group_number, group in enumerate(groups, start=1):
    sheet = Image.new('RGB', (1200, 900), 'white')
    draw = ImageDraw.Draw(sheet)
    for index, path in enumerate(group):
        image = Image.open(path)
        image.thumbnail((380, 250))
        x = (index % 3) * 400 + 10
        y = (index // 3) * 220 + 25
        sheet.paste(image, (x, y))
        draw.text((x, y - 20), path.name, fill='black')
    sheet.save(f'tmp/pdfs/contact-{group_number}.jpg', quality=90)
