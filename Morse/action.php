<?php

function translateChar($char)
{
	$trad = [
		"a" => "0-",
		"b" => "-000",
		"c" => "-0-0",
		"d" => "-00",
		"e" => "0",
		"f" => "00-0",
		"g" => "--0",
		"h" => "0000",
		"i" => "00",
		"j" => "0---",
		"k" => "-0-",
		"l" => "0-00",
		"m" => "--",
		"n" => "-0",
		"o" => "---",
		"p" => "0--0",
		"q" => "--0-",
		"r" => "0-0",
		"s" => "000",
		"t" => "-",
		"u" => "00-",
		"v" => "000-",
		"w" => "0--",
		"x" => "-00-",
		"y" => "-0--",
		"z" => "--00",
		"0" => "-----",
		"1" => "0----",
		"2" => "00---",
		"3" => "000--",
		"4" => "0000-",
		"5" => "00000",
		"6" => "-0000",
		"7" => "--000",
		"8" => "---00",
		"9" => "----0"
	];
	

	if (array_key_exists($char, $trad))
	{
		$toto = $trad[$char];
		return $toto;
	}
	return false;
}

function translate($string)
{

	for ($i = 0; $i < strlen($string); $i++)
	{
		echo translateChar($string[$i]);
		echo " ";
	}
}
echo $_GET['mot'] . ' : ';

echo $response = translate(strtolower($_GET['mot']));

// if ($response == false)
// {
// 	echo "Pas un mot";
// }

 //echo ($response) ? $response : (($_GET['optionLang'] == 'EN') ? 'Not a word' : 'Pas un mot');
?>