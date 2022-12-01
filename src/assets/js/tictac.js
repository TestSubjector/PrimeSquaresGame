player = 1;
computer = "X";
playerTwo = 2;
player_score = 0;
computer_score = 0;
counter = 0;
last_move_index = -1;
primes_showing = false;

board_full = false;
winner_found = false;
play_board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
html_board = document.getElementsByClassName("block");
winner_statement = document.getElementById("winner");
html_player_score = document.getElementById("player-score");
html_computer_score = document.getElementById("computer-score");
html_show_primes = document.getElementById("show_primes");

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
    for (j = 2; j <= Math.sqrt(num); ++j){
        if (num % j == 0) return false;
    }
    return true;
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

winner_found_now = () => {
    play_board.forEach((element, index) => {
        if (occupied[index] == 0)
            html_board[index].className += " " + "occupied";
        occupied[index] = 3;
      });
}

check_for_winner = () => {
  winner_found = check_match();
  if (winner_found == player) {
    player_score += 1;
    winner.innerText = "Winner is Player One!!";
    winner.classList.add("playerWin");
    winner_found_now();
  } else if (winner_found == playerTwo) {
    computer_score += 1;
    winner.innerText = "Winner is Player Two";
    winner.classList.add("computerWin");
    winner_found_now();
  } else if (board_full) {
    winner.innerText = "Draw!";
    winner.classList.add("draw");
    winner_found_now();
  }
  html_player_score.innerText = initial_text_player_score + " " + player_score;
  html_computer_score.innerText =
    initial_text_computer_score + " " + computer_score;
};

addPlayerMove = e => {
  if (winner_found == 0 && occupied[e] == 0) {
    if (last_move_index != -1 && last_move_index != e){
        occupied[last_move_index] = (counter % 2) + 1;
        last_move_index = e;
        counter++;
    }
    play_board[e] = (play_board[e] + 1) % 10;
    last_move_index = e;
    render_board();
    check_for_winner();
    // print_stuff();
    return;
  } else {
  }
};

reset_board = () => {
  play_board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  board_full = false;
  winner_found = 0;
  counter = 0;
  last_move_index = -1;
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

end_game = () => {
    ++counter;
    occupied[last_move_index] = (counter % 2) + 1;
    html_board[last_move_index].className += " " + "occupied";
    board_full = true;
    check_for_winner();

    // reset_board();
};

print_stuff = () => {
    // html_board[9].innerText = occupied[last_move_index].toString() + " this";
    out_string = "; "
    for (k = 0; k < 8; ++k) out_string = out_string + (occupied[k].toString() + ",")
    out_string += occupied[8].toString()
    debug_print.innerText = "last:" + last_move_index.toString() + out_string
    // document.getElementById("demo").innerHTML = occupied[last_move_index].toString() + " this";;
};

toggle_primes = () => {
    primes_showing = !primes_showing;
    if (primes_showing) show_all_primes();
    else show_primes.innerText = "";
}

show_all_primes = () => {
    show_primes.innerText = "Here is a list of primes between 100 and 999:\n101 103\n\
    107 109 113 127 131 137 139 149 151 157 163 167 173 179 181 191 193 197 199 211\n\
    223 227 229 233 239 241 251 257 263 269 271 277 281 283 293 307 311 313 317 331\n\
    337 347 349 353 359 367 373 379 383 389 397 401 409 419 421 431 433 439 443 449\n\
    457 461 463 467 479 487 491 499 503 509 521 523 541 547 557 563 569 571 577 587\n\
    593 599 601 607 613 617 619 631 641 643 647 653 659 661 673 677 683 691 701 709\n\
    719 727 733 739 743 751 757 761 769 773 787 797 809 811 821 823 827 829 839 853\n\
    857 859 863 877 881 883 887 907 911 919 929 937 941 947 953 967 971 977 983 991\n\
    997\n\
    ";
};