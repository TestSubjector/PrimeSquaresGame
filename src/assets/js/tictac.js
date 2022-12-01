player = 1;
player_two = 2;
local_player_score = 0;
local_player_two_score = 0;
counter = 0;
last_move_index = -1;
primes_showing = false;

board_full = false;
game_started = false;
winner_found = false;
play_board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
occupied = [3, 3, 3, 3, 3, 3, 3, 3, 3];
html_board = document.getElementsByClassName("block");
winner_statement = document.getElementById("winner");
html_player_score = document.getElementById("player_score");
html_player_two_score = document.getElementById("player_two_score");
html_show_primes = document.getElementById("show_primes");
html_player_turn = document.getElementById("player_turn");
const found_primes = new Set();

initial_text_player_score = player_score.innerText;
initial_text_player_two_score = player_two_score.innerText;

render_board = () => {
    play_board.forEach((element, index) => {
        html_board[index].innerText = play_board[index].toString();
        if (occupied[index] != 1 && occupied[index] != 2){
            html_board[index].classList.remove("playerOne");
            html_board[index].classList.remove("playerTwo");
        }
        else if(occupied[index] == 1)
            html_board[index].classList.add("playerOne");
        else if(occupied[index] == 2)
            html_board[index].classList.add("playerTwo");

        if ((last_move_index != -1 && index != last_move_index && occupied[index] == 0) || occupied[index] != 0)
            html_board[index].className += " " + "occupied";
    });
};

loadup = () => {
    game_started = false;
    play_board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    occupied = [3, 3, 3, 3, 3, 3, 3, 3, 3];
    last_move_index = -1;
    render_board();
    player_turn.innerText = "Ready to Play? Start the Game!";
    local_player_score = 0;
    local_player_two_score = 0;
    initial_text_player_score = player_score.innerText;
    initial_text_player_two_score = player_two_score.innerText;
    player_score.classList.add("playerOne");
    player_two_score.classList.add("playerTwo");
    player_score.innerText = initial_text_player_score + " " + local_player_score.toString();
    player_two_score.innerText = initial_text_player_two_score + " " + local_player_two_score.toString();
}

reset_board = () => {
    play_board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    board_full = false;
    found_primes.clear();
    winner_found = 0;
    counter = 0;
    last_move_index = -1;
    play_board.forEach((element, index) => {
        html_board[index].classList.remove("occupied");
        html_board[index].classList.remove("win");
    });
    winner.classList.remove("playerOne");
    winner.classList.remove("playerTwo");
    winner.innerText = "";
    player_turn.innerText = "Ready Player One?";
    render_board();
};

start_game = () => {
    game_started = true;
    player_turn.innerText = "Ready Player One?";
    reset_board();
}

check_if_prime = num => {
    for (j = 2; j <= Math.sqrt(num); ++j){
        if (num % j == 0) return 0;
    }
    return 1;
};

create_number = (num1, num2, num3) => {
    return (num1 * 100 + num2 * 10 + num3);
}

check_line = (a, b, c) => {
    if (occupied[a] == 0 || occupied[b] == 0 || occupied[c] == 0) return 0;
    return (
        check_if_prime(create_number(play_board[a], play_board[b], play_board[c]))
        +
        check_if_prime(create_number(play_board[c], play_board[b], play_board[a]))
    );
};

