
function myValidation(){
				
	var name = document.forms['contactForm']['name'].value;
	
	var email = document.forms['contactForm']['email'].value;
	
	var	phone = document.forms['contactForm']['phone'].value;
	
	var message = document.forms['contactForm']['message'].value;
	alert('hoyese');
	var error =[];
	
	if(name =='' || name.length <3){
		error[0]="Name Must be at least 3 letters";
		document.getElementById('name-error').innerHTML = error[0];
	}else{
		document.getElementBy('name-error').innerHTML = '';
	}
	var error =[];
	if(email =='' || email.length <10){
		error[1]="Please insert a valid email.";
		document.getElementById('email-error').innerHTML = error[1];
	}else{
		document.getElementBy('email-error').innerHTML = '';
	}
	var error =[];
	if(phone =='' || phone.length <11){
		error[2]="Please insert a valid numbers.";
		document.getElementById('phone-error').innerHTML = error[2];
	}else{
		document.getElementBy('phone-error').innerHTML = '';
	}
	var error =[];
	if(message =='' || message.length <50){
		error[3]="Please comments your valuable speech.";
		document.getElementById('message-error').innerHTML = error[3];
	}else{
		document.getElementBy('message-error').innerHTML = '';
	}
	
	if(error.length >0){
		return false;
	}
}
function myFocus(x){
	x.style.background='white';
}



	/* === JQuery Start === */

$(document).ready(function(){
	
	/* === MenuBar Active Start === */
	$('#main-menu').on('click', 'li',function(){
		$('#main-menu li.active').removeClass('active');
		$(this).addClass('active');
	});
	
	/* === MenuBar Start === */
		$('#mobile-icon').click(function(){
			$('#main-menu ul').slideDown(1000);
			$(this).hide();
			$('#mobile-icon2').show();
		});
		$('#mobile-icon2').click(function(){
			$('#main-menu ul').slideUp(1000);
			$(this).hide();
			$('#mobile-icon').show();
		});
		$(window).resize(function(){
			if($(window).width() > 576){
				$('#main-menu ul').show();
			}else{
				$('#main-menu ul').hide();
			}
		});
	/* === Upper Button Scroll Start === */
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		if(x >1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop:0},2000);
	});
	
});