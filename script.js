let cell = document.querySelectorAll(".cell")


const gameboard = (() => {
    
    const board = [];
        for (let i = 0; i < cell.length; i ++){
            board.push(cell[i])
     }

    const players = (name, mark) => {
        return {name, mark}
    }
    const player1 = players('Player X', 'X')
    const player2 = players('Player O', 'O')
    

    const display = document.querySelector('.display')
    function displayPlayer(){
        
        if (activePlayer === player1){
            display.textContent = "Player X's Turn"
        }else if(activePlayer === player2){
            display.textContent = "Player O's Turn"
        }else{
            return;
       }
    }
    let activePlayer = player1
    let nonActivePlayer = player2
     function switchPlayers(){
        
        if (activePlayer === player1){
       activePlayer = player2;
       nonActivePlayer = player1;
        
        }
        else if(activePlayer === player2){
          activePlayer = player1
          nonActivePlayer = player2;
        }
        
      
    };

    // unremove cell events
    function reset(){
        activePlayer = player1;
        displayPlayer();
        cell.forEach((cell, index) => {
            cell.textContent = ""
            board[index] = ""
            cell.removeAttribute
        })
    };
    const resetBtn = document.querySelector(".reset");
    resetBtn.onclick = reset;

    const winningCombos =[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],
        [1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    function checkWinner(){
        winningCombos.forEach((element) => {
            if (board[element[0]] === activePlayer.mark &&
                 board[element[1]] === activePlayer.mark &&
                 board[element[2]] === activePlayer.mark){
                    //prevent any more clicks
                    display.textContent = nonActivePlayer.name + " wins!";
                    cell.forEach(cell =>{
                        if (cell.textContent !='X' || cell.textContent != 'O'){
                            cell.textContent = ";)"
                        }
                    })
                    
             }       
        });
    }
 
    
    cell.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if(cell.textContent === 'X' || cell.textContent === 'O'
            || cell.textContent === ';)'){
                return
            }else{
            cell.textContent = activePlayer.mark; 
            switchPlayers();displayPlayer();
            board[index] = activePlayer.mark;
            //remove event from cell
             
            checkWinner()}
          
        })
    });
  
    //check if all indexes equal a string then reset


    return {board, activePlayer, switchPlayers, checkWinner, player1, player2,
        displayPlayer, reset}

})();




