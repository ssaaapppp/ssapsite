// script.js
const chessboard = document.getElementById('chessboard');

// 체스 기물의 이모지 정의
const pieceEmojis = {
    'r': '♜',  // Rook (흑)
    'n': '♞',  // Knight (흑)
    'b': '♝',  // Bishop (흑)
    'q': '♛',  // Queen (흑)
    'k': '♚',  // King (흑)
    'p': '♟',  // Pawn (흑)
    'R': '♖',  // Rook (백)
    'N': '♘',  // Knight (백)
    'B': '♗',  // Bishop (백)
    'Q': '♕',  // Queen (백)
    'K': '♔',  // King (백)
    'P': '♙'   // Pawn (백)
};

// 초기 체스 기물 배치
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

let selectedSquare = null;
let board = Array(64).fill(null);

function createChessboard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.dataset.index = i;
        chessboard.appendChild(square);

        if (pieces[i]) {
            const piece = document.createElement('div');
            piece.className = 'piece';
            piece.textContent = pieceEmojis[pieces[i]];
            square.appendChild(piece);
        }

        square.addEventListener('click', handleSquareClick);
    }
}

function handleSquareClick(event) {
    const index = event.currentTarget.dataset.index;
    const square = event.currentTarget;

    if (selectedSquare === null) {
        if (square.querySelector('.piece')) {
            square.classList.add('selected');
            selectedSquare = index;
        }
    } else {
        if (index !== selectedSquare) {
            const fromIndex = selectedSquare;
            const toIndex = index;

            // 기본적인 이동 구현
            const fromSquare = document.querySelector(`[data-index='${fromIndex}']`);
            const toSquare = document.querySelector(`[data-index='${toIndex}']`);
            const piece = fromSquare.querySelector('.piece');

            if (piece) {
                toSquare.appendChild(piece);
                fromSquare.classList.remove('selected');
                selectedSquare = null;
            }
        } else {
            square.classList.remove('selected');
            selectedSquare = null;
        }
    }
}

createChessboard();
