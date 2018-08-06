'use strict';

$("#execute").on('click', function(e)
{
	e.preventDefault();
	$.ajax({
		url: "action.php",
		data: {mot: document.getElementById('mot').value},
		success: function(data)
		{
			$("#traduction").html(data);
		},
		method: "get"
	});
});