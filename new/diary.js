async function import_text() {
    const response = await fetch('nav.html');
    console.log(response);
    const myJson = await response.text();
    const string = String(myJson);
    document.getElementById('content').innerHTML = string;
    console.log('hi')

    document.querySelectorAll('.nav').forEach(item => {
        item.addEventListener('click', event => {
          console.log(item.innerHTML);
        })
      })
    
}


import_text()