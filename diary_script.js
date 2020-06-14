console.log('started script')


async function import_one(element) {
    if (element[1] !== 'hide') {
        const response = await fetch('diary_entries/'+ element[0] + '.txt');
        const myJson = await response.text();
        const string = String(myJson);
        const text = '<h2>' + element[0] + '</h2>' + '<p>' + string.replace(/\r\n|\r|\n/g, '</p><p>') + '</p>';
        return text
    }
}

async function import_text() {
    const response = await fetch('catalogue.txt');
    const myJson = await response.text();
    const string = String(myJson);
    const array = string.split(/\r\n|\r|\n/).map(atom => atom.split('_'));

    for (const element of array) {
        text = await import_one(element)
        if (text !== undefined) {
            document.getElementsByClassName('row').item(0).innerHTML += text;
        }
    }
}


import_text()


console.log('finished script')
