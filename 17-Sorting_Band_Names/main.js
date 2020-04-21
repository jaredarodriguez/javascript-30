// const list = document.getElementById('bands');
const bands = ['Fiona Apple', 'Rufus Wainwright', 'The Men', 'A Tribe Called Quest', 'An Eagle\'s Nest', 'Parquet Courts', 'John Prine', 'Bill Withers'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1); 
 
document.querySelector('#bands').innerHTML = sortedBands.map(band =>
        `
        <li>${band}</li>
        `
    ).join('');