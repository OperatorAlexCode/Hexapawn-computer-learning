const boardStates2 = [
    [
        ["A","A","A"],
        ["P","",""],
        ["","P","P"]
    ],
    [
        ["A","A","A"],
        ["","P",""],
        ["P","","P"]
    ],
    [
        ["A","A","A"],
        ["","","P"],
        ["P","P",""]
    ]
];

let Moves2 = [
    [
        [
            [0,1],
            [1,0]
        ],
        [
            [0,1],
            [1,1]
        ],
        [
            [0,2],
            [1,2]
        ]
    ],
    [
        [
            [0,0],
            [1,0]
        ],
        [
            [0,0],
            [1,1]
        ],
        [
            [0,2],
            [1,2]
        ],
        [
            [0,2],
            [1,1]
        ]
    ],
    [
        [
            [0,0],
            [1,0]
        ],
        [
            [0,1],
            [1,1]
        ],
        [
            [0,1],
            [1,2]
        ]
    ]
];

const boardStates4 = [
    [
        [ "","A","A"],
        ["A","P","P"],
        ["P", "", ""]
    ],
    [
        [ "","A","A"],
        ["","A","P"],
        ["P","", ""]
    ],
    [
        ["A","A",""],
        ["P","","P"],
        ["", "","P"]
    ],
    [
        ["A","","A"],
        ["P", "",""],
        ["","", "P"]
    ],
    [
        ["A","A", ""],
        ["P","P","A"],
        [ "", "","P"]
    ],
    [
        ["A", "","A"],
        ["P","P", ""],
        [ "","P", ""]
    ],
    [
        ["","A","A"],
        ["P","A",""],
        ["","", "P"]
    ],
    [
        ["","A","A"],
        ["", "P",""],
        ["","", "P"]
    ],
    [
        ["A", "","A"],
        ["A","P", ""],
        [ "", "","p"]
    ],
    [
        ["A", "","A"],
        ["A", "","P"],
        [ "","P", ""]
    ],
    [
        [ "","A","A"],
        [ "","P", ""],
        ["P", "", ""]
    ],
    [
        ["A","","A"],
        [ "","","P"],
        ["P", "",""]
    ],
    [
        ["A", "","A"],
        ["A", "", ""],
        [ "", "","p"]
    ],
    [
        ["A","","A"],
        [ "","","P"],
        ["P", "",""]
    ],
];

let Moves4 = [
    [
        [
            [0,1],
            [1,2]
        ],
        [
            [0,2],
            [1,1]
        ]
    ],
    [
        [
            [0,1],
            [1,0]
        ],
        [
            [0,1],
            [1,1]
        ],
        [
            [0,1],
            [1,2]
        ],
        [
            [0,1],
            [1,2]
        ]
    ],
    [
        [
            [0,1],
            [1,0]
        ],
        [
            [0,1],
            [1,1]
        ],
        [
            [0,1],
            [1,2]
        ]
    ],
    [
        [
            [0,2],
            [1,2]
        ]
    ],
    [
        [
            [0,0],
            [1,1]
        ],
        [
            [0,1],
            [1,0]
        ]
    ],
    [
        [
            [0,0],
            [1,1]
        ],
        [
            [0,2],
            [1,1]
        ],
        [
            [0,2],
            [1,2]
        ]
    ],
    [
        [
            [0,1],
            [1,0]
        ],
        [
            [0,2],
            [1,2]
        ],
        [
            [1,1],
            [2,1]
        ],
        [
            [1,1],
            [2,2]
        ]
    ],
    [
        [
            [0,2],
            [1,1]
        ],
        [
            [0,2],
            [1,2]
        ]
    ],
    [
        [
            [0,0],
            [1,1]
        ],
        [
            [0,2],
            [1,1]
        ],
        [
            [0,2],
            [1,2]
        ],
        [
            [1,0],
            [2,0]
        ]
    ],
    [
        [
            [1,0],
            [2,0]
        ],
        [
            [1,0],
            [2,1]
        ]
    ],
    [
        [
            [0,2],
            [1,1]
        ],
        [
            [0,2],
            [1,2]
        ]
    ],
    [
        [
            [0,0],
            [1,0]
        ]
    ],
    [
        [
            [0,2],
            [1,2]
        ],
        [
            [1,0],
            [2,0]
        ]
    ],
    [
        [
            [0,0],
            [1,0]
        ],
        [
            [1,2],
            [2,2]
        ]
    ],
];

