const Tiles = {
    "TL": [0, 0],
    "T": [0, 1],
    "TR": [0, 2],
    "ML": [1, 0],
    "M": [1, 1],
    "MR": [1, 2],
    "BL": [2, 0],
    "B": [2, 1],
    "BR": [2, 2],
};

const moves = {
    "T": {
        "LF": [Tiles["TL"], Tiles["ML"]],
        "LD": [Tiles["TL"], Tiles["M"]],
        "MDL": [Tiles["T"], Tiles["ML"]],
        "MF": [Tiles["T"], Tiles["M"]],
        "MDR": [Tiles["T"], Tiles["MR"]],
        "RF": [Tiles["TR"], Tiles["MR"]],
        "RD": [Tiles["TR"], Tiles["M"]],
    },
    "M": {
        "LF": [Tiles["ML"], Tiles["BL"]],
        "LD": [Tiles["ML"], Tiles["B"]],
        "MDL": [Tiles["M"], Tiles["BL"]],
        "MF": [Tiles["M"], Tiles["B"]],
        "MDR": [Tiles["M"], Tiles["BR"]],
        "RF": [Tiles["MR"], Tiles["BR"]],
        "RD": [Tiles["MR"], Tiles["B"]],
    }
}

const boardStates2 = [
    [
        ["A", "A", "A"],
        ["P", "", ""],
        ["", "P", "P"]
    ],
    [
        ["A", "A", "A"],
        ["", "P", ""],
        ["P", "", "P"]
    ],
    [
        ["A", "A", "A"],
        ["", "", "P"],
        ["P", "P", ""]
    ]
];

let Moves2 = [
    [
        moves["T"]["MDL"],
        moves["T"]["MF"],
        moves["T"]["RF"]
    ],
    [
        moves["T"]["MF"],
        moves["T"]["LD"],
        moves["T"]["RF"],
        moves["T"]["RD"]
    ],
    [
        moves["T"]["LF"],
        moves["T"]["MF"],
        moves["T"]["MDR"]
    ]
];

const boardStates4 = [
    [
        ["", "A", "A"],
        ["A", "P", "P"],
        ["P", "", ""]
    ],
    [
        ["", "A", "A"],
        ["", "A", "P"],
        ["P", "", ""]
    ],
    [
        ["A", "A", ""],
        ["P", "", "P"],
        ["", "", "P"]
    ],
    [
        ["A", "", "A"],
        ["P", "", ""],
        ["", "", "P"]
    ],
    [
        ["A", "A", ""],
        ["P", "P", "A"],
        ["", "", "P"]
    ],
    [
        ["A", "", "A"],
        ["P", "P", ""],
        ["", "P", ""]
    ],
    [
        ["", "A", "A"],
        ["P", "A", ""],
        ["", "", "P"]
    ],
    [
        ["", "A", "A"],
        ["", "P", ""],
        ["", "", "P"]
    ],
    [
        ["A", "", "A"],
        ["A", "P", ""],
        ["", "", "p"]
    ],
    [
        ["A", "", "A"],
        ["A", "", "P"],
        ["", "P", ""]
    ],
    [
        ["", "A", "A"],
        ["", "P", ""],
        ["P", "", ""]
    ],
    [
        ["A", "", "A"],
        ["", "", "P"],
        ["P", "", ""]
    ],
    [
        ["A", "", "A"],
        ["A", "", ""],
        ["", "", "p"]
    ],
    [
        ["A", "A", ""],
        ["", "P", ""],
        ["P", "", ""]
    ],
    [
        ["", "A", "A"],
        ["P", "", "P"],
        ["P", "", ""]
    ],
    [
        ["A", "", "A"],
        ["A", "", ""],
        ["", "P", ""]
    ],
];

let Moves4 = [
    [
        moves["T"]["MDR"],
        moves["T"]["RD"]
    ],
    [
        moves["M"]["MDL"],
        moves["M"]["MF"],
        moves["T"]["MDR"]
    ],
    [
        moves["T"]["MDL"],
        moves["T"]["MF"],
        moves["T"]["MDR"]
    ],
    [
        moves["T"]["RF"]
    ],
    [
        moves["T"]["LD"],
        moves["T"]["MDL"]
    ],
    [
        moves["T"]["LD"],
        moves["T"]["RD"],
        moves["T"]["RF"]
    ],
    [
        moves["T"]["MDL"],
        moves["T"]["RF"],
        moves["M"]["MF"],
        moves["M"]["MDR"]
    ],
    [
        moves["T"]["RD"],
        moves["T"]["RF"]
    ],
    [
        moves["T"]["LD"],
        moves["T"]["RD"],
        moves["T"]["RF"],
        moves["M"]["LF"]
    ],
    [
        moves["M"]["LF"],
        moves["M"]["LD"]
    ],
    [
        moves["T"]["RD"],
        moves["T"]["RF"]
    ],
    [
        moves["T"]["LF"]
    ],
    [
        moves["T"]["RF"],
        moves["M"]["LF"]
    ],
    [
        moves["T"]["LF"]
    ],
    [
        moves["T"]["MF"],
        moves["T"]["MDR"]
    ],
    [
        moves["M"]["LF"],
        moves["M"]["LD"],
        moves["T"]["RF"]
    ],
];

