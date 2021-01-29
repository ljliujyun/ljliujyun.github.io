import os
for filename in os.listdir(os.getcwd()):
    if ".txt" in filename:
        os.remove(os.path.join(os.getcwd(), filename))