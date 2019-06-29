


var x_offset = 0
var y_offset = 0 

var image_width = 1350
var image_height = 750

window.onload = function(){
	setInterval(function() {

		

		for(i = 0; i < 2; i++){ 
			for(u = 0; u < 2; u++){
				var element = $("#myCanvas")[0]
				var context = element.getContext('2d')
				var image = new Image()
				image.src = "bg1.jpg"

				//context.clearRect(0, 0, element.width, element.height)


				context.drawImage(image, image_width * u + y_offset, image_height * i + x_offset)
				console.log(x_offset)	
			}
		}
	x_offset = x_offset - 1
	y_offset = y_offset - 1.8

	if(x_offset == -750){
		x_offset = 0
		y_offset = 0
	}

	}, 40)
}