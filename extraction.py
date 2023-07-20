from PIL import Image

import pytesseract


img_cv = cv2.imread('text.png')
img_rgb = cv2.cvtColor(img_cv,cv2.COLOR_BGR2RGB)
print(pytesseract.image_to_string(img_rgb))
