// Get elements
const grid = document.querySelector('.grid');
const container = document.querySelector('container');

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

createGrid(selectedSize);