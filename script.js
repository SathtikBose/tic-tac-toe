let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#restartButton");
let newgameButon = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg =document.querySelector(".winnerMsg");
let player = true;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    player = true;
    enablebutton();
    msgContainer.classList.add("hidden");
};

boxes.forEach((box)=> {
    box.addEventListener("click" , () =>{
        if (player){
            box.innerText = "X";
            player = false;
        } else {
            box.innerText = "O";
            player = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disablebutton = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enablebutton = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulation ,winner is  ${winner}`;
    msgContainer.classList.remove("hidden")
    disablebutton();
};

const checkWinner = () => {
    for (let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val == pos2Val && pos2Val == pos3Val){
                showwinner(pos1Val);
            }
        }

    }
};
newgameButon.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);