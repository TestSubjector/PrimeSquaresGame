player = 1;
computer = "X";
playerTwo = 2;
player_score = 0;
computer_score = 0;
counter = 0;
last_move_index = -1;


board_full = false;
winner_found = false;
// play_board = ["", "", "", "", "", "", "", "", ""];
play_board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
html_board = document.getElementsByClassName("block");
winner_statement = document.getElementById("winner");
html_player_score = document.getElementById("player-score");
html_computer_score = document.getElementById("computer-score");

initial_text_player_score = html_player_score.innerText;
initial_text_computer_score = html_computer_score.innerText;

render_board = () => {
  play_board.forEach((element, index) => {
    html_board[index].innerText = play_board[index].toString();
    if (occupied[index] != 0){
        html_board[index].className += " " + "occupied";
    }
    // if (element == player || element == playerTwo) {
    //   html_board[index].className += " " + "occupied";
    // }
  });
};

check_board_complete = () => {
  let flag = true;
  play_board.forEach(element => {
    if (element != player && element != playerTwo) {
      flag = false;
    }
  });
  if (flag == false) {
    board_full = false;
  } else {
    board_full = true;
  }
};

// check_line = (a, b, c) => {
//   return (
//     play_board[a] == play_board[b] &&
//     play_board[b] == play_board[c] &&
//     (play_board[a] == player || play_board[a] == playerTwo)
//   );
// };

check_if_prime = num => {
    for (i = 2; i <= Math.sqrt(num); ++i){
        if (num % i == 0) return true;
    }
    return false;
};

check_line = (a, b, c) => {
    if (occupied[a] != occupied[b] || occupied[b] != occupied[c]) return false;
    if (occupied[a] == 0) return false;
    return (
        check_if_prime(play_board[a]* 100 + play_board[b] * 10 + play_board[c])
        ||
        check_if_prime(play_board[c]* 100 + play_board[b] * 10 + play_board[a])
    );
};

check_match = () => {
  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1, i + 2)) {
      html_board[i].classList.add("win");
      html_board[i + 1].classList.add("win");
      html_board[i + 2].classList.add("win");
      return occupied[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3, i + 6)) {
      html_board[i].classList.add("win");
      html_board[i + 3].classList.add("win");
      html_board[i + 6].classList.add("win");
      return occupied[i];
    }
  }
  if (check_line(0, 4, 8)) {
    html_board[0].classList.add("win");
    html_board[4].classList.add("win");
    html_board[8].classList.add("win");
    return occupied[0];
  }
  if (check_line(2, 4, 6)) {
    html_board[2].classList.add("win");
    html_board[4].classList.add("win");
    html_board[6].classList.add("win");
    return occupied[2];
  }
  return "";
};

check_for_winner = () => {
  winner_found = check_match();
  if (winner_found == player) {
    player_score += 1;
    winner.innerText = "Winner is Player One!!";
    winner.classList.add("playerWin");
  } else if (winner_found == playerTwo) {
    computer_score += 1;
    winner.innerText = "Winner is Player Two";
    winner.classList.add("computerWin");
  } else if (board_full) {
    winner.innerText = "Draw!";
    winner.classList.add("draw");
  }
  html_player_score.innerText = initial_text_player_score + " " + player_score;
  html_computer_score.innerText =
    initial_text_computer_score + " " + computer_score;
};

addPlayerMove = e => {
  if (!winner_found && occupied[e] == 0) {
    if (last_move_index != -1 && last_move_index != e){
        occupied[last_move_index] = (counter % 2) + 1;
        last_move_index = e;
    }
    play_board[e] = (play_board[e] + 1)%9;
    counter++;
    render_board();
    // check_board_complete();
    check_for_winner();
    return;
    play_board[e] = (counter % 2 == 0 ? player : playerTwo);
    // if (!board_full) {
    //   addComputerMove();
    // }
  } else {
  }
};

// addPlayerTwoMove = e => {
//     if (!winner_found && play_board[e] == "") {
//       play_board[e] = playerTwo;
//       render_board();
//       check_board_complete();
//       check_for_winner();
//     //   if (!board_full) {
//     //     addComputerMove();
//     //   }
//     } else {
//     }
//   };

// addComputerMove = () => {
//   if (!winner_found) {
//     do {
//       selected = Math.floor(Math.random() * 9);
//     } while (play_board[selected] != "");
//     play_board[selected] = computer;
//     render_board();
//     check_for_winner();
//   }
// };

reset_board = () => {
  play_board = ["", "", "", "", "", "", "", "", ""];
  board_full = false;
  winner_found = false;
  play_board.forEach((element, index) => {
    html_board[index].classList.remove("occupied");
    html_board[index].classList.remove("win");
  });
  winner.classList.remove("playerWin");
  winner.classList.remove("computerWin");
  winner.innerText = "";
  render_board();
};

reset_match = () => {
  reset_board();
  player_score = 0;
  computer_score = 0;
  html_player_score.innerText = initial_text_player_score + " " + player_score;
  html_computer_score.innerText =
    initial_text_computer_score + " " + computer_score;
};