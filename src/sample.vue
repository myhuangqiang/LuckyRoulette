<template>
	<div class="wrapper">
		<Roulette :r="roulette.radius" :coverurl="roulette.coverurl" :datas="roulette.datas" :test="roulette.test"
		 :pointerurl="roulette.pointerurl" ref="luckyRoulette" :during="duringHandle" @click="clickFun"></Roulette>

		<div class="sample">
			<p>状态:"{{sample.state}}"</p>
			<p>
				<button type="button" @click="clickFun">开始抽奖</button>
				<button type="button" @click="reset">重置抽奖</button>
			</p>
			<div>
				<table border="1" style="margin: auto;">
					<thead>
						<tr>
							<th>奖品</th>
							<th>起始角度</th>
							<th>结束角度</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in roulette.datas" :key="item.name">
							<td>{{item.desc}}</td>
							<td><input type="number" v-model.number="item.degs[0]"></td>
							<td><input type="number" v-model.number="item.degs[1]"></td>
							<td><button type="button" @click="brake(item.name)">中奖</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				<button type="button" @click="toggleCoverUrl">{{roulette.coverurl?'隐藏':'显示'}}封面</button>

				<button type="button" @click="togglePointerUrl">{{roulette.pointerurl?'隐藏':'显示'}}指针</button>

				<button type="button" @click="toggleTest">{{roulette.test?'隐藏':'显示'}}辅助线</button>
			</p>
			<p>
				<label for="radius">设置半径<input type="number" id="radius" v-model.number="roulette.radius"></label>
			</p>

		</div>
	</div>
</template>
<script>
	// import Roulette from '../dist/roulette/roulette.js'
	import Roulette from './roulette'

	export default {
		components: {
			Roulette
		},
		data() {
			return {
				sample: {
					state: 'static'
				},
				roulette: {
					coverurl: 'assets/r.png',
					pointerurl: 'assets/p.png',
					radius: 100,
					test: true,
					datas: [{
						name: 'thanku',
						degs: [27, 87],
						desc: '谢谢参与'
					}, {
						name: 'ps',
						degs: [333, 387],
						desc: '特等奖'
					}, {
						name: 'p2',
						degs: [87, 147],
						desc: '二等奖'
					}, {
						name: 'welcome',
						degs: [147, 207],
						desc: '欢迎再来'
					}, {
						name: 'p1',
						degs: [207, 274],
						desc: '一等奖'
					}, {
						name: 'p3',
						degs: [274, 333],
						desc: '三等奖'
					}]
				}
			}
		},
		methods: {
			clickFun() {
				this.$refs.luckyRoulette.play()
			},
			brake(name) {
				this.$refs.luckyRoulette.brake(name)
			},
			reset() {
				this.$refs.luckyRoulette.reset()
			},
			duringHandle(state) {
				this.sample.state = state;
			},
			toggleCoverUrl() {
				this.roulette.coverurl = !this.roulette.coverurl ? 'assets/r.png' : '';
			},
			togglePointerUrl() {
				this.roulette.pointerurl = !this.roulette.pointerurl ? 'assets/p.png' : '';
			},
			toggleTest() {
				this.roulette.test = !this.roulette.test;
			},
			setRadius(radius) {
				this.roulette.radius = radius;
			}
		},
		created() {

		}
	}
</script>
<style>
	.wrapper {
		text-align: center;
	}

	input {
		font-size: inherit;
		width: 40px;
	}

	button {
		font-size: inherit;
	}
</style>