const boardStates6 = [
    [
        ["", "A", ""],
        ["A", "P", "P"],
        ["", "", ""]
    ],
    [
        ["A", "", ""],
        ["A", "P", ""],
        ["", "", ""]
    ],
    [
        ["A", "", ""],
        ["A", "A", "P"],
        ["", "", " "]
    ],
    [
        ["A", "", ""],
        ["P", "P", "P"],
        ["", "", ""]
    ],
    [
        ["", "", "A"],
        ["P", "A", "A"],
        ["", "", ""]
    ],
    [
        ["", "A", ""],
        ["P", "A", ""],
        ["", "", ""]
    ],
    [
        ["", "", "A"],
        ["A", "P", ""],
        ["", "", ""]
    ],
    [
        ["", "", "A"],
        ["", "P", "A"],
        ["", "", ""]
    ],
    [
        ["", "A", ""],
        ["P", "P", "A"],
        ["", "", ""]
    ],
    [
        ["", "", "A"],
        ["A", "A", "P"],
        ["", "", ""]
    ],
    [
        ["", "A", ""],
        ["", "A", "P"]
        ["", "", ""]
    ],
    [
        ["A", "", ""],
        ["P", "A", "P"],
        ["", "", " "]
    ],
    [
        ["A", "", ""],
        ["P", "P", "A"],
        ["", "", ""]
    ],
    [
        ["", "", "A"],
        ["A", "P", "A"],
        ["", "", ""]
    ],
    [
        ["A", "", ""],
        ["A", "", "P"],
        ["", "", " "]
    ],
    [
        ["A", "", ""],
        ["A", "P", "A"],
        ["", "", ""]
    ]
];

let Moves6 = [
    [
        moves["T"]["MDR"],
        moves["M"]["LF"]
    ],
    [
        moves["T"]["LD"],
        moves["M"]["LF"]
    ],
    [
        moves["M"]["LF"],
        moves["M"]["MF"]
    ],
    [
        moves["T"]["LD"]
    ],
    [
        moves["T"]["MDL"],
        moves["M"]["MF"]
    ],
    [
        moves["M"]["MF"],
        moves["M"]["RF"]
    ],
    [
        moves["T"]["RD"],
        moves["T"]["RF"],
        moves["M"]["LF"]
    ],
    [
        moves["T"]["RD"],
        moves["M"]["RF"]
    ],
    [
        moves["T"]["MDL"],
        moves["M"]["RF"]
    ],
    [
        moves["M"]["LF"],
        moves["M"]["MF"]
    ],
    [
        moves["T"]["MDR"],
        moves["M"]["MF"]
    ],
    [
        moves["M"]["MF"]
    ],
    [
        moves["T"]["LD"],
        moves["M"]["RF"]
    ],
    [
        moves["T"]["RD"],
        moves["M"]["RF"],
        moves["M"]["LF"]
    ],
    [
        moves["M"]["LF"]
    ],
    [
        moves["M"]["LF"],
        moves["M"]["DF"],
        moves["M"]["RF"],
        moves["M"]["DF"]
    ]
];

const States = [boardStates2, boardStates4, boardStates6];
const MoveSets = [Moves2, Moves4, Moves6];
let MoveList = [];

function Computer() {
    if (playing === true) {
        switch (turn) {
            case 2:
                Turn(States[0], MoveSets[0]);
                break;

            case 4:
                Turn(States[1], MoveSets[1]);
                break;

            case 6:
                Turn(States[2], MoveSets[2]);
                break;

            default:
                console.log("ERROR!");
                break;
        }
        for (let x = 0; x < 3; x++) {
            if (gameBoard.rows[2].cells[x].innerHTML == createPawn("AI", true)) {
                End("AI");
                RemoveEventsToPawns();
                return;
            }
        }
    }
}

function checker(array1, array2) {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (array1[y][x] !== array2[y][x]) {
                return false;
            }
        }
    }
    return true;
}

function Turn(Board, MoveSet) {
    console.log("Turn", turn);
    let current = CurrentBoard();
    let stateIndex;
    console.log("Current board",current);
    // console.log(Board);
    for (board in Board) {
        // console.log("Board",Board[board]);
        // console.log(checker(current,Board[board]));
        if (checker(current, Board[board])) {
            // console.log("Identified board", Board[board],Board.indexOf(Board[board]))
            stateIndex = Board.indexOf(Board[board]);
            break;
        }
    }
    if (stateIndex !== null && stateIndex !== undefined && checker(current, Board[stateIndex])) {
        let moves = MoveSet[stateIndex];
        // console.log("moves",moves)
        let random = Math.floor(Math.random() * moves.length);
        let SelectedMove = moves[random];
        // console.log("SelectedMove",SelectedMove);
        gameBoard.rows[SelectedMove[1][0]].cells[SelectedMove[1][1]].innerHTML = createPawn("AI");
        gameBoard.rows[SelectedMove[0][0]].cells[SelectedMove[0][1]].innerHTML = "";
        MoveList.push([stateIndex, random, SelectedMove]);
        turn++;
        checkBoard();
    }
    else {
        console.log("Turn");
        End("Pl");
    }
}

