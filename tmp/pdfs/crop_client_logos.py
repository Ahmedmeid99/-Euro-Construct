from PIL import Image

page = Image.open('tmp/pdfs/clients-page.jpg')
logos = page.crop((985, 280, 2010, 1315))
logos.save('public/profile/client-logos.jpg', 'JPEG', quality=92, optimize=True)
