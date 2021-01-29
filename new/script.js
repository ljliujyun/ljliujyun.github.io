

async function import_text() {
    const response = await fetch('diary_entries/2019-10-27.html');
    const myJson = await response.text();
    const string = String(myJson);
    document.getElementById('content').innerHTML = string;
    console.log('hi')
}


import_text()