function trim(str) {
	trimmedStr = str.replace(/^\s+|\s+$/g,'');
	return trimmedStr;
}


function whenUserClicks() {



	console.log('hi');
			
	var USR = $('#UFI').val();
	
	var PFI = $('#PFI').val();
	
	var PV = $('#PV').val();
	
	var AG = $('#AG').val();
	
			
	USR = trim (USR)


	
	if (USR == "Franklin" && PFI == "dungwax3496" && PV == "dungwax3496" && AG == "still growing"){

		alert ("welcome back, Franklin.")
		
		alert ("Oh, I nearly forgot to tell you. You got a message in your console. You had better check it.")
		
		console.log ("Refresh the page, your turn to use your account is over.")
		
		
	}  
	
	else {
	
	
		if (USR == "") {
	
			$("#message").text("You have entered no username. Please enter one.")
		
		} else if (PFI == "") {
		
			$("#message").text("Please enter a password.")
	 	
		} else if (PV == "") {
			
			$("#message").text("You have entered no password verification. Please enter one.")
			
		} else if (PV !== PFI){
	

			$("#message").text("Your password and password verification do not match, " + USR)
	

		} else if (AG == ""){
		
			$("#message").text("You have not entered your age, " + USR)

		} else if (AG < 20) {
		
			$("#message").text("You are too young to create an account. Sorry.")
		
		} else {

			$("#message").text("You are successfully logged in, " + USR)
			
			
			
		
		}
	
	}
	
}  

			
		



			
	
			
	
     

$(document).ready(function(){
	$('#ok-button').on('click', whenUserClicks);
});




	
	
	
	
	
	
	
	
	