player = 1;
player_two = 2;
local_player_score = 0;
local_player_two_score = 0;
counter = 0;
last_move_index = -1;
primes_showing = false;
phase_two = false;
total_turns_in_phase_two = 2;
current_turns_in_phase_two = 0;
do_phase_two = true;

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

initial_text_player_score = "";
initial_text_player_two_score = "";

// TODO: Add a second phase
 
// TODO: Save scores

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
    if (!game_started){
        initial_text_player_score = player_score.innerText;
        initial_text_player_two_score = player_two_score.innerText;
        player_score.innerText = initial_text_player_score + " " + local_player_score.toString();
        player_two_score.innerText = initial_text_player_two_score + " " + local_player_two_score.toString();
        player_score.classList.add("playerOne");
        player_two_score.classList.add("playerTwo");
    }
    game_started = false;
    phase_two = false;
    total_turns_in_phase_two = 2;
    current_turns_in_phase_two = 0;
    play_board = ["", "", "", "", "", "", "", "", ""];
    occupied = [3, 3, 3, 3, 3, 3, 3, 3, 3];
    last_move_index = -1;
    render_board();
    player_turn.innerText = "Ready to Play? Start the Game!";
    local_player_score = 0;
    local_player_two_score = 0;
}

reset_board = () => {
    if (!game_started){
        alert("Game hasn't begun yet...");
        return;
    }
    play_board = ["", "", "", "", "", "", "", "", ""];
    occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    board_full = false;
    phase_two = false;
    total_turns_in_phase_two = 2;
    current_turns_in_phase_two = 0;
    found_primes.clear();
    winner_found = 0;
    counter = 0;
    last_move_index = -1;
    play_board.forEach((element, index) => {
        html_board[index].classList.remove("occupied");
        html_board[index].classList.remove("win");
        html_board[index].classList.remove("lastMovePlayerOne");
        html_board[index].classList.remove("lastMovePlayerTwo");
    });
    winner.classList.remove("playerOne");
    winner.classList.remove("playerTwo");
    winner.classList.remove("draw");
    winner.innerText = "";
    player_turn.innerText = "Ready Player One?";
    local_player_score = 0;
    local_player_two_score = 0;
    player_score.innerText = initial_text_player_score + " " + local_player_score.toString();
    player_two_score.innerText = initial_text_player_two_score + " " + local_player_two_score.toString();
    render_board();
};

