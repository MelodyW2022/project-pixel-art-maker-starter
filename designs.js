// Select color input
const color = document.getElementById('colorPicker').value;

// Select size input




//create a table  with inputHeight and inputWidth using nested for loop
function makeGrid() {
    const table = document.getElementById('pixelCanvas');
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    //create height number of tr and add the newTableRow to the table
    for (let row = 0; row < height; row++) {
        const newTableRow = document.createElement('tr');
        table.appendChild(newTableRow);

        //create width number of td and add the newTableCell to the newTableRow
        for (let col = 0; col < width; col++) {
            const newTableCell = document.createElement('td');
            newTableRow.appendChild(newTableCell);
        }
    }
}
// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();
});
// TODO: