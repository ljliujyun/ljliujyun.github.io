import os
folders = ['diary_entries','books_entries','films_entries','work_entries']
for folder in folders: 
    with open(os.path.join(os.getcwd(),folder, "nav.html"), 'w', encoding="utf8") as f:
        f.write('<h1>')
        f.write(folder)
        f.write('</h1>')

        f.write('\n')
        for filename in os.listdir(os.getcwd()+"/"+folder):
            if ".html" in filename and "nav.html" not in filename:
                f.write('<a class="nav2item">'+filename+'</a>')
                f.write('\n')