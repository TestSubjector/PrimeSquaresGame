<?php
// Filename of your index page
$index = "iframe.html";
// Metadata
$game = "Prime Squares Game";
$team = "Team KitKat Addicts";
$instruction = <<<EOD
<strong>Overview:</strong> <br/>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, eros dictum ultricies pharetra, turpis diam tincidunt nibh, ac posuere lorem lectus vel mauris. Duis sollicitudin mi purus, in vehicula</p>
<p>Mauris sit amet leo tempor, posuere risus ut, facilisis nibh. Proin sagittis dignissim enim et porttitor. Donec vel odio et lacus dictum luctus. Donec sagittis egestas malesuada. Donec eros nunc, porta at velit a, mattis eleifend sem. Suspendisse potenti. Fusce id massa eu lectus finibus feugiat a eu lorem.</p>
EOD;

// Size of the popup window
$width = 940;
$height = 1000;
// If your score is sortable, 1 if higher score is better, -1 if smaller score is better, 0 otherwise.
$scoring = -1;

include '../../template.php';
