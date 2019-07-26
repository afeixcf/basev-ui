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
	mounted() {
		this.$toastr.show(
			'sadjklsadjklsa djklsadjkl',
			{ type: 'fail' }
		)
		// this.$toastr.show('炸弹来啦2')
		// this.$toastr.show('炸弹来啦3')
	}
}
</script>

