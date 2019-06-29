
function displayDate() {
    alert("hi");
}

window.onload=function(){
	$(".square").click(function() {
		//Get each element, put in an array
		var list = $(".square");
		//Cycle through elements to find which was clicked
		for (i = 0; i < list.length; i++){
			if ($(list[i]).is(":hover") == true){
				//Change seletected square to black
				$(list[i]).css("background", "black");
			}	
		}
	});	
}	