const boardStates6 = [
    [
        [ "","A", ""],
        ["A","P","P"],
        [ "", "", ""]
    ],
    [
        ["A", "", ""],
        ["A","P"," "],
        [ "", "", ""]
    ],
    [
        ["A", "", ""],
        ["A","A","P"],
        [ "", ""," "]
    ],
    [
        ["A", "", ""],
        ["P","P","P"],
        [ "", "", ""]
    ],
    [
        [ "","", "A"],
        ["P","A","A"],
        [ "", "", ""]
    ],
    [
        [ "","A", ""],
        ["P","A", ""],
        [ "", "", ""]
    ],
    [
        [ "", "","A"],
        ["A","P", ""],
        [ "", "", ""]
    ],
    [
        [ "", "","A"],
        [ "","P","A"],
        [ "", "", ""]
    ],
    [
        [ "","A", ""],
        ["P","P","A"],
        [ "", "", ""]
    ],
    [
        [ "", "","A"],
        ["A","A","P"],
        [ "", "", ""]
    ],
    [
        [ "","A", ""],
        [ "","A","P"]
        [ "", "", ""]
    ]
];

let Moves6 = [
    [
        [
            [0,1],
            [1,2]
        ],
        [
            [1,0],
            [2,0]
        ]
    ],
    [
        [
            [0,0],
            [1,1]
        ],
        [
            [1,0],
            [2,0]
        ]
    ],
    [
        [
            [1,0],
            [2,0]
        ],
        [
            [1,1],
            [2,1]
        ]
    ],
    [
        [
            [0,1],
            [1,2]
        ]
    ],
    [
        [
            [0,1],
            [1,0]
        ],
        [
            [1,1],
            [2,1]
        ]
    ],
    [
        [
            [1,1],
            [2,1]
        ],
        [
            [1,2],
            [2,2]
        ]
    ],
    [
        [
            [0,2],
            [1,1]
        ],
        [
            [0,2],
            [1,2]
        ],
        [
            [1,0],
            [2,0]
        ]
    ],
    [
        [
            [0,2],
            [1,1]
        ],
        [
            [1,2],
            [2,2]
        ]
    ],
    [
        [
            [0,1],
            [1,0]
        ],
        [
            [1,2],
            [2,2]
        ]
    ],
    [
        [
            [1,0],
            [2,0]
        ],
        [
            [1,1],
            [2,1]
        ]
    ],
    [
        [
            [0,1],
            [1,2]
        ],
        [
            [1,1],
            [2,1]
        ]
    ]
];

const States = [boardStates2, boardStates4, boardStates6];
const MoveSets = [Moves2, Moves4, Moves6];
let MoveList = [];

function Computer() {
    if (playing === true) {
        switch (turn) {
            case 2:
                Turn(States[0],MoveSets[0]);
                break;
    
            case 4:
                Turn(States[1],MoveSets[1]);
                break;
    
            case 6:
                Turn(States[2],MoveSets[2]);
                break;
                
            default:
                console.log("ERROR!");
                break;
        }
        for (let x = 0; x < 3; x++) {
            if (gameBoard.rows[2].cells[x].innerHTML == createPawn("AI",true)) {
                console.log("Computer");
                updateDisplay("AI");
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
    let current = CurrentBoard();
    let stateIndex;
    // console.log("Current board",current);
    // console.log(Board);
    for (board in Board) {
        // console.log("Board",Board[board]);
        // console.log(checker(current,Board[board]));
        if (checker(current,Board[board])) {
            // console.log("Identified board", Board[board],Board.indexOf(Board[board]))
            stateIndex = Board.indexOf(Board[board]);
            break;
        }
    }
    if (stateIndex !== null && stateIndex !== undefined && checker(current,Board[stateIndex])) {
        let moves = MoveSet[stateIndex];
        // console.log("moves",moves)
        let random = Math.floor(Math.random() * moves.length);
        let SelectedMove = moves[random];
        // console.log("SelectedMove",SelectedMove);
        gameBoard.rows[SelectedMove[1][0]].cells[SelectedMove[1][1]].innerHTML = createPawn("AI");
        gameBoard.rows[SelectedMove[0][0]].cells[SelectedMove[0][1]].innerHTML = "";
        MoveList.push([stateIndex, random, SelectedMove]);
        turn++;
        console.log("Turn", turn);
        checkBoard();
    }
    else {
        console.log("Turn");
        End("Pl");
    }
}

