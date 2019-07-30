<template>
	<div>
		<p>231312231</p>
		<p @click="openSelect">231312231</p>
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
		<v-select
			ref="select"
			:list="list"
			title="选择城市"
			:on-select="onSelect"
			:on-close="onClose"
			:default-value="selectValue"
		></v-select>
	</div>
</template>

<style scoped>
p {
	height: 50px;
}
</style>


<script>
export default {
	data() {
		return {
			selectValue: 'shanghai2',
			list: [
				{ label: '上海', value: 'shanghai' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' },
				{ label: '上海2', value: 'shanghai2' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' },
				{ label: '上海3', value: 'shanghai3' },
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
	},
	methods: {
		onSelect(option) {
			console.log(option)
			this.selectValue = option.value
		},
		onClose() {
			console.log('close')
		},
		openSelect() {
			console.log(this.$refs.select)
			this.$refs.select.open()
		}
	}
}
</script>

