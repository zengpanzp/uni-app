<template>
		<canvas 
		:canvas-id="id"
		id="canvas"
		@touchstart="touchstart"
		@touchend="touchend"
		></canvas>
		<!-- @touchmove.prevent="touchmove" -->
</template>

<script>
	import dragBall from './ball.js';
	
	var data 	= [];
	
	function getDistance( x_1,  y_1,  x_2,  y_2){
		
		let x = (x_2 - x_1)*2;
		let y = (y_2 - y_1)*2;
		
		let s = Math.pow((x * x + y * y), 0.5);

		return s;
	}
	export default {
		props:{
			onInit: {
			  type: Array,
			  default: null
			},
			colse:{
				type:Boolean
			}
		},
		data() {
			return {
				index:'false',
				touchstarte_x:0,
				touchstarte_y:0,
				id:'canvas',
				number: 0
			}
		},
		onReady() {
			// colse(index) {
			// 	!index ? index : this.trim();
			// }
			this.trim(); 
		},
		watch: {
			onInit() {
				this.trim();
			}
		},
		methods: {
			trim(){		
				dragBall.boundary[0] = 320; //高
				dragBall.boundary[1] = 500; // 宽
				// var query	  = uni.createSelectorQuery();
				// query.select('#canvas').boundingClientRect()
				// query.exec((res) => {
				//   dragBall.boundary[0]=res[0].width
				//   dragBall.boundary[1]=res[0].height;
				// })
				dragBall.list = this.onInit;
				dragBall.mapping(this);
				data 	= dragBall.list;
				dragBall.sustained(this);},
			touchstart(e){
				this.touchstarte_x	= e.mp.touches[0].x;
				this.touchstarte_y	= e.mp.touches[0].y;
				for (let i = 0; i < data.length; i++) {
					if( getDistance(data[i].x,data[i].y,this.touchstarte_x,this.touchstarte_y) < (data[i].radius*2)){
						this.index = i;
						
						if(this.number < 8){
							data[i].colse =!data[i].colse;
							data[i].colse ? this.number +=1 : this.number -=1;
						} else {
							if(data[i].colse){
								data[i].colse =!data[i].colse;
								this.number -=1;
							}
						}
						this.$emit('click_',i)
						dragBall.mapping(this);
						// this.touchstarte_x	= this.touchstarte_x-data[i].x;
						// this.touchstarte_y	= this.touchstarte_y-data[i].y;
						}
				}
			},
			// touchmove(e){
			// 	if(this.index != 'false'){
			// 		
			// 		let index_1,index_2;
			// 		let	 tag 	= 	e.touches[0];
			// 		
			// 		data[this.index].x 	=  	tag.x-this.touchstarte_x ;
			// 		data[this.index].y	=  	tag.y-this.touchstarte_y ;
			// 		
			// 	for (let i = 0; i < data.length; i++) {
			// 		
			// 		index_1	= getDistance(data[i].x,data[i].y,data[this.index].x,data[this.index].y);
			// 		index_2	= (data[i].radius*2) + (data[this.index].radius*2);
			// 		if(i!= this.index){
			// 			
			// 		if( index_1 >  index_2){
			// 			dragBall.mapping(this);
			// 		}else{
			// 			data[i].x 	=  	data[i].x+(-(data[this.index].x-data[i].x)/10) ;
			// 			data[i].y	=  	data[i].y+(-(data[this.index].y-data[i].y)/10) ;
			// 			
			// 			(data[i].x-data[i].radius) < 0 ? data[i].x = data[i].radius : data[i].x;
			// 			(data[i].y-data[i].radius) < 0 ? data[i].y = data[i].radius : data[i].y;
			// 			
			// 			
			// 			(data[i].x+data[i].radius) > dragBall.boundary[0] ? data[i].x = (dragBall.boundary[0]-data[i].radius) : data[i].x;
			// 			(data[i].y+data[i].radius) > dragBall.boundary[1] ? data[i].y = (dragBall.boundary[1]-data[i].radius) : data[i].y;
			// 	
			// 			dragBall.mapping(this);
			// 			break;
			// 		}
			// 		}
			// 	}
			// 	}
			// },
			touchend(){this.index = 'false';}
		}
	}
</script>

<style>
	page{width: 100%;height: 100%;}
	canvas {width: 100%;height: 90%;}
</style>
