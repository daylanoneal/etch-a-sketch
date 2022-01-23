// Get elements
const grid = document.querySelector('.grid');
const container = document.querySelector('container');
const clear = document.getElementById('clear');

// Set default size and color
let selectedSize = 25;
let selectedColor = 'black';

// Create grid based on size
const createGrid = size => {
    // Set the CSS grid properties
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);

    // Create ${size} rows
    for (c = 0; c < (size ** 2); c++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        // cell.innerText = (c + 1);
        grid.appendChild(cell);
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = selectedColor; // Add functionality to set other colors
        });
    };
};

// Clear current grid and create new one with size based on prompt
const handleClear = () => {
    const gridPixels = grid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => {
        gridPixel.style.backgroundColor = "#ffffff";
    });

    newSize = prompt("Enter a new size (for example, 16 = 16x16 grid");
    if ((newSize > 100) || (newSize <= 0)) {
        newSize = prompt("Invalid input. Please enter a size between 1 and 100.")
    } else { 
        selectedSize = newSize;
        createGrid(selectedSize);
    };
};

createGrid(selectedSize);
clear.addEventListener('click', handleClear);