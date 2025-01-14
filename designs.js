//by clicking submit button, first remove all the table rows
function resetGrid() {
    const table = document.getElementById('pixelCanvas');
    let firstRow = table.firstElementChild;
    while (firstRow) {
        firstRow.remove();
        firstRow = table.firstElementChild;
    }
 }

//by clicking submit button, after resetGrid(), create a table with inputHeight and inputWidth using nested for loop
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
            /*add a event listener to each grid square so that when a grid square is clicked, the background color of it
            then gets changed to the selected color*/
            newTableCell.addEventListener('click', function (event) {
                const color = document.getElementById('colorPicker').value;
                event.target.style.backgroundColor = color;
            });
            newTableRow.appendChild(newTableCell);
        }
    }
}

// When inputHeight and inputWidth are submitted by the user, call resetGrid() then makeGrid()
document.addEventListener('submit', function (event) {
    event.preventDefault();
    resetGrid();
    makeGrid();
});
//