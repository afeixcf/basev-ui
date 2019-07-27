<template>
	<div>
		<div class="h100"></div>

		<v-row>
			<v-col span="2"></v-col>
			<v-col span="4">
				<v-tooltip content="我是提示信息我是提示信息" position="top">
					<div>点击我获得提示</div>
				</v-tooltip>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
p {
	height: 100px;
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

