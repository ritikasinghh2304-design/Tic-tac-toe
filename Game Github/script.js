let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

function makeMove(index) {

    if (board[index] !== "" || gameOver) {
        return;
    }

    board[index] = currentPlayer;

    document.getElementsByClassName("cell")[index].innerText = currentPlayer;

    checkWinner();

    if (!gameOver) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        document.getElementById("status").innerText =
            "Player " + currentPlayer + "'s Turn";
    }
}

function checkWinner() {

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winningPatterns) {

        let [a, b, c] = pattern;

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            document.getElementById("status").innerText =
                "Player " + currentPlayer + " Wins!";

            gameOver = true;
            return;
        }
    }

    if (!board.includes("")) {
        document.getElementById("status").innerText = "It's a Draw!";
        gameOver = true;
    }
}

function resetGame() {

    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    let cells = document.getElementsByClassName("cell");

    for (let cell of cells) {
        cell.innerText = "";
    }

    document.getElementById("status").innerText =
        "Player X's Turn";
}