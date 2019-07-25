<template>
	<div>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<p>12345</p>
		<v-scroll-load :load-more="loadMore" :completed="completed">
			<template v-slot:loading-html>
				正在加载中。。。
			</template>
			<template v-slot:loaded-html>
				加载已完成
			</template>
		</v-scroll-load>
	</div>
</template>

<style scoped>
p {
	height: 60px;
}
</style>


<script>
export default {
	data() {
		return {
			abc: 123,
			completed: false
		}
	},
	methods: {
		loadMore(unlock) {
			console.log(12345);
			setTimeout(() => {
				this.completed = true;
			}, 2000)
		}
	}
}
</script>

