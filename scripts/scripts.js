var toeBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
var turn = "X";
var isGameOver = false;
$("#turn").html(turn);

$("#reset").click(function(){
  gameReset();
});

$(".toe").click(function(){
 var r = $(this).data("row");
 var c = $(this).data("column");
 if(toeBoard[r][c] === "" && !isGameOver) {
   toeBoard[r][c] = turn;
   $(this).html(turn);
   if(isWinner(turn)) {
     $("#winner").html(turn+" is the winner of this round!");
     isGameOver = true;
     // call reset game function
   } else {
     if(turn === "X") {
       turn = "O";
     } else if(turn === "O") {
       turn = "X";
     }
     $("#turn").html(turn);
   }
 }
});

// Probably a better way to compare current board to boards that have winners, but I've yet to learn any ways to do it with javascript so far.
function isWinner(mark) {
  // Up and Down
  if((toeBoard[0][0] === mark && toeBoard[1][0] === mark && toeBoard[2][0] === mark) || (toeBoard[0][1] === mark && toeBoard[1][1] === mark && toeBoard[2][1] === mark) || (toeBoard[0][2] === mark && toeBoard[1][2] === mark && toeBoard[2][2] === mark)) {
    return true;
  }
  
  // Left and Right
  if((toeBoard[0][0] === mark && toeBoard[0][1] === mark && toeBoard[0][2] === mark) || (toeBoard[1][0] === mark && toeBoard[1][1] === mark && toeBoard[1][2] === mark) || (toeBoard[2][0] === mark && toeBoard[2][1] === mark && toeBoard[2][2] === mark)) {
    return true;
  }
  
  // Diagonal
  if((toeBoard[0][0] === mark && toeBoard[1][1] === mark && toeBoard[2][2] === mark) || (toeBoard[0][2] === mark && toeBoard[1][1] === mark && toeBoard[2][0] === mark)) {
    return true;
  }
  return false;
}

function gameReset() {
   toeBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turn = "X";
  isGameOver = false;
  $("#winner").html("");
  $(".toe").each(function(){
    $(this).html("&nbsp");
  });
}