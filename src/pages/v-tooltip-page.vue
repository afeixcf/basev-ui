<template>
	<div>
		<v-row class="h70"></v-row>
		<v-row>
			<v-col span="3"></v-col>
			<v-col span="1">
				<v-tooltip
					content="我是上左的提示"
					position="top-start"
					distance="10"
					time-out="0"
				>
					<button class="demo-btn">
						<div class="h20 lh20">上左</div>
					</button>
				</v-tooltip>
			</v-col>
			<v-col span="1"></v-col>
			<v-col span="1">
				<v-tooltip content="我是上边的提示" position="top" distance="10">
					<button class="demo-btn">
						<div class="h20 lh20">上边</div>
					</button>
				</v-tooltip>
			</v-col>
			<v-col span="1"></v-col>
			<v-col span="1">
				<button class="demo-btn">
					<v-tooltip content="我是上右的提示" position="top-end" distance="10" time-out="0">
						<div class="h20 lh20">上右</div>
					</v-tooltip>
				</button>
			</v-col>
			<v-col span="1"></v-col>
			<v-col span="3"></v-col>
		</v-row>

		<v-row class="h20"></v-row>
		<v-row>
			<v-col span="8"></v-col>
			<v-col span="1"
				><button class="demo-btn">
					<v-tooltip
						content="我是左上的提示我是左上的提示我是左上的提示我是左上的提示"
						position="left-start"
						distance="10"
					>
						<div class="h20 lh20">左上</div>
					</v-tooltip>
				</button>
			</v-col>
		</v-row>
		<v-row class="h40"></v-row>
		<v-row>
			<v-col span="8"></v-col>
			<v-col span="1"
				><button class="demo-btn">
					<v-tooltip
						content="我是左边的提示我是左边的提示我是左边的提示我是左边的提示"
						position="left"
						distance="10"
					>
						<div class="h20 lh20">左边</div>
					</v-tooltip>
				</button>
			</v-col>
		</v-row>
		<v-row class="h40"></v-row>
		<v-row>
			<v-col span="8"></v-col>
			<v-col span="1"
				><button class="demo-btn">
					<v-tooltip
						content="我是左下的提示我是左下的提示我是左下的提示我是左下的提示"
						position="left-end"
						distance="10"
					>
						<div class="h20 lh20">左下</div>
					</v-tooltip>
				</button>
			</v-col>
		</v-row>

		<v-row class="50"></v-row>
		<v-row>
			<v-col span="3"></v-col>
			<v-col span="1">
				<button class="demo-btn">
					<v-tooltip
						content="我是右上的提示我是右上的提示我是右上的提示我是右上的提示"
						position="right-start"
						distance="10"
					>
						<div class="h20 lh20">右上</div>
					</v-tooltip>
				</button>
			</v-col>
		</v-row>

		<v-row class="h40"></v-row>
		<v-row>
			<v-col span="3"></v-col>
			<v-col span="1">
				<button class="demo-btn">
					<v-tooltip
						content="我是右边的提示我是右边的提示我是右边的提示我是右边的提示"
						position="right"
						distance="10"
					>
						<div class="h20 lh20">右边</div>
					</v-tooltip>
				</button>
			</v-col>
		</v-row>

		<v-row class="h40"></v-row>
		<v-row>
			<v-col span="3"></v-col>
			<v-col span="1">
				<button class="demo-btn">
					<v-tooltip
						content="我是右下的提示我是右下的提示我是右下的提示我是右下的提示"
						position="right-end"
						distance="10"
					>
						<div class="h20 lh20">右下</div>
					</v-tooltip>
				</button>
			</v-col>
		</v-row>

		<v-row class="h20"></v-row>
		<v-row>
			<v-col span="3"></v-col>
			<v-col span="1">
				<button class="demo-btn">
					<v-tooltip
						content="我是下左的提示"
						position="bottom-start"
						distance="10"
					>
						<div class="h20 lh20">下左</div>
					</v-tooltip>
				</button>
			</v-col>
			<v-col span="1"></v-col>
			<v-col span="1">
				<button class="demo-btn">
					<v-tooltip content="我是下边的提示" position="bottom" distance="10">
						<div class="h20 lh20">下边</div>
					</v-tooltip>
				</button>
			</v-col>
			<v-col span="1"></v-col>
			<v-col span="1">
				<button class="demo-btn">
					<v-tooltip
						content="我是下右的提示"
						position="bottom-end"
						distance="10"
					>
						<div class="h20 lh20">下右</div>
					</v-tooltip>
				</button>
			</v-col>
			<v-col span="1"></v-col>
			<v-col span="3"></v-col>
		</v-row>
	</div>
</template>

<style scoped>
p {
	height: 100px;
}
.demo-btn {
	border: 1px solid #eee;
	background: white;
	margin: 0;
	width: 100%;
	outline: none;
}
</style>

<script>
export default {
	data() {
		return {}
	},
	mounted() {}
}
</script>

