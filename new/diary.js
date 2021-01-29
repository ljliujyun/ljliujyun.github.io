var a = document.getElementsByTagName("a")[0]
console.log(a)
a.onclick = showAlert; // Add onclick function to element
    
function showAlert(event) {
    console.log("onclick Event triggered!");
}

async function import_text() {
    const response = await fetch('nav.html');
    const myJson = await response.text();
    const string = String(myJson);
    document.getElementById('content').innerHTML = string;
    console.log('hi')
}


import_text()