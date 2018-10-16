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
var Graphics = function(srcFile)
{
	//used to determine if image should stay same or be stretched.
	var default_screen_width = 600;
	var default_screen_height = 600;
	
	//soon to be image height/width.
	var new_img_width = 0;
	var new_img_height = 0;
	
	//image var
	var img = new Image();
	img.src = srcFile;
	img.onload = function() { scale(this.width, this.height); }





	
	function test(varA, varB)
	{
		alert(varA + ' width ' + varB + ' height');
		img.width = varA;
		img.height = varB;
	}
	
	//returns image
	this.getImage = function()
	{
		return img;
	}
	
	//renders the image
	this.render = function(x, y)
	{
		context.drawImage(img, x, y, new_img_width, new_img_height);
	}
	
	//calculations for image to stretch or shrink.
	function scale(width, height)
	{
		var w = canvas.width;
		var h = canvas.height;
		
		//WIDTH: screen larger then default. Making image larger.
		if(w > default_screen_width)
		{
			new_img_width = w / default_screen_width;
			new_img_width = width * new_img_width;
			//new_img_width = width + new_img_width;
		}
		else if(w < default_screen_width)//WIDTH: screen smaller then default. Making image smaller.
		{
			new_img_width = default_screen_width / w;
			new_img_width = width / new_img_width;
			//new_img_width = width - new_img_width;
		}
		else//no change
		{
			new_img_width = width;
		}
		
		
		
		//HEIGHT: screen larger then default. Making image larger.
		if(h > default_screen_height)
		{
			new_img_height = h / default_screen_height;
			new_img_height = height * new_img_height;
			//new_img_height = height + new_img_height;
		}
		else if(h < default_screen_height)//HEIGHT: screen smaller then default. Making image smaller.
		{
			new_img_height = default_screen_height / h;
			new_img_height = height / new_img_height;
			//new_img_height = height - new_img_height;
		}
		else//no change
		{
			new_img_height = height;
		}
	}
}