check_match = () => {
    let prime_count = 0, current_count = 0;
    for (i = 0; i < 9; i += 3) {
        current_count = check_line(i, i + 1, i + 2);
        if (current_count > 0 && !found_primes.has(create_number(i, i+1, i+2))) {
            html_board[i].classList.add("win");
            html_board[i + 1].classList.add("win");
            html_board[i + 2].classList.add("win");
            found_primes.add(create_number(i, i+1, i+2));
            prime_count += current_count;
        }
    }
    for (i = 0; i < 3; i++) {
        current_count = check_line(i, i + 3, i + 6);
        if (current_count > 0 && !found_primes.has(create_number(i, i+3, i+6))) {
            html_board[i].classList.add("win");
            html_board[i + 3].classList.add("win");
            html_board[i + 6].classList.add("win");
            found_primes.add(create_number(i, i+3, i+6));
            prime_count += current_count;
        }
    }
    current_count = check_line(0, 4, 8);
    if (current_count > 0 && !found_primes.has(48)) {
        html_board[0].classList.add("win");
        html_board[4].classList.add("win");
        html_board[8].classList.add("win");
        found_primes.add(48);
        prime_count += current_count;
    }
    current_count = check_line(2, 4, 6);
    if (current_count > 0 && !found_primes.has(246)) {
        html_board[2].classList.add("win");
        html_board[4].classList.add("win");
        html_board[6].classList.add("win");
        found_primes.add(create_number(246));
        prime_count += current_count;
    }
    return prime_count;
};

winner_found_now = () => {
    play_board.forEach((element, index) => {
        if (occupied[index] == 0)
            html_board[index].className += " " + "occupied";
        occupied[index] = 3;
      });
}

get_player = () => {
    if (counter < 8)
        return (counter % 2) + 1;
    return 2;
}

update_scores = () => {
    primes_found = check_match();
    if (primes_found > 0) {
        if (get_player() == 1)
            local_player_score += primes_found;
        else
            local_player_two_score += primes_found;
    }
    // if (primes_found > 0)
    //     player_turn.innerText = "Well Done! Player " + (get_player() == 1 ? "One " : "Two ") + "earned " + primes_found.toString() + "points!";
    // else
    //     player_turn.innerText = "No points earned in this turn...";
    player_score.innerText = initial_text_player_score + " " + local_player_score.toString();
    player_two_score.innerText = initial_text_player_two_score + " " + local_player_two_score.toString();
};

addPlayerMove = e => {
    if (!game_started){
        alert("Uhh... You need to start the game first");
        return;
    }
    if (board_full){
        alert("Game is over. Please start a new game.");
        return;
    }
    if (!board_full && occupied[e] == 0) {
        if (last_move_index != -1 && last_move_index != e){
            alert("Sorry! You can't update this index as you've already made your grid index choice...");
            return;
        }
        play_board[e] = (play_board[e] + 1) % 10;
        last_move_index = e;
        play_board.forEach((element, index) => {
            html_board[index].classList.remove("win");
        });
        render_board();
        return;
    }
};

check_board_complete = () => {
    board_full = true;
    play_board.forEach((element,index) => {
        if (occupied[index] == 0)
            board_full = false;
    });
    if (board_full){
        player_turn.innerText = "Game Over!";
        if (local_player_score > local_player_two_score){
            winner.innerText = "Player One Wins!!";
            winner.classList.add("playerOne");
        }
        else if (local_player_score < local_player_two_score){
            winner.innerText = "Player Two Wins!!";
            winner.classList.add("playerTwo");
        }
        else{
            winner.innerText = "Draw!";
            winner.classList.add("draw");
        }
    }
};

submit_move = () => { // TODO: 0 shouldn't be there in an edge node
    occupied[last_move_index] = get_player();
    player_turn.innerText = "Ready Player " + ((counter % 2) == 0? "Two?" : "One?");
    if (counter >= 7){
        occupied[last_move_index] = 2;
        player_turn.innerText = "Ready Player Two?";
    }
    last_move_index = -1;
    play_board.forEach((element, index) => {
        if (occupied[index] == 0)
        html_board[index].classList.remove("occupied");
    });
    update_scores();
    render_board();
    check_board_complete();
    // check_for_winner();
    ++counter;
}

reset_match = () => {
    reset_board();
    local_player_score = 0;
    local_player_two_score = 0;
    player_score.innerText = initial_text_player_score + " " + local_player_score.toString();
    player_two_score.innerText = initial_text_player_two_score + " " + local_player_two_score.toString();
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