"use strict";

$("#execute").on('click', function(ev)
{
	ev.preventDefault();
	let is_select = document.querySelector('input[name=choix]:checked').value;

	$("#content").removeClass("flexman");
	if (is_select == 'html_man')
		hlm();
	else if (is_select == 'JSON_man')
		jman();
	else if (is_select == 'films_man')
		filman();

	document.getElementById(is_select).checked = false;
});

function hlm()
{
	$("#blockContent").removeClass("hide");
	$.get("data-html.php", function(data)
	{
		$("#content").html(data);
	});
}

function jman()
{
	$("#content").empty();
	$("#blockContent").removeClass("hide");
	$.getJSON("data-json.php", function(data)
	{
		$('#content').append("<ul>");
		for (let i = 0; i < data.length; i++)
		{
			$("#content").append("<li><h4>" + data[i].prenom + ' ' + data[i].nom + "<h4>")
			$("#content").append("<p>" + data[i].adresse + "</p></li>")
		}
		$('#content').append("</ul>");
	});
}

function filman()
{
	$("#content").empty();
	$("#blockContent").removeClass("hide");
	$("#content").addClass("flexman");
	$.getJSON("data-film.php", function(data)
	{
		for (let i = 0; i < data.length; i++)
		{
			$("#content").append('<div class="films">' + 
				'<img src="' + data[i].cover + '">' +
				'<h4>' + data[i].title + 
				' <i>' + data[i].duration + '</i></h4>' + '</div>');
		}
	});
}