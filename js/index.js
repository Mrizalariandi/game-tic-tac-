// JavaScript Document
$(document).ready(function () {
	var x = "x"
	var o = "o"
	var winner
	var count = 0;
	var o_win = 0;
	var x_win = 0;
	$('#game li').click(function () {

		if (winner == "O") {
			alert('O has won the game. Start a new game')
			$("#game li").text("");
			$('#text_game').text("Start game")
			$("#game li").removeClass('disable')
			$("#game li").removeClass('o')
			$("#game li").removeClass('x')
			winner = undefined
		} else if (winner == "X") {
			alert('X wins has won the game. Start a new game')
			$("#game li").text("");
			$('#text_game').text("Start game")
			$("#game li").removeClass('disable')
			$("#game li").removeClass('o')
			$("#game li").removeClass('x')
			winner = undefined
		} else if (count == 9) {
			alert('Game Draw')
			$("#game li").text("");
			$('#text_game').text("Start game")
			$("#game li").removeClass('disable')
			$("#game li").removeClass('o')
			$("#game li").removeClass('x')
			count = 0
		} else if ($(this).hasClass('disable')) {
			// empty			
		} else if (count % 2 == 0) {
			count++
			$(this).text(o)
			$(this).addClass('disable o')
			if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')) {
				alert('O wins')
				$('#text_game').text("Game Over")
				count = 0
				winner = 'O'
				o_win++
				$('#o_win').text(o_win)
			} else if (count == 9) {
				$('#text_game').text("Game Over")
			}
		} else {
			count++
			$(this).text(x)
			$(this).addClass('disable x')
			if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')) {
				alert('X wins')
				$('#text_game').text("Game Over")
				winner = 'X'
				count = 0
				x_win++
				$('#x_win').text(x_win)
			} else if (count == 9) {
				$('#text_game').text("Game Over")
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