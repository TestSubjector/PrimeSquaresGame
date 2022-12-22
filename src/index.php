<?php
// Filename of your index page
$index = "iframe.html";
// Metadata
$game = "Prime Squares";
$team = "Team KitKat Addicts";
$instruction = <<<EOD
<strong>Game Description:</strong>
                    <ul>
                        <li>
                            Prime Squares is a tic-tac-toe like game in which the goal is to form primes along the rows, columns and diagonals (including secondary diagonals) in any direction (up-to-down, left-to-right, down-to-up, right-to-left). The more primes one makes, the better the score.

                        </li>
                        <li>
                            Starts with an empty 3 x 3 square.
                        </li>
                        <li>
                            The players alternately fill a square with a number (except the last move is given to player 2).
                        </li>
                        <li>
                            Whenever a number completes a row, column, diagonal (primary or secondary), the number of primes formed as a consequence (in any direction of the row, column or diagonal) are added to the player’s score.
                        </li>
                        <li>
                            0 is not allowed to be placed in any of the border cells.
                        </li>
                        <li>
                            Phase Two: If phase two of the game is enabled, then both players get one extra turn to change a single number on the board after the board has been completely filled. Any primes resulting from that change that go through the change position are given to player.  Player One will move first in Phase Two, followed by Player Two. Player two cannot change the same position as player 1.
                        </li>
                </ul>
EOD;

// Size of the popup window
$width = 940;
$height = 1000;
// If your score is sortable, 1 if higher score is better, -1 if smaller score is better, 0 otherwise.
$scoring = -1;

include '../../template.php';
