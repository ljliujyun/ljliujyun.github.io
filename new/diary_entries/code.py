import os
for filename in os.listdir(os.getcwd()):
    if ".txt" in filename:
        data = ''
        with open(os.path.join(os.getcwd(), filename), 'r', encoding="utf8") as f:
            data = f.read()
        with open(os.path.join(os.getcwd(), filename.replace('.txt','.html')), 'w', encoding="utf8") as f:
            f.write("<pre>")
            f.write("\n")
            f.write(data)
            f.write("\n")
            f.write("</pre>")
        
           
           
           
