<template>
	<div :class="cls">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'VCol',
	data() {
		return {}
    },
    computed: {
        cls() {
            return `v-col-${this.span}`
        }  
    },
	props: {
		span: {
			type: [Number, String],
			required: true,
			validator(val) {
				val = parseInt(val);
				return typeof val === 'number' && val > 0 && val <= 12
			}
		}
	}
}
</script>

