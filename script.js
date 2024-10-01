const gameInfo = document.querySelector("[data-gameInfo]");
const boxes = document.querySelectorAll('.box');
const newGame = document.querySelector("[data-newGame]");
const ticTacToe = document.querySelector("[data-tic-tac-toe]");
const playerSymbol = document.querySelector("[data-playerSymbol]");


let currentPlayer = "X";
playerSymbol.innerText = currentPlayer;
let board = ["", "", "", "", "", "", "", "", ""];

const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
       
        if(box.innerText === "" && !checkWin() && !checkDraw()){
            
            box.innerText = currentPlayer;
            box.style.cursor  = "default";

            board[index] = currentPlayer; // Update the board state
            
            if (checkWin()) {
                gameInfo.innerText = `Winner Player - ${currentPlayer}`;
                return; // Stop further processing
            }

            if (checkDraw()) {
                gameInfo.innerText = "Game Tied !";
                return; // Stop further processing
            }
           
            swapPlayer();
            
        
        }

        
    });
});

function swapPlayer(){

    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    playerSymbol.innerText = currentPlayer;
}


function checkWin() {
    for (let i = 0; i < winningCombination.length; i++) {
        const [a, b, c] = winningCombination[i];
        if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {

            boxes[a].classList.add('bg-winning-color');
            boxes[b].classList.add('bg-winning-color');
            boxes[c].classList.add('bg-winning-color');
    
    
            return true;
        }
    }
    return false;
}


function checkDraw(){
    for(let i=0; i<board.length; i++){

        if(board[i] === ""){
            return false;
        }
    
    }
    return true;
}

newGame.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.style.cursor = "pointer";
        box.style.backgroundColor = "";
        box.classList.remove('bg-winning-color');
    });
    currentPlayer = "X";
    playerSymbol.innerText = currentPlayer;
    board = ["", "", "", "", "", "", "", "", ""];
    gameInfo.innerText = `Current Player - ${currentPlayer}`;

    

});