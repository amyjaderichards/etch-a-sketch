// Variables
let newGridDimension;
let toggleOption = 'black';

// DOM Elements
const container = document.querySelector('.container');
const resetButton = document.querySelector('#clearButton');
const selectRandom = document.querySelector('#selectRandom');
const selectBlack = document.querySelector('#selectBlack');


// Functions
function createOriginalGrid() {
    for (let x = 0; x < 256; x++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', x);
        newDiv.setAttribute('class', 'gridSquare');
        container.appendChild(newDiv);
    }
}

function populateNewGrid(num) {
    for (let x = 0; x < (num * num); x++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', x);
        newDiv.setAttribute('class', 'gridSquare');
        container.appendChild(newDiv);
    }
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function toggleColour() {
    if (toggleOption === 'random') {
        toggleOption = 'black';
        document.querySelector('#toggle').textContent = 'Draw with random colours';
    } else {
        toggleOption = 'random';
        document.querySelector('#toggle').textContent = 'Draw with black squares';
    } console.log(toggleOption)
    return toggleOption
}

function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour
}

// Event Listeners

document.getElementById('container').addEventListener('mouseover', function (event) {
    var target = event.target;
    if (toggleOption == 'random') {
        target.style.backgroundColor = getRandomColour();
    } else {
        target.style.backgroundColor = 'black';
    }
}, false)

resetButton.addEventListener('click', () => {
    var squares = [].slice.call(container.children);
    squares.forEach(function (e) {
        e.style.backgroundColor = 'white'
    });

    for (let valid = 0; valid < 1;) {
        newGridDimension = window.prompt('How many columns and rows would you like for the new grid?');
        if (isNumeric(newGridDimension) === false) {
            alert('Invalid entry. Please enter one whole number');
        } else {
            newGridDimension = parseInt(newGridDimension);
            squares.forEach(function (e) {
                e.remove()
            });
            document.getElementById('container').style.gridTemplateColumns = `repeat(${newGridDimension}, 1fr)`;
            document.getElementById('container').style.gridTemplateRows = `repeat(${newGridDimension}, 1fr)`;
            populateNewGrid(newGridDimension);
            break
        }
    }
});


createOriginalGrid();