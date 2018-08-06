<?php
	$movies =
	[
	    [ 'title' => 'X-Men: Days of Future Past', 'duration' => 124, 'cover' => 'images/xmen.jpg'],
	    [ 'title' => 'Grace de Monaco', 'duration' => 96, 'cover' => 'images/grace.jpg'],
	    [ 'title' => 'Captain America 2', 'duration' => 136, 'cover' => 'images/captain-america-2.jpg'],
	    [ 'title' => 'Les yeux jaunes des crocodiles', 'duration' => 121, 'cover' => 'images/yeux-jaunes.jpg'],
	    [ 'title' => 'Rio 2', 'duration' => 88,  'cover' => 'images/rio-2.jpg'],
	    [ 'title' => 'Spiderman', 'duration' => 145, 'cover' => 'images/spiderman.jpg'],
	    [ 'title' => "Qu'est ce qu'on a fait au bon Dieu ?", 'duration' => 114, 'cover' => 'images/bon-dieu.jpg'],
	    [ 'title' => 'Grand Budapest Hotel','duration' => 128, 'cover' => 'images/budapest-hotel.jpg']
	];
	echo json_encode($movies);
?>