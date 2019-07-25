<template>
	<v-mask-layer ref="mask">
		<template v-slot:content>
			<v-select :list="list"></v-select>
		</template>
	</v-mask-layer>
</template>

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
			]
		}
	},
	mounted() {
		this.$refs.mask.open()
	}
}
</script>

