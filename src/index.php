<?php
// Filename of your index page
$index = "iframe.html";
// Metadata
$game = "Prime Squares Games";
$team = "Team KitKat Addicts";
$instruction = <<<EOD
<strong>Game Description:</strong>
                    <ul>
                        <li>
                            A Tic-Tac-Toe like game in which the goal is to form primes along the rows, columns and diagonals (including secondary diagonals) in any direction. The more number of primes one makes, the better the score.
                        </li>
                        <li>
                            Starts with an empty 3 x 3 square.
                        </li>
                        <li>
                            Each player alternately fills a square with a number (except the last move is given to player 2).
                        </li>
                        <li>
                            Whenever a number completes a row, column, diagonal (primary or secondary), the number of primes formed as a consequence (in any direction of the row, column or diagonal) are added to the player’s score.
                        </li>
                        <li>
                            0 is not allowed to be placed in any of the border cells.
                        </li>
                        <li>
                            Phase Two: If phase two of the game is enabled, then both players get 1 extra turn to change the number on the board after the board has been completely filled to gain extra points. Player One will move first in Phase Two, followed by Player Two.
                        </li>
                    </ul>
EOD;

// Size of the popup window
$width = 940;
$height = 1000;
// If your score is sortable, 1 if higher score is better, -1 if smaller score is better, 0 otherwise.
$scoring = -1;

include '../../template.php';
