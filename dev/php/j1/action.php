<?php

function translate($word, $lang)
{
	$trad = [
		"dog" => "chien",
		"cat" => "chat"
	];

	foreach ($trad as $key => $value)
	{
		if (strtolower($word) == $key)
			if ($lang == 'FR')
				return $value;
			else
				return $word;
		if (strtolower($word) == $value)
			if ($lang == 'EN')
				return $key;
			else
				return $word;
	}
	return false;
}

$response = translate($_GET['mot'], $_GET['optionLang']);

echo ($response) ? $response : (($_GET['optionLang'] == 'EN') ? 'Not a word' : 'Pas un mot');
?>