// var MapFile = require('./map');
// var TunnelFile = require('./tunnel');
var Vue = require('./lib/vue.js');
// var Tictac = require('./tictac');
// const tictac = require('./tictac');
// var SaverFile = require('./saver');
// var Saver = SaverFile();
// var Map = MapFile(4);
// var Tunnel = TunnelFile(20);
var game = new Vue({
    el: '#gameArea',
    data: {
        // board_full: false,
        // counter: 0,
        // current_turns_in_phase_two: 2,
        // do_phase_two: true,
        // found_primes: new Set(),
        // game_started: false,
        // html_board: document.getElementsByClassName("block"),
        // input_player_one: document.getElementById("input_player_one"),
        // input_player_two: document.getElementById("input_player_two"),
        instr: false,
        // last_move_index: -1,
        // local_player_score: 0,
        // local_player_two_score: 0,
        // occupied: [3, 3, 3, 3, 3, 3, 3, 3, 3],
        // original_move: "",
        // phase_two: false,
        // play_board: ["", "", "", "", "", "", "", "", ""],
        // player_one_name: "",
        // player_score: document.getElementById("player_score"),
        // player_turn: document.getElementById("player_turn"),
        // player_two_name: "",
        // player_two_score: document.getElementById("player_two_score"),
        // primes_showing: false,
        // show_primes: document.getElementById("show_primes"),
        // total_turns_in_phase_two: 2,
        // winner: document.getElementById("winner"),
        // winner_found: 0
    },

    watch :{
        // show_primes: function(new_show_primes){
        // }

        // size: function (newSize) {
        //     // Map = MapFile(newSize);
        //     // this.nodes = Map.nodes;
        //     // this.hedges = Map.hedges;
        //     // this.vedges = Map.vedges;
        //     // this.size = parseInt(newSize);
        // }
    },

    methods: {
        // render_board: function() {
        //     this.play_board.forEach((element, index) => {
        //         this.html_board[index].innerText = this.play_board[index].toString();
        //         if (this.occupied[index] != 1 && this.occupied[index] != 2){
        //             this.html_board[index].classList.remove("playerOne");
        //             this.html_board[index].classList.remove("playerTwo");
        //         }
        //         else if(this.occupied[index] == 1)
        //             this.html_board[index].classList.add("playerOne");
        //         else if(occupied[index] == 2)
        //             this.html_board[index].classList.add("playerTwo");
        
        //         if ((this.last_move_index != -1 && index != this.last_move_index && this.occupied[index] == 0) || this.occupied[index] != 0)
        //             this.html_board[index].className += " " + "occupied";
        //     });
        // },

        // loadup: function(){
        //     if (!game_started){
        //         this.player_score.innerText = player_one_name + " Score: " + local_player_score.toString();
        //         this.player_two_score.innerText = player_two_name + " Score: " + local_player_two_score.toString();
        //         this.player_score.classList.add("playerOne");
        //         this.player_two_score.classList.add("playerTwo");
        //     }
        //     this.game_started = false;
        //     this.phase_two = false;
        //     this.total_turns_in_phase_two = 2;
        //     this.current_turns_in_phase_two = 0;
        //     this.player_one_name = "";
        //     this.player_two_name = "";
        //     this.play_board = ["", "", "", "", "", "", "", "", ""];
        //     this.occupied = [3, 3, 3, 3, 3, 3, 3, 3, 3];
        //     this.last_move_index = -1;
        //     this.render_board();
        //     this.player_turn.innerText = "Ready to Play? Start the Game!";
        //     this.local_player_score = 0;
        //     this.local_player_two_score = 0;
        // },

        // reset_board: function(){
        //     if (!this.game_started){
        //         alert("Game hasn't begun yet...");
        //         return;
        //     }
        //     this.play_board = ["", "", "", "", "", "", "", "", ""];
        //     this.occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        //     this.board_full = false;
        //     this.phase_two = false;
        //     this.total_turns_in_phase_two = 2;
        //     this.current_turns_in_phase_two = 0;
        //     this.original_move = "";
        //     this.found_primes.clear();
        //     this.winner_found = 0;
        //     this.counter = 0;
        //     this.last_move_index = -1;
        //     this.play_board.forEach((element, index) => {
        //         this.html_board[index].classList.remove("occupied");
        //         this.html_board[index].classList.remove("win");
        //         this.html_board[index].classList.remove("lastMovePlayerOne");
        //         this.html_board[index].classList.remove("lastMovePlayerTwo");
        //     });
        //     this.winner.classList.remove("playerOne");
        //     this.winner.classList.remove("playerTwo");
        //     this.winner.classList.remove("draw");
        //     this.winner.innerText = "";
        //     this.player_turn.innerText = "Ready " + this.player_one_name + "?";
        //     this.local_player_score = 0;
        //     this.local_player_two_score = 0;
        //     this.player_score.innerText = this.player_one_name + " Score: " + this.local_player_score.toString();
        //     this.player_two_score.innerText = this.player_two_name = " Score: " + this.local_player_two_score.toString();
        //     this.render_board();
        // },

        // start_game: function(){
        //     if (this.game_started){
        //         alert("Game has already started. Play!");
        //         return;
        //     }
        //     this.player_one_name = this.input_player_one.value;
        //     this.player_two_name = this.input_player_two.value;
        //     if (this.player_one_name == "" || this.player_two_name == ""){
        //         if (this.player_one_name == "" && this.player_two_name == "")
        //             alert("Please enter the players' names");
        //         else if (this.player_one_name == "")
        //             alert("Please enter Player One's name");
        //         else
        //             alert("Please enter Player Two's name");
        //         return;
        //     }
        //     this.game_started = true;
        //     this.player_turn.innerText = "Ready " + this.player_one_name + "?";
        //     this.reset_board();
        // },

        // phase_two_player_move: function(e){
        //     if (this.last_move_index != -1 && this.last_move_index != e){
        //         alert("You can either submit your current move or change the value. Selected square can't be changed now...");
        //         return;
        //     }
        //     if (this.play_board[e] == "")
        //         this.play_board[e] = 0;
        //     if (this.original_move == "")
        //         this.original_move = this.play_board[e];
        //     this.play_board[e] = (this.play_board[e] + 1) % 10;
        //     this.last_move_index = e;
        //     this.play_board.forEach((element, index) => {
        //         this.html_board[index].classList.remove("win");
        //         this.html_board[index].classList.remove("lastMovePlayerOne");
        //         this.html_board[index].classList.remove("lastMovePlayerTwo");
        //     });
        //     this.winner.innerText = "";
        //     this.winner.classList.remove("playerOne");
        //     this.winner.classList.remove("playerTwo");
        //     this.winner.classList.remove("draw");
        //     this.render_board();
        //     return;
        // },

        // addPlayerMove: function(e){
        //     if (!this.game_started){
        //         alert("Uhh... You need to start the game first");
        //         return;
        //     }
        //     if ((this.board_full && !this.do_phase_two) || (this.board_full && this.do_phase_two && !this.phase_two)){
        //         alert("Game is over. Please start a new game.");
        //         return;
        //     }
        //     else if(this.board_full && this.do_phase_two){
        //         this.phase_two_player_move(e);
        //     }
        //     if (this.occupied[e] != 0){
        //         alert("That square has already been filled. Please choose an empty square.");
        //         return;
        //     }
        //     if (!this.board_full && this.occupied[e] == 0) {
        //         if (this.last_move_index != -1 && this.last_move_index != e){
        //             alert("You can either submit your current move or change the value. Selected square can't be changed now...");
        //             return;
        //         }
        //         if (this.play_board[e] == "")
        //             this.play_board[e] = 0;
        //         this.play_board[e] = (this.play_board[e] + 1) % 10;
        //         this.last_move_index = e;
        //         this.play_board.forEach((element, index) => {
        //             this.html_board[index].classList.remove("win");
        //             this.html_board[index].classList.remove("lastMovePlayerOne");
        //             this.html_board[index].classList.remove("lastMovePlayerTwo");
        //         });
        //         this.winner.innerText = "";
        //         this.winner.classList.remove("playerOne");
        //         this.winner.classList.remove("playerTwo");
        //         this.winner.classList.remove("draw");
        //         this.render_board();
        //         return;
        //     }
        // },

        // get_player: function(){
        //     if (this.counter < 8)
        //         return (this.counter % 2) + 1;
        //     return 2;
        // },

        // check_if_prime: function(num){
        //     let j;
        //     for (j = 2; j <= Math.sqrt(num); ++j){
        //         if (num % j == 0) return 0;
        //     }
        //     return 1;
        // },

        // create_number: function(numbers_list){
        //     let numbers_length = numbers_list.length;
        //     let new_number = 0;
        //     let j;
        //     for (j = numbers_length - 1; j >=0; j--)
        //         new_number += numbers_list[j] * (10 ** j);
        //     return new_number;
        // },

        // check_line: function(indices_list){
        //     let indices_length = indices_list.length;
        //     let phase_two_check = false;
        //     let j;
        //     for (j = 0; j < indices_length; ++j)
        //         if (!this.phase_two && this.occupied[indices_list[j]] == 0) return 0;
        //     for (j = 0; j < indices_length; ++j)
        //         if (this.phase_two && indices_list[j] == this.last_move_index) phase_two_check = true;
        //     if (this.phase_two && !phase_two_check) return;
        //     const list1 = []
        //     for (j = 0; j < indices_length; ++j)
        //         list1.push(this.play_board[indices_list[j]]);
        //     const list2 = []
        //     for (j = indices_length - 1; j >= 0; --j)
        //         list2.push(this.play_board[indices_list[j]]);
        //     return (
        //         this.check_if_prime(this.create_number(list1))
        //         +
        //         this.check_if_prime(this.create_number(list2))
        //     );
        // },

        // check_match: function(){
        //     let prime_count = 0, current_count = 0;
        //     let i;
        //     for (i = 0; i < 9; i += 3) {
        //         let current_count = this.check_line([i, i + 1, i + 2]);
        //         if (current_count > 0 && (!this.found_primes.has(this.create_number([i, i+1, i+2])) || this.phase_two)) {
        //             this.html_board[i].classList.add("win");
        //             this.html_board[i + 1].classList.add("win");
        //             this.html_board[i + 2].classList.add("win");
        //             this.found_primes.add(this.create_number([i, i+1, i+2]));
        //             prime_count += current_count;
        //         }
        //     }
        //     for (i = 0; i < 3; i++) {
        //         current_count = this.check_line([i, i + 3, i + 6]);
        //         if (current_count > 0 && (!this.found_primes.has(this.create_number([i, i+3, i+6])) || this.phase_two)) {
        //             this.html_board[i].classList.add("win");
        //             this.html_board[i + 3].classList.add("win");
        //             this.html_board[i + 6].classList.add("win");
        //             this.found_primes.add(this.create_number([i, i+3, i+6]));
        //             prime_count += current_count;
        //         }
        //     }
        //     current_count = this.check_line([0, 4, 8]);
        //     if (current_count > 0 && (!this.found_primes.has(48) || this.phase_two)) {
        //         this.html_board[0].classList.add("win");
        //         this.html_board[4].classList.add("win");
        //         this.html_board[8].classList.add("win");
        //         this.found_primes.add(48);
        //         prime_count += current_count;
        //     }
        //     current_count = this.check_line([2, 4, 6]);
        //     if (current_count > 0 && (!this.found_primes.has(246) || this.phase_two)) {
        //         this.html_board[2].classList.add("win");
        //         this.html_board[4].classList.add("win");
        //         this.html_board[6].classList.add("win");
        //         this.found_primes.add(246);
        //         prime_count += current_count;
        //     }
        //     current_count = this.check_line([1, 3]);
        //     if (current_count > 0 && (!this.found_primes.has(13) || this.phase_two)) {
        //         this.html_board[1].classList.add("win");
        //         this.html_board[3].classList.add("win");
        //         this.found_primes.add(13);
        //         prime_count += current_count;
        //     }
        //     current_count = this.check_line([1, 5]);
        //     if (current_count > 0 && (!this.found_primes.has(15) || this.phase_two)) {
        //         this.html_board[1].classList.add("win");
        //         this.html_board[5].classList.add("win");
        //         this.found_primes.add(15);
        //         prime_count += current_count;
        //     }
        //     current_count = this.check_line([3, 7]);
        //     if (current_count > 0 && (!this.found_primes.has(37) || this.phase_two)) {
        //         this.html_board[3].classList.add("win");
        //         this.html_board[7].classList.add("win");
        //         this.found_primes.add(37);
        //         prime_count += current_count;
        //     }
        //     current_count = this.check_line([5, 7]);
        //     if (current_count > 0 && (!this.found_primes.has(57) || this.phase_two)) {
        //         this.html_board[5].classList.add("win");
        //         this.html_board[7].classList.add("win");
        //         this.found_primes.add(57);
        //         prime_count += current_count;
        //     }
        //     return prime_count;
        // },

        // update_scores: function(){
        //     let primes_found = this.check_match();
        //     if (primes_found > 0) {
        //         if (this.get_player() == 1)
        //             this.local_player_score += primes_found;
        //         else
        //             this.local_player_two_score += primes_found;
        //     }
        //     if (primes_found > 0){
        //         this.winner.innerText = "Well Done! " + (this.get_player() == 1 ? this.player_one_name + " " : this.player_two_name + " ") + "earned " + primes_found.toString() + " points!\n";
        //         this.winner.classList.add((this.get_player() == 1? "playerOne" : "playerTwo"));
        //     }
        //     else
        //         this.winner.innerText = "No points earned in this turn...\n";
        //     this.html_board[this.last_move_index].classList.remove("win");
        //     this.html_board[this.last_move_index].classList.add((this.get_player() == 1? "lastMovePlayerOne" : "lastMovePlayerTwo"));
        //     this.player_score.innerText = this.player_one_name + " Score: " + this.local_player_score.toString();
        //     this.player_two_score.innerText = this.player_two_name = " Score: " + this.local_player_two_score.toString();
        // },

        // game_over: function(){
        //     this.player_turn.innerText = "Game Over!";
        //     if (this.local_player_score > this.local_player_two_score){
        //         this.winner.innerText += this.player_one_name + " Wins!!";
        //         this.winner.classList.remove("playerTwo");
        //         this.winner.classList.add("playerOne");
        //     }
        //     else if (this.local_player_score < this.local_player_two_score){
        //         this.winner.innerText += this.player_two_name + " Wins!!";
        //         this.winner.classList.remove("playerOne");
        //         this.winner.classList.add("playerTwo");
        //     }
        //     else{
        //         this.winner.innerText = "Draw!";
        //         this.winner.classList.add("draw");
        //     }
        //     this.last_move_index = -1;
        // },

        // check_board_complete: function(){
        //     if (!this.board_full){
        //         this.board_full = true;
        //         this.play_board.forEach((element,index) => {
        //             if (this.occupied[index] == 0)
        //                 this.board_full = false;
        //         });
        //         if (!this.board_full) return;
        //     }
        //     if (this.board_full && !this.do_phase_two){
        //         this.game_over();
        //         return;
        //     }
        //     if (!this.phase_two){
        //         this.phase_two = true;
        //         this.play_board.forEach((element, index) => {
        //             // if (occupied[index] == 0)
        //             this.html_board[index].classList.remove("occupied");
        //         });
        //         this.occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        //         this.found_primes.clear();
        //         this.counter = 1;
        //     }
        //     if (this.total_turns_in_phase_two != this.current_turns_in_phase_two){
        //         this.phase_two = true;
        //         this.player_turn.innerText = "It's Phase Two! ";
        //         // this.player_turn.innerText = "Ready " + player_one_name + "?";
        //         this.player_turn.innerText += "Ready " + ((this.counter % 2) == 0? this.player_two_name + "?" : this.player_one_name + "?");
        //         this.current_turns_in_phase_two += 1;
        //         this.original_move = "";
        //         return;
        //     }
        //     this.phase_two = false;
        //     this.game_over();
        // },

        // submit_move: function(){
        //     if (!this.game_started){
        //         alert("Please start the game first...");
        //         return;
        //     }
        //     if (this.last_move_index == -1){
        //         alert("Need to put some number somewhere...");
        //         return;
        //     }
        //     if (this.play_board[this.last_move_index] == 0 && this.last_move_index != 4){
        //         alert("0 must not be placed in any of the border cells.");
        //         return;
        //     }
        //     if (this.original_move != "" && this.original_move == this.play_board[this.last_move_index]){
        //         alert("You can't submit the same number as before in phase two!");
        //         return;
        //     }
        //     this.occupied[last_move_index] = this.get_player();
        //     // this.player_turn.innerText = "Ready Player " + ((counter % 2) == 0? "Two?" : "One?");
        //     this.player_turn.innerText = "Ready " + ((this.counter % 2) == 0? this.player_two_name + "?" : this.player_one_name + "?");
        //     if (this.counter >= 7){
        //         this.occupied[this.last_move_index] = 2;
        //         // this.player_turn.innerText = "Ready Player Two?";
        //         this.player_turn.innerText = "Ready " + this.player_two_name + "?";
        //     }
        //     this.play_board.forEach((element, index) => {
        //         if (this.occupied[index] == 0)
        //         this.html_board[index].classList.remove("occupied");
        //     });
        //     this.update_scores();
        //     this.last_move_index = -1;
        //     this.render_board();
        //     this.check_board_complete();
        //     this.counter += 1;
        // },

        // show_all_primes: function(){
        //     this.show_primes.innerText = "Here is a list of primes between 10 and 999:\n\
        //     11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,\n\
        //     101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197,\n\
        //     199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,\n\
        //     317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,\n\
        //     443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571,\n\
        //     577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691,\n\
        //     701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,\n\
        //     839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977,\n\
        //     983, 991, 997\
        //     ";
        // },

        // toggle_primes: function(){
        //     this.primes_showing = !this.primes_showing;
        //     if (this.primes_showing) this.show_all_primes();
        //     else this.show_primes.innerText = "";
        // },

        // stop_game: function(){
        //     if (!this.game_started){
        //         alert("Need to start the game before it can be stopped...");
        //         return;
        //     }
        //     this.reset_board();
        //     this.loadup();
        // },

        // toggle_phase_two: function(){
        //     if (this.game_started){
        //         alert("Phase Two cannot be toggled mid game. Please stop the game to toggle this.")
        //         return;
        //     }
        //     this.do_phase_two = !this.do_phase_two;
        //     if (this.do_phase_two)
        //         this.player_turn.innerText = "Enabled Phase Two";
        //     else
        //         this.player_turn.innerText = "Disabled Phase Two";
        // },

        showInstr: function(){// Processed
            return this.instr;
        },

        changeInstr: function () {// Processed
            this.instr = !this.instr;
        },

        // show_scoreboard: function(){
        //     return this.game_started;
        //     // tictac = Tictac();
        //     // return tictac.has_game_started();
        // },

        // enter_player_names: function(){
        //     return !this.game_started;
        //     // tictac = Tictac();
        //     // return !tictac.has_game_started();
        // }
    }
});