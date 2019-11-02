console.log('started script')
let d = new Date();
document.getElementById('date').innerHTML += "<p>Today's date is " + d + "</p>"


async function importone(date) {
    const response = await fetch(date+'.txt');
    const myJson = await response.text();
    const string = String(myJson);
    const text = '<h2>'+ date +'</h2>' + '<p>' + string.replace(/\r\n/g,'</p><p>') + '</p>';
    console.log(string.split());

    document.getElementsByClassName('column mid').item(0).innerHTML += text;

}

async function importtext() {
    const response = await fetch('catalogue.txt');
    const myJson = await response.text();
    const string = String(myJson);
    const array =  string.split(/\r\n/);
    array.forEach(element => {
        importone(element);
    });
}


importtext()

console.log('finished script')
