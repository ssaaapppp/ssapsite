// script.js
const chessboard = document.getElementById('chessboard');

const pieces = [
    'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
    'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
    'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'
];

function createChessboard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        chessboard.appendChild(square);

        if (pieces[i]) {
            const piece = document.createElement('div');
            piece.className = 'piece';
            piece.textContent = pieces[i];
            square.appendChild(piece);
        }
    }
}

createChessboard();
