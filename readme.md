因项目需求，研发了基于uni-app微信小程序的标签选择，支持多选，最多选8个。
使用步骤：
一. 在项目根目录新建components,将drag-ball组件放入该目录
二. 在需要用到的页面引入该组件即可。

ps: 该组件还可以优化，请看到的大佬有兴趣帮忙优化， 方便更多的开发者。谢谢大家了！
	有兴趣加个好友，交流web前端技术，加群：648802995
	我本人联系方式 19807198428, 微信同号！

## 组件引用
```html
<template>
	<view class="content">
		<dragBall 	class="content_" :onInit='onInit' :colse='colse' @click_='click_'
					:style="'transform:translateX('+ x +'px)'"></dragBall>
	</view>
</template>

<script>
	import dragBall from '../../componets/drag-ball/drag-ball.vue';
	export default {
		components:{dragBall},
		data() {
			return {
				onInit:	[{"x":79.45049232358554,"y":123.96125634387865,"radius":30,"color":["#787878","'#25AEBF'"],"colse":false,"size":"10","floating":[0,false],"name":"高富帅"},
				{"x":198.76606872737423,"y":79.28588367513791,"radius":30,"color":["#787878","#25AEBF"],"colse":false,"size":"10","floating":[0,false],"name":"琼瑶"},
				{"x":290.5796037054993,"y":108.66399668264214,"radius":40,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[0,false],"name":"选择困难症"},
				{"x":152.08387466634375,"y":132.84566053159986,"radius":40,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[0,false],"name":"背包客"},
				{"x":222.67202922307413,"y":134.93094592803268,"radius":30,"color":["#787878","#25AEBF"],"colse":false,"size":"10","floating":[0,false],"name":"非洲酋长"},
				{"x":287.6493903164786,"y":188.97865661799298,"radius":40,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[0,false],"name":"轻音乐"},
				{"x":107.73067038886846,"y":187.2797271941687,"radius":30,"color":["#787878","#25AEBF"],"colse":false,"size":"10","floating":[0,false],"name":"烘焙"}],
				colse:false,
				x:320
			}
		},
		onLoad() {
			
		},
		methods: {
			click(){this.colse=true,this.x=0;},
			click_(index){
				
			}
		}
	}
</script>

<style>
	page{width: 100%;height: 100%;}
	.content_ {width: 100%;height: 90%;padding-top: 10%;transition: .5s;}
	.content {width: 100%;height: 90%;padding-top: 10%;}
</style>
```
## 组件参数

| 属性名 |  类型 |  说明  |
| --------   | -----:  | :----:  |
| x      | Number   |   球初始X轴     |
| y        |   Number   |   球初始Y轴   |
| radius      | Number   |   球的半径     |
| color        |   Array   |   [初始颜色，变化颜色]   |
| colse      | Boolean   |   球颜色初始设定     |
| size        |   String   |   文字大小(最好为球的radius一半)   |
| floating      | Array   |   [0,false]     |
| name        |   String   |   球里的字   |