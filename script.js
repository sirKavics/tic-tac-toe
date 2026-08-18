//  STEP TIPS!

// Step 1: When we click on a game square if it's a X or O
// 'X' if it was player 1 and 'O' if it was player 2
// Update the h1 to say whose turn it is

// Step 2: Determine when the game ends
// When you click on a square, check to see the game ended (win or draw)
// Update the text when the game ends

// Step 3: Restart the game
// When you click the restart game button, reset the board

// ---------------------------------------------------------------------

const allSquares = document.querySelectorAll('.board__square');
const title = document.querySelector('.board__title')

let currentPlayer = 'X';

allSquares.forEach((square, i) => {
    square.addEventListener('click', () => {
    console.log('clicked');
    square.innerHTML = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    title.innerHTML = `${currentPlayer}'s TURN!`;
    })
});