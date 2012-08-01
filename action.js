alert("Hello. My name is codesecret. My secret is secretpage. For more information, please log in. Oh, and where have you been?")
function whenUserClicks() {
			
	var USR = $('#UFI').val();
	
	var PFI = $('#PFI').val();
	
	var PV = $('#PV').val();
	
	var SQ = $("[name=securityquestion]:checked").val() 

	if (USR == "")
	$("#message").text("You have entered no username. Please enter one.")
	
	else {
	 
	 if (PFI == "") {
	 $("#message").text("Please enter a password.")
	 } 
	else {
	
	if (PV == ""){
	$("#message").text("You have entered no password verification. Please enter one.")
	}
	
	else {
	
	if (SQ == ""){
	$("#message").text("You need to select a security question.")
	}
	
	else {
	
	if (PFI == PV){
	
	if (SQ == "Where were you on the day of today?" && PFI == "secretpage" && USR == "codesecret")
	alert("This is a secret page. Congratulations.")
	
		$("#message").text("You are successfully logged in, " + USR)
	}
	else {  
	
	
	
		var PFI = $('#PFI').val("");
	
		var PV = $('#PV').val("");

		$("#message").text("Your password and password verification do not match, " + USR)
	}}}}}	
			
	
			
/*	} else {
		responseStr = 'Thank you for buying '+ $('#first-name').val() +', '+ $('#last-name').val()+'pies.'
		$('#response').text(responseStr);
	}*/
	
}     

$(document).ready(function(){
	$('#ok-button').on('click', whenUserClicks);
});

