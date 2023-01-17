const cell = document.querySelectorAll(".cell")


const gameboard = (() => {
    
    const board = [];
        for (let i = 0; i < cell.length; i ++){
            board.push(cell[i])
     }

   //players
    const players = (name, mark, turn) => {
        return {name, mark, turn}
    }
    const player1 = players('Player 1', 'X')
    const player2 = players('Player 2', 'O')
    let activePlayer = player1

    const display = document.querySelector('.display')
    

     function switchPlayers(){
        if (activePlayer === player1){
         activePlayer = player2
        }
        else{
         activePlayer = player1
        }
     }

    // unremove cell events and clear cells,
     //active player = player1
     function reset(){
        activePlayer = player1;
        displayPlayer();
        cell.forEach(cell => {
            cell.textContent = ""
        })

    };
  const resetBtn = document.querySelector(".reset");
    resetBtn.onclick = reset;

    //check winner if winner reset
    const winningCombos =[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],
        [1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    const checkWinner = () =>{
        winningCombos.forEach((element) => {
            if (board[element[0]] === activePlayer.mark &&
                 board[element[1]] === activePlayer.mark &&
                 board[element[2]] === activePlayer.mark){
                    //return this player wins and prevent any more clicks
                    display.textContent = activePlayer.name + "wins!";

                 }
              
    })}

    function displayPlayer(){
        if (activePlayer === player1){
            display.textContent = "Player X's turn"
        }else if( activePlayer === player2){
            display.textContent = "Player O's turn"
        }else{
            return;
       }
    }
        
    //check if all indexes equal a string then reset


    return {board, switchPlayers, checkWinner, player1, player2
    , displayPlayer, reset, activePlayer}

})();

gameboard.displayPlayer()

const gamecontrol = (() => { 
//when cell clicked
    cell.forEach(cell => {
        cell.addEventListener('click', () => {
            //display player
            cell.textContent = gameboard.activePlayer.mark
            gameboard.displayPlayer()
            // update array value

            //remove event from cell
            
            //if winner combo reset all
           gameboard.checkWinner()
            //if not next player true
  
})
});


})();
