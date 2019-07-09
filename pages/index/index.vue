<template>
	<view class="content">
		<dragBall :onInit='onInit' :colse='colse' @click_='click_'></dragBall>
	</view>
</template>

<script>
	import dragBall from '../../components/drag-ball/drag-ball.vue'
	export default {
		data() {
			return {
				onInit:	[{"x":79.45049232358554,"y":123.96125634387865,"radius":56,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[5,true],"labelName":"轻音乐"},
				{"x":198.76606872737423,"y":79.28588367513791,"radius":54,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[5,true],"labelName":"话痨"},
				{"x":290.5796037054993,"y":108.66399668264214,"radius":52,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[5,true],"labelName":"愤青"},
				{"x":152.08387466634375,"y":132.84566053159986,"radius":50,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[5,true],"labelName":"明白人"},
				{"x":222.67202922307413,"y":134.93094592803268,"radius":48,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[5,true],"labelName":"吃货"},
				{"x":287.6493903164786,"y":188.97865661799298,"radius":46,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[5,true],"labelName":"张爱玲"},
				{"x":107.73067038886846,"y":187.2797271941687,"radius":44,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[5,true],"labelName":"追星族"},
				{"x":40,"y":205.77712553537478,"radius":42,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[5,true],"labelName":"手工党"},
				{"x":111.6541869196958,"y":257.1809188612622,"radius":40,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[4,true],"labelName":"高富帅"},
				{"x":195.56214388739053,"y":200.52874311515055,"radius":38,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[4,true],"labelName":"懒癌患者"},
				{"x":138.14074312908605,"y":334.19671451681916,"radius":36,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[4,true],"labelName":"非洲酋长"},
				{"x":304.55315251849413,"y":329.7538300007863,"radius":34,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[4,true],"labelName":"运动"},
				{"x":200.63750041827257,"y":333.98364797550204,"radius":32,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[4,true],"labelName":"体育"},
				{"x":40,"y":293.298997433806,"radius":30,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[4,true],"labelName":"篮球"},
				{"x":188.58248165079874,"y":275.00910433000917,"radius":28,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[4,true],"labelName":"NBA"},
				{"x":258.3125781887689,"y":263.8787659765453,"radius":26,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[4,true],"labelName":"美食"}],
				colse: false,
				curInt: []
			}
		},
		onLoad() {

		},
		components: {
		  dragBall
		},
		methods: {
			click(){
				this.colse = true;
			},
			click_(index){
				let _this = this;
				let number = null;
				let curInt = index;
				_this.curInt.forEach((item, index) => {
					if (item == curInt) {
						number = index;
					}
				});
				
				if(number == null) {
					if (_this.curInt.length <= 7) {
						_this.curInt.push(curInt);
					} else {
						uni.showToast({
							title: '超出可选范围8个',
							duration: 2000
						})
					}
				} else {
					_this.curInt.splice(number, 1);
				}
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 1000upx;
		margin: 20rpx auto;
	}
</style>
