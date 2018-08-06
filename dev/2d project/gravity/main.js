'use strict';

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let ship_x = canvas.width / 2 - 10;
let ship_y = canvas.height - 60;
let ship_dx = 0;
let ship_dy = -15;
let	power = false;
let gravity = 0.3;

function keyDownHandler(e)
{
	if (e.keyCode == 38)
		power = true;
}

function keyUpHandler(e)
{
	if (e.keyCode == 38)
		power = false;
}

function drawShip()
{
	ctx.beginPath();
	ctx.rect(ship_x, ship_y, 20, 20);
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.closePath();
}

function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawShip();
	if (power == true)
	{
		ship_y = 40;
		ship_dy = 0;
	}

	if (ship_dy < 20)
		ship_dy += gravity;

	ship_y += ship_dy;

	if (ship_y + 15 > canvas.height)
		ship_dy = ship_dy / -1.3;
	else if (ship_dy < 1)
	{
		gravity = 0;
		ship_dy = 0;
		ship_y = 0;
	}
	console.log(ship_dy);
}

setInterval(draw, 10);