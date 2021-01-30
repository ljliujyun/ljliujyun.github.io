async function import_text(folder, name) {
    const response = await fetch(folder +'/'+name);
    console.log(response);
    const myJson = await response.text();
    const string = String(myJson);
    document.getElementById('content').innerHTML = string;
    console.log('end');
    
}

async function import_nav2(folder) {
    document.querySelectorAll('.nav2item').forEach(item => {
        item.addEventListener('click', event => {
          import_text(folder, item.innerHTML)
        })
      })    
}

async function import_fetchnav1(folder) {
  const response = await fetch(folder+'/nav.html');
  const myJson = await response.text();
  const string = String(myJson);
  document.getElementById('nav2').innerHTML = string;
  import_nav2(folder)
}

async function import_nav1() {
  document.querySelectorAll('.nav1item').forEach(item => {
    item.addEventListener('click', event => {
      import_fetchnav1(item.innerHTML)
    })
  })
  
}

import_nav1()


