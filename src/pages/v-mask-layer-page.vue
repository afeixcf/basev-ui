<template>
	<div>
		<div style="background:blue;height: 200px;" @click="openMask"></div>
		<!-- <img :src="src" alt="" /> -->
		<div class="h100 of-hidden">
			<v-image :src="src" lazy threshold="20"></v-image>
		</div>
		<div class="h100 of-hidden">
			<v-image :src="src" lazy></v-image>
		</div>
		<div class="h100 of-hidden">
			<v-image :src="src" lazy></v-image>
		</div>
		<div class="h100 of-hidden">
			<v-image :src="src" lazy></v-image>
		</div>
		<div class="h100 of-hidden">
			<v-image :src="src" lazy></v-image>
		</div>
		<div class="h100 of-hidden" @click="openMask">
			<v-image :src="src" lazy></v-image>
		</div>
		<div class="h100 of-hidden">
			<v-image :src="src" lazy></v-image>
		</div>
		<div class="h100 of-hidden">
			<v-image :src="src" lazy></v-image>
		</div>
		<div class="h100 of-hidden">
			<v-image :src="src" lazy></v-image>
		</div>
		<v-mask-layer ref="mask" :onclose="closed">
			<div class="test-mask-content">
				<div class="h100 of-hidden mt50">
					<v-image
						:container-cls="containerCls"
						:src="src"
						lazy
						threshold="20"
					></v-image>
				</div>
				<div class="h100 of-hidden mt50">
					<v-image
						:container-cls="containerCls"
						:src="src"
						lazy
						threshold="0"
					></v-image>
				</div>
				<div class="h100 of-hidden mt50">
					<v-image
						:container-cls="containerCls"
						:src="src"
						lazy
						threshold="-100"
					></v-image>
				</div>
				<div class="h100 of-hidden mt50">
					<v-image
						:container-cls="containerCls"
						:src="src"
						lazy
						threshold="-100"
					></v-image>
				</div>
				<div class="h100 of-hidden mt50">
					<v-image
						:src="src"
						lazy
						:container-cls="containerCls"
						threshold="-100"
					></v-image>
				</div>
			</div>
		</v-mask-layer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			src:
				'http://www.gravatar.com/avatar/8944898bda77bbb0a83900bce89ad0e3?s=72&d=identicon',
			containerCls: 'test-mask-content'
		}
	},
	mounted() {},
	methods: {
		openMask() {
			this.$refs.mask.open()
		},
		closed() {
			console.log('close')
		}
	}
}
</script>

<style scoped>
.test-mask-content {
	color: #333;
	font-weight: bold;
	background: white;
	width: 100%;
	margin: 0 auto;
	padding: 10px 10px;
	height: 300px;
	overflow: scroll;
}
</style>

