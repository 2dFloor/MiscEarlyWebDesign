

//Detect whether the cursor is in or our of the desired area 
//Reset any previous changes 
//Detect which square was clicked and enlarge by 50%
//Detect if cursor leaves background area, if so reset shapes 
window.onload=function(){
	$(document).on('mouseenter', '#container' , function(){
    	$("#square1").click(function() {
    		reset()
    		layer("square1")
    		$("#square1").css("width", "255px");
    		$("#square1").css("height", "255px");
    	})
    	$("#square2").click(function() {
    		reset()
    		layer("square2")
    		$("#square2").css("width", "255px");
    		$("#square2").css("height", "255px");
    	})
    	$("#square3").click(function() {
    		reset()
    		layer("square3")
    		$("#square3").css("width", "255px");
    		$("#square3").css("height", "255px");
    	})
    	$("#square4").click(function() {
    		reset()
    		layer("square4")
    		$("#square4").css("width", "255px");
    		$("#square4").css("height", "255px");
    	})
	})
	$(document).on('mouseleave', '#container' , reset)}

function reset (){
	$("#square1").css("width", "196px");
    $("#square1").css("height", "196px");

    $("#square2").css("width", "196px");
    $("#square2").css("height", "196px");

    $("#square3").css("width", "196px");
    $("#square3").css("height", "196px");

    $("#square4").css("width", "196px");
    $("#square4").css("height", "196px");
}

function layer (top){
	$("#" + top).css("z-index", "1");
	for (i = 1; i < 5; i++){
		if($("#square" + i).attr("id") == top){
		} else{
			$("#square" + i).css("z-index", "0")
		}
	}
}
