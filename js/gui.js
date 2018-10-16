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

var GUI = function()
{
	var true_w = window.innerWidth / 3;
	var true_h = window.innerHeight  / 3;
	var Game = new TicTacToeLogic();
	
	this.load = function()
	{
		Game.init(true_w, true_h);
	}
	
	//renders pieces
	this.renderPieces = function()
	{
		var temp = "";
		for(var x = 0; x < 3; x++)
		{
			for(var y =0; y < 3; y++)
			{
				//get peice (X or O)
				temp = Game.getPiece(x,y);
				//figure out what piece it is
				switch(temp)
				{
					//render based upon value of piece
					case "X":
						Game.renderPiece(0, (true_w * x), (true_h * y) );
						break;
					case "O":
						Game.renderPiece(1, (true_w * x), (true_h * y) );
						break;
				}
			}
		}
	}
	
	//renders GUI
	this.render = function()
	{
		
		var temp = 0;
		
		for (var i=0; i<3; i++)
		{
			temp = temp + true_h;
			
			context.beginPath();
			context.lineWidth = 2;
			context.beginPath();
			context.moveTo(0, temp);
			context.lineTo(canvas.width, temp);
			context.strokeStyle = '#000000';
			context.stroke();
		}
		
		temp = 0;
		
		for(var i=0; i<3; i++)
		{
			temp = temp + true_w;
			
			context.beginPath();
			context.lineWidth = 2;
			context.beginPath();
			context.moveTo(temp, 0);
			context.lineTo(temp, canvas.height);
			context.strokeStyle = '#000000';
			context.stroke();
		}
		
		this.renderPieces();
	}
	
	//gets where user clicked.
	this.getClick = function(event)
	{
		var grid_x = Math.ceil(event.x / true_w) - 1;
		var grid_y = Math.ceil(event.y / true_h) - 1;
		
		if(Game.isGameLive() == false)
		{
			if(Game.getPiece(grid_x,grid_y) == "")
			{
				Game.setPiece(grid_x, grid_y, "X");
				Game.renderPiece(0, (true_w * grid_x), (true_h * grid_y) );
				Game.computerTurn();
			}
			else
			{
				alert("Choose another spot");
			}
		}
		
		
	}
}