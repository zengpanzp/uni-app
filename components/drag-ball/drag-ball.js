import value from '../../componets/drag-ball/drag-ball.js';

var list = [{x:100,y:50,radius:25},{x:200,y:50,radius:25},{x:300,y:50,radius:25}]

function mapping(_this){
	
	let data 	= value.list
	
	let context = uni.createCanvasContext('canvas',_this);

	for (let i = 0; i < data.length; i++) {
		context.beginPath();
		context.arc(data[i].x, data[i].y, data[i].radius, 0, 2 * Math.PI, true);
		context.setFillStyle('#AAAAAA');
		context.fill();
	}
						
		context.draw();
}

export default {mapping,list}