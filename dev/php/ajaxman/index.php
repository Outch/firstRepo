<!DOCTYPE html>
<html lang="fr">
<head>
	<title>ajax_man</title>
	<script
		src="http://code.jquery.com/jquery-3.3.1.js"
		integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
		crossorigin="anonymous" defer></script>
	<script src="main.js" defer></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>
	<main>
		<h2><i class="fas fa-flask"></i> Exercice AJAX</h2>
		<fieldset id="blockContent" class="hide">
			<div id="content"></div>
		</fieldset>
		<section id="form">
			<form>
				<fieldset>
					<legend><i class="fas fa-question-circle"></i> Votre choix</legend>
					<p><input type="radio" name="choix" value="html_man" id="html_man">
					<label for="html_man">Récupérer un contenu HTML du serveur</label></p>
					<p><input type="radio" name="choix" value="JSON_man" id="JSON_man">
					<label for="JSON_man">Récupérer un contenu JSON du serveur</label></p>
					<p><input type="radio" name="choix" value="films_man" id="films_man">
					<label for="films_man">Récupérer les films</label></p>
					<button id="execute">Exécuter</button>
				</fieldset>
			</form>
		</section>
	</main>
</body>
</html>