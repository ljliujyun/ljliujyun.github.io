import os

with open(os.path.join(os.getcwd(), "nav.html"), 'w', encoding="utf8") as f:
    for filename in os.listdir(os.getcwd()+"/diary_entries"):
        if ".html" in filename:
            f.write('<a>'+filename+'</a>')
            f.write('\n')