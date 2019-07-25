var curr_player = "X";

var board = [["", "", ""], ["", "", ""], ["", "", ""]];
var x = 0;
var y = 0;
for (x = 0; x<3; x++){
  for (y=0; y<3; y++){
    board[x][y] = document.getElementById(`${x+1}${y+1}`);
  }
}

function checkRow(row){
  var x = 0;
  for (x=0; x<3; x++){
    if(board[row][x].innerText !== curr_player){
      return false
    }
  }
  return true
}

function checkCol(col){
  var x = 0;
  for (x=0; x<3; x++){
    if(board[x][col].innerText !== curr_player){
      return false
    }
  }
  return true
}

function checkDi(){
  var diag1 = board[0][0].innerHTML === curr_player && board[1][1].innerHTML === curr_player && board[2][2].innerHTML === curr_player;
  var diag2 = board[0][2].innerHTML === curr_player && board[1][1].innerHTML === curr_player && board[2][0].innerHTML === curr_player;
  return diag1 || diag2;
}

function checkWin(){
  var i = 0;
  for (i=0; i<3; i++){
    if(checkCol(i) || checkRow(i)) {
      return true;
    }
  }
  return checkDi()
}

function turn(){
  if (event.target.innerText === ""){
    event.target.innerText = curr_player;
    if (checkWin()){
      document.body.innerHTML = `<center id="winner">${curr_player} wins!</center>`;
    }
    else{
      curr_player = (curr_player === "X") ? "O" : "X" // this accomplishes the same thing as the commented out if/else below (is condition true? if so, do right of the colon, if not, do left of the colon):
      // if (curr_player === "O"){
      //   curr_player = "X";
      // }
      // else{
      //   curr_player = "O";
      // }
    }
  }
  else{
    alert("You've already clicked this");
  }
}
