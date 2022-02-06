const gameBoard = document.getElementById("board");
const nextRoundBtn = document.getElementById("nextRoundBtn");

nextRoundBtn.addEventListener("click", () => {
    ResetBoard();
    nextRoundBtn.style.display = "none";
    turn = 1;
    AddEventsToPawns();
    playing = true;
});

// const clock = setInterval(showMove,500);
let Select = false;
let moveTarget = [];
let currentlySelected;
let turn = 1;
let playing = true;

function AddEventsToPawns() {
    document.querySelectorAll('.own').forEach(item => {
        item.addEventListener('click', () => {
            let temp = document.getElementsByClassName("selected");
            if (temp.length === 1 && temp[0] != item) {
                temp[0].classList.toggle("selected");
            }
            item.classList.toggle("selected");
            currentlySelected = item;
            Select = true;
            if (document.getElementsByClassName("selected").length === 0) {
                Select = false;
            }
            showMove();
        })
    })
}

function RemoveEventsToPawns() {
    document.querySelectorAll('.own').forEach(item => {
        item.outerHTML = item.outerHTML;
    })
}

function createPawn(type,read=false) {
    switch (type) {
        case "Pl":
            let pawnP;
            if (read === true) {
                pawnP = "<div class=\"pawn own\">P</div>";
            }
            else {
                pawnP = "<div class='pawn own'>P</div>";
            }
            return pawnP;
        case "AI":
            let pawnA;
            if (read === true) {
                pawnA = "<div class=\"pawn AI\">A</div>";
            }
            else {
                pawnA = "<div class='pawn AI'>A</div>";
            }
            return pawnA;
    }
}

function CurrentBoard() {
    let newBoard = [];
    for (let x = 0; x < gameBoard.rows.length; x++) {
        let temp = [];
        for (let y = 0; y < gameBoard.rows[x].cells.length; y++) {
            if (gameBoard.rows[x].cells[y].innerHTML == createPawn("AI",true)) {
                temp.push("A");
            }
            else if (gameBoard.rows[x].cells[y].innerHTML == createPawn("Pl",true)) {
                temp.push("P");
            }
            else {
                temp.push("");
            }
        }
        newBoard.push(temp);
    }
    return newBoard;
}

function showMove() {
    if (Select === true) {
        let selectedPawn = document.getElementsByClassName("selected");
        if (currentlySelected != selectedPawn) {
                for (let x = 0; x < moveTarget.length; x++) {
                    moveTarget[x].classList.toggle("moveTo");
                }
                moveTarget = [];
        }
        let tdParent = selectedPawn[0].closest("td");
        let trParent = selectedPawn[0].closest("tr");
        if (gameBoard.rows[getKey(gameBoard.rows, trParent)].cells[getKey(trParent.cells,tdParent)].innerHTML) {
            if (!gameBoard.rows[getKey(gameBoard.rows, trParent)-1].cells[getKey(trParent.cells,tdParent)].innerHTML) {
                let tile = gameBoard.rows[getKey(gameBoard.rows, trParent)-1].cells[getKey(trParent.cells,tdParent)];
                tile.classList.toggle("moveTo");
                tile.addEventListener("click", function() {Move(tile)});
                moveTarget.push(tile);
            }
            if (getKey(trParent.cells,tdParent) > 0) {
                if (gameBoard.rows[getKey(gameBoard.rows, trParent)-1].cells[parseInt(getKey(trParent.cells,tdParent))-1].innerHTML == createPawn("AI",true)) {
                    let tile = gameBoard.rows[getKey(gameBoard.rows, trParent)-1].cells[getKey(trParent.cells,tdParent)-1];
                    tile.classList.toggle("moveTo");
                    tile.addEventListener("click", function() {Move(tile)});
                    moveTarget.push(tile);
                }
            }
            if (parseInt(getKey(trParent.cells,tdParent)) < 2) {
                if (gameBoard.rows[getKey(gameBoard.rows, trParent)-1].cells[parseInt(getKey(trParent.cells,tdParent))+1].innerHTML == createPawn("AI",true)) {
                    let tile = gameBoard.rows[getKey(gameBoard.rows, trParent)-1].cells[parseInt(getKey(trParent.cells,tdParent))+1];
                    tile.classList.toggle("moveTo");
                    tile.addEventListener("click", function() {Move(tile)});
                    moveTarget.push(tile);
                }
            }
        }
    }
    else if (Select === false && moveTarget.length > 0) {
        for (tile in moveTarget) {
            moveTarget[tile].classList.toggle("moveTo");
        }
        moveTarget = [];
    }
}

function Move(pawnToMove) {
    if (playing === true) {
        console.log("Moving")
        pawnToMove.innerHTML = createPawn("Pl");
        for (tile in moveTarget) {
            moveTarget[tile].classList.toggle("moveTo");
            moveTarget[tile].outerHTML = moveTarget[tile].outerHTML;
        }
        moveTarget = [];
        currentlySelected.closest("td").innerHTML = "";
        currentlySelected = null;
        turn++;
        RemoveEventsToPawns();
        for (let z = 0; z < 3; z++) {
            if (gameBoard.rows[0].cells[z].innerHTML == createPawn("Pl",true)) {
                console.log("Move");
                End("Pl");
                return;
            }
        }
        Computer();
    }
}

function ResetBoard() {
    for (let x = 0; x < 3;x++) {
        switch (x) {
        case 0:
            for (let z = 0; z < 3;z++) {
                gameBoard.rows[x].cells[z].innerHTML = createPawn("AI");
            }
            break;
    
        case 1:
            for (let z = 0; z < 3;z++) {
                gameBoard.rows[x].cells[z].innerHTML = "";
            }
            break;

        case 2:
            for (let z = 0; z < 3;z++) {
                gameBoard.rows[x].cells[z].innerHTML = createPawn("Pl");
            }
            break;
        }
    }
}

function updateDisplay(winner){
    switch (winner) {
        case "Pl":
            const playerScore = document.getElementById("PlayerScore");
            playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
            break;
    
        case "AI":
            const computerScore = document.getElementById("ComputerScore");
            computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
            break;
        default:
            alert("ERROR! COULDN'T SELECT WINNER");
            break;
    }
}

function checkBoard() {
    AddEventsToPawns();
    let Pawns = document.getElementsByClassName("own");
    let temp = [];
    // console.log(Pawns);
    for (pawn in Pawns) {
        // console.log(Pawns[pawn]);
        // console.log(typeof Pawns[pawn]);
        if (typeof Pawns[pawn] === "object") {
            Pawns[pawn].click();
            // console.log(moveTarget);
            for (let x = 0; x < moveTarget.length; x++) {
                temp.push(moveTarget[x]);
            }
            Pawns[pawn].click();
        }
    }
    if (temp.length == 0) {
        console.log("ckeckBoard");
        End("AI");
    }
}

function getKey(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function End(win) {
    updateDisplay(win);
    if (win === "AI") {
        for (move in MoveList) {
            // console.log(MoveList[move][2]);
            // console.log(MoveSets[move][MoveList[move][0]]);
            // console.log(MoveSets[move][MoveList[move][0]][MoveList[move][1]]);
            MoveSets[move][MoveList[move][0]].push(MoveSets[move][MoveList[move][0]][MoveList[move][1]]);
            // console.log(MoveSets[move][MoveList[move][0]]);
            // console.log("----------------")
        }
    }
    MoveList = [];
    nextRoundBtn.style.display = "flex";
    playing = false;
}

AddEventsToPawns();

