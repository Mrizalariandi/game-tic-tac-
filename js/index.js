// JavaScript Document
$(document).ready(function () {
	var x = "x"
	var o = "o"
	var winner
	var count = 0;
	var o_win = 0;
	var x_win = 0;

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
	
	$("#reset").click(function () {
		$("#game li").text("");
		$('#text_game').text("Start Game")
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		count = 0
		winner = undefined
	});
});