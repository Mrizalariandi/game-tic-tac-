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

var TicTacToeLogic = function()
{

	
	//vars
	var true_w = 0;
	var true_h = 0;
	var gameIsOver = false;
	var difficulty = 3;
	var wins = 0;
	var losses = 0;
	var ties = 0;
	var board = [];
	
	//create player pieces
	var player = [ new Graphics("images/X.png"), new Graphics("images/O.png") ];
	
	//init array
	board = new Array(3);
	
	//make 2d array and set..
	for(var x = 0; x < 3; x++)
	{
		board[x] = [];
		for(var y = 0; y < 3; y++)
		{
			board[x][y] = "";
		}
	}
	
	//reserved for 2 players aka (HEAD 2 HEAD)
	this.init = function(true_ww, true_hh)
	{
		true_w = true_ww;
		true_h = true_hh;
		//player[0].setScale();
		//player[1].setScale();
	}
	
	//reset board (create new game)
	this.newGame = function()
	{
		for(var x = 0; x < 3; x++)
		{
			for(var y = 0; y < 3; y++)
			{
				board[x][y] = "";
			}
		}
		
		gameIsOver = false;
	}
	
	//records board piece.
	this.renderPiece = function(index, x, y)
	{
		player[index].render(x, y);
	}
	
	//get grid piece
	this.getPiece = function(x, y)
	{
		return board[x][y];
	}
	
	//set grid piece
	this.setPiece = function(x, y, piece)
	{
		board[x][y] = piece;
	}
	
	//checks if game is over
	this.isGameLive = function()
	{
		return gameIsOver;
	}
	
	//checks for winner, returns state
	this.isGameOver = function(player)
	{
		if(this.checkIsWinner())
		{
			return player;
		}
		else if(this.isGameTie())
		{
			return 0;
		}
		else
		{
			return -1;
		}
	}
	
	
	//checks if game is a tie
	this.isGameTie = function()
	{
		var game_over = true;
		
		for(var x = 0; x < 3; x++)
		{
			for(var y = 0; y < 3; y++)
			{
				if(board[x][y] == "")
				{
					game_over = false;
				}
			}
		}
		
		return game_over;
	}
	
	
	//shows new win/loss/tie message with record
	this.alertScoreMessage = function(status)
	{
		var record = "Wins: " + wins + "\n";
		record = record + "Losses: " + losses + "\n";
		record = record + "Ties: " + ties;
		switch(status)
		{

			case 1: //player won
				alert("You have won!\n" + record);
				break;
			case 2: //computer won
				alert("You have lost!\n" + record);
				break;
			case 0:			//tie
				alert("Game is a Tie..\n" + record);
				break;
		}
		
		this.newGame();
	}
	
	//updates record
	this.gameOverMessage = function(status)
	{
		switch(status)
		{
			//tie
			case 0:
				ties = ties + 1;
				this.alertScoreMessage(0);
				break;
			case 1: //player won
				wins = wins + 1;
				this.alertScoreMessage(1);

				break;
			case 2: //computer won
				losses = losses + 1;
				this.alertScoreMessage(2);
				break;
		}
		

	}
	
	//plays a random move
	this.randomMove = function()
	{
		//vars
		var number = 0;
		var x = 0;
		var y = 0;
		
		
		do
		{
			
			x = Math.floor(Math.random() * 3);
			y = Math.floor(Math.random() * 3);
			
		}while(this.getPiece(x,y) != "");
		
		this.setPiece(x,y, "O");
		Game.renderPiece(1, (true_w * x), (true_h * y) );

	}
	
	
	//plays turn for computer.
	this.computerTurn = function()
	{
		var game_over = this.isGameOver(1);
		
		//check if player has won
		if(game_over != -1 && gameIsOver == false)
		{
			this.gameOverMessage(game_over);
			
		}
		else//computers turn
		{
		
			switch(difficulty)
			{
				case 1: //easy
					this.randomMove();
					break;
				case 2: //medium
					if(!this.checkWinBlock("X", "O"))
					{
						this.randomMove();
					}
					break;
				case 3: //hard
					if(!this.checkWinBlock("O", "O"))
					{
						if(!this.checkWinBlock("X", "O"))
						{
							this.randomMove();
						}
					}
					break;
			}
		
			game_over = this.isGameOver(2);
			//check if computer won
			if(game_over != -1 && gameIsOver == false)
			{
				this.gameOverMessage(game_over);
			}
		}
	}
	
	//checks if a winner
	this.checkIsWinner = function()
	{
		var winner = false;

		
		//loopy
		for(var i = 0; i < 3; i++)
		{
			//check row
			if( this.getPiece(i, 0) == this.getPiece(i, 1) && this.getPiece(i, 0) == this.getPiece(i, 2) && this.getPiece(i, 0) != "")
			{
				winner = true;
				break;
			}
			//check column
			else if( this.getPiece(0, i) == this.getPiece(1, i) && this.getPiece(0, i) == this.getPiece(2, i) && this.getPiece(0, i) != "")
			{
				winner = true;
				break;
			}
		}
	
		if(!winner)
		{
			//check horizontals
			if( this.getPiece(0, 0) == this.getPiece(1,1) && this.getPiece(0,0) == this.getPiece(2,2) && this.getPiece(1, 1) != "")
			{
				winner = true;
			}
			else if( this.getPiece(0, 2) == this.getPiece(1, 1) && this.getPiece(0,2) == this.getPiece(2,0) && this.getPiece(1, 1) != "")
			{
				winner = true;
			}
		}
		
		return winner;
	}
	
	
	//check if player is about to win to block it
	this.checkWinBlock = function(piece1, piece2)
	{
		var x = 0;
		var y = 0;
		var opp_piece = "O";
		var stop_win = false;
		
		
		
		//checks rows
		for(var i = 0; i < 3; i++)
		{
			var x = i;
			if( this.getPiece(i, 0) == this.getPiece(i, 1) && this.getPiece(i,1) == piece1 && this.getPiece(i, 2) == "")
			{
				this.setPiece(i, 2, piece2);
				y = 2;
				stop_win = true;
				break;
			}
			else if( this.getPiece(i, 1) == this.getPiece(i, 2) && this.getPiece(i,2) == piece1 && this.getPiece(i, 0) == "" )
			{
				y = 0;
				this.setPiece(i, 0, piece2);
				stop_win = true;
				break;
			}
			else if(this.getPiece(i, 0) == this.getPiece(i, 2) && this.getPiece(i,2) == piece1 && this.getPiece(i, 1) == "")
			{
				y = 1;
				this.setPiece(i, 1, piece2);
				stop_win = true;
				break;
			}
		}
		
		//no win blocking yet
		if(!stop_win)
		{
			//checks columns
			for(var i = 0; i < 3; i++)
			{
				var y = i;
				if( this.getPiece(0, i) == this.getPiece(1, i) && this.getPiece(0, i) == piece1 && this.getPiece(2, i) == "")
				{
					x = 2;
					this.setPiece(2, i, piece2);
					stop_win = true;
					break;
				}
				else if( this.getPiece(1, i) == this.getPiece(2, i) && this.getPiece(2, i) == piece1 && this.getPiece(0, i) == "")
				{
					x = 0;
					this.setPiece(0, i, piece2);
					stop_win = true;
					break;
				}
				else if(this.getPiece(0, i) == this.getPiece(2, i) && this.getPiece(2, i) == piece1 && this.getPiece(1, i) == "")
				{
					x = 1;
					this.setPiece(1, i, piece2);
					stop_win = true;
					break;
				}
			}
		}
		
		
		//no win blocking yet.
		if(!stop_win)
		{
			//check horizontals
			if( this.getPiece(0, 0) == this.getPiece(2,2) && this.getPiece(2,2) == piece1 && this.getPiece(1,1) == "")
			{
				x = 1;
				y = 1;
				this.setPiece(1, 1, piece2);
				stop_win = true;
			}
			else if( this.getPiece(0, 2) == this.getPiece(2, 0) && this.getPiece(2,0) == piece1 && this.getPiece(1,1) == "")
			{
				x = 1;
				y = 1;
				this.setPiece(1, 1, piece2);
				stop_win = true;
			}
			else if( this.getPiece(0, 0) == this.getPiece(1,1) && this.getPiece(1,1) == piece1 && this.getPiece(2,2) == "")
			{
				x = 2;
				y = 2;
				this.setPiece(2, 2, piece2);
				stop_win = true;
			}
			else if( this.getPiece(0, 0) == this.getPiece(2,2) && this.getPiece(2,2) == piece1 && this.getPiece(0,0) == "")
			{
				x = 0;
				y = 0;
				this.setPiece(0, 0, piece2);
				stop_win = true;
			}
			else if( this.getPiece(2, 0) == this.getPiece(1,1) && this.getPiece(1,1) == piece1 && this.getPiece(0,2) == "")
			{
				x = 0;
				y = 2;
				this.setPiece(0, 2, piece2);
				stop_win = true;
			}
			else if( this.getPiece(0, 2) == this.getPiece(1,1) && this.getPiece(1,1) == piece1 && this.getPiece(2,0) == "")
			{
				x = 2;
				y = 0;
				this.setPiece(2, 0, piece2);
				stop_win = true;
			}
		}
		
		if(stop_win == true)
		{
			this.renderPiece(1, (true_w * x), (true_h * y) );
		}
		return stop_win;
	}
}