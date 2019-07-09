import value from './ball.js';

var list = []

var boundary = [[],[]]

function getDistance( x_1,  y_1,  x_2,  y_2){
		
		let x = (x_2 - x_1)*2;
		let y = (y_2 - y_1)*2;
		
		let s = Math.pow((x * x + y * y), 0.5);

		return s;
}

function sustained(that){
	
	let data 	= value.list;
	let index_1 = 0;
	let index_2 = 0;
	
	setInterval(function(){
		
		for (let number = 0; number < data.length; number++) {
		
			data[number].y	=  	data[number].y+( data[number].floating[1] ? 0.05 : -0.05)  ;
			data[number].floating[0] < 15 ? data[number].floating[0] = data[number].floating[0]+1 : data[number].floating[0] = 1 ;
			data[number].floating[0] == 1  ? data[number].floating[1] = !data[number].floating[1] : data[number].floating[1];
			value.mapping(that);
		
		for (let i = 0; i < data.length; i++) {
					
			index_1	= getDistance(data[i].x,data[i].y,data[number].x,data[number].y);
			index_2	= (data[i].radius*2) + (data[number].radius*2);
			
			if(i != number){
			
			if( index_1 <  index_2){
				
				data[i].x 	=  	data[i].x+(-(data[number].x-data[i].x)/100) ;
				data[i].y	=  	data[i].y+(-(data[number].y-data[i].y)/100) ;

			(data[i].x-data[i].radius) < 0 ? data[i].x = data[i].radius : data[i].x;
			(data[i].y-data[i].radius) < 0 ? data[i].y = data[i].radius : data[i].y;
			
			(data[i].x+data[i].radius) > value.boundary[0] ? data[i].x = (value.boundary[0]-data[i].radius) : data[i].x;
			(data[i].y+data[i].radius) > value.boundary[1] ? data[i].y = (value.boundary[1]-data[i].radius) : data[i].y;
				
			value.mapping(that);
				
			}
		
			}
		}
		}
		},100);
}

function mapping(_this){
	let data 	= value.list
	let context = uni.createCanvasContext('canvas',_this);

	for (let i = 0; i < data.length; i++) {
	
		context.beginPath();
		context.arc(data[i].x, data[i].y, data[i].radius, 0, 2 * Math.PI, true);
		context.setFillStyle(data[i].color[data[i].colse ? 1 : 0]);
		context.fill();

		context.setFillStyle('#FFFFFF');
		context.setFontSize(data[i].size);
		if(data[i].labelName.length < 6){
			context.fillText(data[i].labelName,(data[i].x - (data[i].size*(0.5*data[i].labelName.length))), (data[i].y + data[i].size*(0.5)))
		}else{
			context.fillText(data[i].labelName.substring(0, 3),(data[i].x - (data[i].size*(0.5*(data[i].labelName.substring(0, 3)).length))), 
			((data[i].y + data[i].size*(0.5))-data[i].size*(0.8)))
			context.fillText(data[i].labelName.substring(3, 6),(data[i].x - (data[i].size*(0.5*(data[i].labelName.substring(3, 6)).length))), 
			((data[i].y + data[i].size*(0.5))+data[i].size*(0.8)))
		}
	}	
		context.draw();
}

export default {mapping,list,sustained,boundary}