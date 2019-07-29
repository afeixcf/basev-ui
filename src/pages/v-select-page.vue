<template>
	<div>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<v-mask-layer ref="mask">
			<v-select :list="list" title="选择城市" :on-select="onSelect"></v-select>
		</v-mask-layer>
	</div>
</template>

<style scoped>
	p{
		height: 50px;
	}
</style>


<script>
export default {
	data() {
		return {
			list: [
				{ label: '上海', value: 'shanghai' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' },
				{ label: '上海', value: 'shanghai' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' },
				{ label: '上海', value: 'shanghai' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' },
				{ label: '上海', value: 'shanghai' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' }
			]
		}
	},
	mounted() {
		this.$refs.mask.open()
	},
	methods: {
		onSelect(option) {
			console.log(option)
		}
	}
}
</script>

