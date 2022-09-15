let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

// redDiv.onclick = () => { console.log("you clicked red") };
// yellowDiv.onclick = () => { console.log("you clicked yellow") };
// greenDiv.onclick = () => { console.log("you clicked green") };

let squares = document.querySelectorAll('.colorSquare');
console.log(squares);

//for each loop (one of the best loop);
const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
squares.forEach((square) =>
    square.onclick = () => {
        timesClicked[square.value] += 1;
        square.innerText = timesClicked[square.value];
    }
);

const clearScores = () => {
    squares.forEach(square => square.innerText = "");
}

const clearGameBtn = document.getElementById("clear-game");
clearGameBtn.onclick = () => clearScores();
