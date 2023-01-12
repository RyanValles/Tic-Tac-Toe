const cell = document.querySelectorAll("#cell")


const gameboard = (() => {
    const board = [];
    // loop through array to assign each cell to array number
        for (let i = 0; i < cell.length; i ++){
            board.push(cell[i])
     }


    const reset = () => {
        for (let i = 0; i < board.length; i++){
            board[i] = '';
        }
    };

    return board;

})();

//a button to reset the array

//a button that makes user input x or o
//on array, and resets board

//an 
