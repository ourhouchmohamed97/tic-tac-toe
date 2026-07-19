const GameController = (()=>{

    let players = [];

    let currentPlayer = 0;

    let gameOver = false;

    const winPatterns = [

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];

    const start = (p1,p2)=>{

        players = [
            Player(p1 || "Player X","X"),
            Player(p2 || "Player O","O")
        ];

        currentPlayer = 0;
        gameOver = false;
        Gameboard.reset();
    };

    const getCurrentPlayer = ()=>players[currentPlayer];

    const playRound = (index)=>{

        if(gameOver) return;

        if(!Gameboard.placeMark(index,getCurrentPlayer().marker))
            return;

        if(checkWinner()){

            gameOver = true;
            return `${getCurrentPlayer().name} Wins`;
        }

        if(checkTie()){

            gameOver = true;
            return "Tie";
        }

        currentPlayer = currentPlayer === 0 ? 1 : 0;

        return "Continue";
    };

    const checkWinner = ()=>{

        const board = Gameboard.getBoard();

        return winPatterns.some(pattern=>{

            return pattern.every(i=>board[i]===getCurrentPlayer().marker);

        });

    };

    const checkTie = ()=>{

        return Gameboard.getBoard().every(cell=>cell!="");

    };

    return{
        start,
        playRound,
        getCurrentPlayer
    };

})();