const Gameboard = (() => {

    const board = ["","","","","","","","",""];

    const getBoard = () => board;

    const placeMark = (index, marker) => {

        if(board[index] !== "") return false;

        board[index] = marker;
        return true;
    };

    const reset = () => {

        board.fill("");
    };

    return {
        getBoard,
        placeMark,
        reset
    };

})();