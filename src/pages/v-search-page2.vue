<template>
	<div v-if="visible">
		<v-search
			auto-complete
			:on-search="onSearch"
			:get-keywords="getKeywords"
			bg-color="#33aaff"
            placeholder="请输入关键字"
			back-icon="http://bpic.588ku.com/element_pic/01/47/97/7657440c5477938.jpg"
		>
		</v-search>
	</div>
</template>

<script>
export default {
	data() {
		return {
			visible: false
		}
	},
	mounted() {
		this.visible = true
	},
	methods: {
		onSearch(value) {
			console.log(value)
		},
		getKeywords(value, cb) {
			if (!value) {
				cb([])
				return
			}

			cb([
				{
					label: 1
				},
				{
					label: 2
				},
				{
					label: 3
				},
				{
					label: 1
				},
				{
					label: 2
				},
				{
					label: 3
				},
				{
					label: 1
				},
				{
					label: 2
				},
				{
					label: 3
				}
			])
		}
	}
}
</script>

