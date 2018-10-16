/*
@(#)File:           TicTac.js
@(#)Version:        1.0
@(#)Release:        Date: 10/12/2015
@(#)Last changed:   Date: ??/??/2015
@(#)Purpose:        JavaScript Tic Tac Toe Canvas Game that works on Mobile devices
@(#)Author:         William Hughes
@(#)URL:         	www.GameMakersForums.com
@(#)Copyright:      If you generate money from this script somehow, a donation would be nice.
@(#)Product:        :Mobile Friendly HTML5 Tic Tac Toe
*/

//some variables
var canvas = document.getElementById('TTTCanvas');
var context = canvas.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;	

//preset some canvas stuff
canvas.width = w;
canvas.height = h;
context.rect(0, 0, w, h);
context.fillStyle="white";
context.fill(); 

var gui = new GUI();
gui.load();

//for mouse clicking
canvas.addEventListener("mousedown", gui.getClick, false);

//constant rendering
window.requestAnimFrame = (function(callback) 
{
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(callback) 
	{
		window.setTimeout(callback, 1000);
	};
})();


//start and set time between each render
setTimeout(function() {
	render();
}, 1000);


//start
function render() 
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	gui.render();
	// request new frame
	requestAnimFrame(function()
	{
	  render();
	});
} 