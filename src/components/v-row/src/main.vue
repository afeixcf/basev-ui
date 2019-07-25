<template>
	<div class="v-row" :class="cls">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'VRow',
	props: {
		justify: {
            type: String,
            default: 'flex-start',
			validator(val) {
				const vals = [
					'center',
					'flex-start',
					'flex-end',
					'space-between',
					'space-around',
					'space-evenly'
				]
				return vals.indexOf(val) > -1
			}
		},
		align: {
            type: String,
            default: 'flex-start',
			validator(val) {
				const vals = [
					'flex-start',
					'center',
					'flex-end'
				]
				return vals.indexOf(val) > -1
			}
		}
	},
	computed: {
		cls() {
			return `justify-${this.justify} align-${this.align}`
		}
	}
}
</script>