start_game = () => {
    if (game_started){
        alert("Game has already started. Play!");
        return;
    }
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

create_number = numbers_list => {
    numbers_length = numbers_list.length;
    new_number = 0;
    for (j = numbers_length - 1; j >=0; j--)
        new_number += numbers_list[j] * (10 ** j);
    return new_number;
}

check_line = indices_list => {
    indices_length = indices_list.length;
    phase_two_check = false;
    for (j = 0; j < indices_length; ++j)
        if (!phase_two && occupied[indices_list[j]] == 0) return 0;
    for (j = 0; j < indices_length; ++j)
        if (phase_two && indices_list[j] == last_move_index) phase_two_check = true;
    if (phase_two && !phase_two_check) return;
    const list1 = []
    for (j = 0; j < indices_length; ++j)
        list1.push(play_board[indices_list[j]]);
    const list2 = []
    for (j = indices_length - 1; j >= 0; --j)
        list2.push(play_board[indices_list[j]]);
    return (
        check_if_prime(create_number(list1))
        +
        check_if_prime(create_number(list2))
    );
};

check_match = () => {
    let prime_count = 0, current_count = 0;
    for (i = 0; i < 9; i += 3) {
        current_count = check_line([i, i + 1, i + 2]);
        if (current_count > 0 && (!found_primes.has(create_number([i, i+1, i+2])) || phase_two)) {
            html_board[i].classList.add("win");
            html_board[i + 1].classList.add("win");
            html_board[i + 2].classList.add("win");
            found_primes.add(create_number([i, i+1, i+2]));
            prime_count += current_count;
        }
    }
    for (i = 0; i < 3; i++) {
        current_count = check_line([i, i + 3, i + 6]);
        if (current_count > 0 && (!found_primes.has(create_number([i, i+3, i+6])) || phase_two)) {
            html_board[i].classList.add("win");
            html_board[i + 3].classList.add("win");
            html_board[i + 6].classList.add("win");
            found_primes.add(create_number([i, i+3, i+6]));
            prime_count += current_count;
        }
    }
    current_count = check_line([0, 4, 8]);
    if (current_count > 0 && (!found_primes.has(48) || phase_two)) {
        html_board[0].classList.add("win");
        html_board[4].classList.add("win");
        html_board[8].classList.add("win");
        found_primes.add(48);
        prime_count += current_count;
    }
    current_count = check_line([2, 4, 6]);
    if (current_count > 0 && (!found_primes.has(246) || phase_two)) {
        html_board[2].classList.add("win");
        html_board[4].classList.add("win");
        html_board[6].classList.add("win");
        found_primes.add(246);
        prime_count += current_count;
    }
    current_count = check_line([1, 3]);
    if (current_count > 0 && (!found_primes.has(13) || phase_two)) {
        html_board[1].classList.add("win");
        html_board[3].classList.add("win");
        found_primes.add(13);
        prime_count += current_count;
    }
    current_count = check_line([1, 5]);
    if (current_count > 0 && (!found_primes.has(15) || phase_two)) {
        html_board[1].classList.add("win");
        html_board[5].classList.add("win");
        found_primes.add(15);
        prime_count += current_count;
    }
    current_count = check_line([3, 7]);
    if (current_count > 0 && (!found_primes.has(37) || phase_two)) {
        html_board[3].classList.add("win");
        html_board[7].classList.add("win");
        found_primes.add(37);
        prime_count += current_count;
    }
    current_count = check_line([5, 7]);
    if (current_count > 0 && (!found_primes.has(57) || phase_two)) {
        html_board[5].classList.add("win");
        html_board[7].classList.add("win");
        found_primes.add(57);
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
    if (primes_found > 0){
        winner.innerText = "Well Done! Player " + (get_player() == 1 ? "One " : "Two ") + "earned " + primes_found.toString() + " points!\n";
        winner.classList.add((get_player() == 1? "playerOne" : "playerTwo"));
    }
    else
        winner.innerText = "No points earned in this turn...\n";
    html_board[last_move_index].classList.remove("win");
    html_board[last_move_index].classList.add((get_player() == 1? "lastMovePlayerOne" : "lastMovePlayerTwo"));
    player_score.innerText = initial_text_player_score + " " + local_player_score.toString();
    player_two_score.innerText = initial_text_player_two_score + " " + local_player_two_score.toString();
};

phase_two_player_move = e => {
    if (last_move_index != -1 && last_move_index != e){
        alert("You can either submit your current move or change the value. Selected square can't be changed now...");
        return;
    }
    if (play_board[e] == "")
        play_board[e] = 0;
    play_board[e] = (play_board[e] + 1) % 10;
    last_move_index = e;
    play_board.forEach((element, index) => {
        html_board[index].classList.remove("win");
        html_board[index].classList.remove("lastMovePlayerOne");
        html_board[index].classList.remove("lastMovePlayerTwo");
    });
    winner.innerText = "";
    winner.classList.remove("playerOne");
    winner.classList.remove("playerTwo");
    winner.classList.remove("draw");
    render_board();
    return;
};

addPlayerMove = e => {
    if (!game_started){
        alert("Uhh... You need to start the game first");
        return;
    }
    if ((board_full && !do_phase_two) || (board_full && do_phase_two && !phase_two)){
        alert("Game is over. Please start a new game.");
        return;
    }
    else if(board_full && do_phase_two){
        phase_two_player_move(e);
    }
    if (occupied[e] != 0){
        alert("That square has already been filled. Please choose an empty square.");
        return;
    }
    if (!board_full && occupied[e] == 0) {
        if (last_move_index != -1 && last_move_index != e){
            alert("You can either submit your current move or change the value. Selected square can't be changed now...");
            return;
        }
        if (play_board[e] == "")
            play_board[e] = 0;
        play_board[e] = (play_board[e] + 1) % 10;
        last_move_index = e;
        play_board.forEach((element, index) => {
            html_board[index].classList.remove("win");
            html_board[index].classList.remove("lastMovePlayerOne");
            html_board[index].classList.remove("lastMovePlayerTwo");
        });
        winner.innerText = "";
        winner.classList.remove("playerOne");
        winner.classList.remove("playerTwo");
        winner.classList.remove("draw");
        render_board();
        return;
    }
};

game_over = () => {
    player_turn.innerText = "Game Over!";
    if (local_player_score > local_player_two_score){
        winner.innerText += "Player One Wins!!";
        winner.classList.add("playerOne");
    }
    else if (local_player_score < local_player_two_score){
        winner.innerText += "Player Two Wins!!";
        winner.classList.add("playerTwo");
    }
    else{
        winner.innerText = "Draw!";
        winner.classList.add("draw");
    }
    last_move_index = -1;
};

check_board_complete = () => {
    if (!board_full){
        board_full = true;
        play_board.forEach((element,index) => {
            if (occupied[index] == 0)
                board_full = false;
        });
        if (!board_full) return;
    }
    if (board_full && !do_phase_two){
        game_over();
        return;
    }
    if (!phase_two){
        phase_two = true;
        play_board.forEach((element, index) => {
            // if (occupied[index] == 0)
            html_board[index].classList.remove("occupied");
        });
        occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        found_primes.clear();
        counter = 1;
    }
    if (total_turns_in_phase_two != current_turns_in_phase_two){
        phase_two = true;
        player_turn.innerText = "It's Phase Two! ";
        player_turn.innerText += "Ready Player " + ((counter % 2) == 0? "Two?" : "One?");
        current_turns_in_phase_two += 1;
        return;
    }
    // if (total_turns_in_phase_two == current_turns_in_phase_two){
    phase_two = false;
    // }
    game_over();
};

submit_move = () => {
    if (!game_started){
        alert("Please start the game first...");
        return;
    }
    if (last_move_index == -1){
        alert("Need to put some number somewhere...");
        return;
    }
    if (play_board[last_move_index] == 0 && last_move_index != 4){
        alert("0 must not be placed in any of the border cells.");
        return;
    }
    occupied[last_move_index] = get_player();
    player_turn.innerText = "Ready Player " + ((counter % 2) == 0? "Two?" : "One?");
    if (counter >= 7){
        occupied[last_move_index] = 2;
        player_turn.innerText = "Ready Player Two?";
    }
    play_board.forEach((element, index) => {
        if (occupied[index] == 0)
        html_board[index].classList.remove("occupied");
    });
    update_scores();
    last_move_index = -1;
    render_board();
    check_board_complete();
    // check_for_winner();
    ++counter;
};

toggle_primes = () => {
    primes_showing = !primes_showing;
    if (primes_showing) show_all_primes();
    else show_primes.innerText = "";
};

show_all_primes = () => {
    show_primes.innerText = "Here is a list of primes between 10 and 999:\n\
    11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,\n\
    101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197,\n\
    199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,\n\
    317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,\n\
    443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571,\n\
    577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691,\n\
    701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,\n\
    839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977,\n\
    983, 991, 997\
    ";
};

stop_game = () => {
    if (!game_started){
        alert("Need to start the game before it can be stopped...");
        return;
    }
    reset_board();
    loadup();
};

toggle_phase_two = () => {
    if (game_started){
        alert("Phase Two cannot be toggled mid game. Please stop the game to toggle this.")
        return;
    }
    do_phase_two = !do_phase_two;
    if (do_phase_two)
        player_turn.innerText = "Enabled Phase Two";
    else
        player_turn.innerText = "Disabled Phase Two";
};