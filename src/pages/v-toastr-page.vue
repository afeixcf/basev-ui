<template>
	<div>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
		<p>123141412</p>
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
	methods: {
		
	},
	mounted() {
		this.$toastr.show(
			'网络错误，请稍后再试',
			{ type: 'warn' }
		)
	}
}
</script>

