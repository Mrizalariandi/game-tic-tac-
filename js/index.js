// JavaScript Document
$(document).ready(function () {
	var x = "x"
	var o = "o"
	var winner
	var count = 0;
	var o_win = 0;
	var x_win = 0;
	var status
	var click
	$('#game li').click(function () {

		if ($(this).hasClass('disable')) {
			// empty			
		} else if (count % 2 == 0) {
			if (winner != 'O' && winner != 'X') {
				count++
				$(this).text(o)
				$(this).addClass('disable o')
				if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') ||
					$("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') ||
					$("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') ||
					$("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') ||
					$("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') ||
					$("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') ||
					$("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') ||
					$("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')) {
					$('#text_game').text("Player 1 Win, please RESTART to continue")
					count = 0
					winner = 'O'
					o_win++
					$('#o_win').text(o_win)
				} else if (count == 9) {
					$('#text_game').text("Game Draw, please RESTART to continue")
				}
				if (status == 1) {	
					singgle()			
				}
			}
		} else {
			if (winner != 'O' && winner != 'X') {
				count++
				$(this).text(x)
				$(this).addClass('disable x')
				if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') ||
					$("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') ||
					$("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') ||
					$("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') ||
					$("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') ||
					$("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') ||
					$("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') ||
					$("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')) {
					$('#text_game').text("Player 2 Win, please RESTART to continue")
					winner = 'X'
					count = 0
					x_win++
					$('#x_win').text(x_win)
				} else if (count == 9) {
					$('#text_game').text("Game Draw, please RESTART to continue")
				}
			}
		}

	});

	function singgle() {
		var random = Math.floor((Math.random() * 10));
		if (random == 0) {
			random += 1
		}
		if (random == 1){click ="#one"} else if(random == 2){click ="#two"} else if(random == 3){click ="#three"} else if(random == 4){click ="#four"} else if(random == 5){click ="#five"} else if(random == 6){click ="#six"} else if(random == 7){click ="#seven"} else if(random == 8){click ="#eight"} else if(random == 9){click ="#nine"}								
		if ($(click).hasClass('disable')){
			singgle()
		}
		else
		{
			if (winner != 'O' && winner != 'X') {
				count++
				$(click).text(x)
				$(click).addClass('disable x')
				if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') ||
					$("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') ||
					$("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') ||
					$("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') ||
					$("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') ||
					$("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') ||
					$("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') ||
					$("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')) {
					$('#text_game').text("Player 2 Win, please RESTART to continue")
					winner = 'X'
					count = 0
					x_win++
					$('#x_win').text(x_win)
				} else if (count == 9) {
					$('#text_game').text("Game Draw, please RESTART to continue")
				}
			}

		}
	}
	$("#reset").click(function () {
		$("#game li").text("");
		$('#text_game').text("Start Game")
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		count = 0
		winner = undefined
	});

	$("#single").click(function () {
		status = 1
		$('#status').text("Single Player Mode")
		$("#player1").text("Player 1 / You")
		$("#player2").text("Player 2 / PC")
		$('#start').addClass('display-none')
		$("#game").removeClass('display-none')
		$("#display").removeClass('display-none')
		$("#display2").removeClass('display-none')
		$("#display3").removeClass('display-none')		
	})
	$("#multiplayer").click(function () {
		status = 2
		$('#status').text("Multiple Player Mode")
		$('#start').addClass('display-none')
		$("#game").removeClass('display-none')
		$("#display").removeClass('display-none')
		$("#display2").removeClass('display-none')
		$("#display3").removeClass('display-none')
	})
});