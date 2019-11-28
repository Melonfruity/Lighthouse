const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J'];

const container = document.querySelector('#container');
const playerOneBoard = document.querySelector('#playerOneBoard');
const playerTwoBoard = document.querySelector('#playerTwoBoard');

const gridSize = 400;

const createGrid = (board, player) => {
  // Create the dimensions and border of a board
  board.style.cssText = `display: grid; 
                        height: ${gridSize}px; 
                        width: ${gridSize}px; 
                        border: 1px solid black;
                        grid-template-columns: repeat(10, 1fr);
                        grid-gap: 0px`;

  // Each player's board will be an object => {tiles:{}, ships:{}}
  // The title object of the board will be linked via id's to their
  // respective tile object 

  for (let i = 0; i < 100; i++){
    let columnIndex = i % 10;
    let rowIndex = Math.floor( i / 10) + 1;
    let id = `${player}${letters[columnIndex]}${rowIndex}`;
    const gridItem = document.createElement('div');
    gridItem.style.cssText = `border: 1px solid black`;
    gridItem.id = id;
    gridItem.occupy = false;
    // Link the board
    board.appendChild(gridItem);
  }
};

// Create the grids
createGrid(playerOneBoard, 'p1');
createGrid(playerTwoBoard, 'p2');

// Get the tiles...
const boardOneTiles = [...playerOneBoard.children]
const boardTwoTiles = [...playerTwoBoard.children]

// how to get a tile -> boardOneTiles[0].style.cssText = `background-color: black;`;

const battleShip = {
  location: {
    1: 'A1',
    2: 'A2',
    3: 'A3',
    4: 'A4',
    5: 'A5'
  } 
}
for (location in battleShip.location){
  let tile = boardOneTiles.filter(tile => tile.id === `p1${battleShip.location[1]}`);
  console.log(tile, `p1${battleShip.location[1]}`)
  if(tile.length === 1){
    tile[0].style.cssText = `background-color: black;`; 
  }
}