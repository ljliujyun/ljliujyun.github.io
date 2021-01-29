
async function import_text(name) {
    const response = await fetch('diary_entries/'+name);
    console.log(response);
    const myJson = await response.text();
    const string = String(myJson);
    document.getElementById('content').innerHTML = string;
    console.log('end');
    
}
async function import_nav() {
    const response = await fetch('nav.html');
    console.log(response);
    const myJson = await response.text();
    const string = String(myJson);
    document.getElementById('nav').innerHTML = string;
    console.log('hi')

    document.querySelectorAll('.nav').forEach(item => {
        console.log(item);
        item.addEventListener('click', event => {
          console.log(item.innerHTML);
          import_text(item.innerHTML)
        })
      })
    
    
}


import_nav()


