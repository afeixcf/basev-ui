<template>
	<v-mask-layer ref="mask" @click.native="closeSelectMask">
		<div class="v-select-single-container">
			<v-select ref="select" :list="list" :effect="effect" :title="title" :onselect="onSelectSingle" :onclose="onCloseSingle"
				:default-value="defaultValue" :show-close-btn="showCloseBtn" :get-current-option="getCurrentOption">
			</v-select>
		</div>
	</v-mask-layer>
</template>

<script>
export default {
	name: 'VSelectSingle',
	data() {
		return {
			visible: false
		}
	},
	props: {
		list: {
			required: true,
			type: Array
		},
		effect: {
			type: String,
			default: 'fadeup'
		},
		onselect: Function,
		onclose: Function,
		convenient: Boolean,
		title: String,
		showCloseBtn: {
			type: Boolean,
			default: true
		},
		defaultValue: [String, Number],
		getCurrentOption: Function,
		convenient: Boolean
	},
	mounted() {},
	methods: {
		onSelectSingle(option) {
			this.onselect && this.onselect(option)
			this.$refs.mask.close()
		},
		onCloseSingle() {
			this.onclose && this.onclose()
			this.$refs.mask.close()
		},
		open() {
			this.$refs.mask.open()
			this.$refs.select.open()
			this.$nextTick(() => (this.visible = true))
		},
		close() {
			this.$refs.mask.close()
			this.$nextTick(() => (this.visible = false))
		},

		closeSelectMask() {
			if (!this.showCloseBtn) {
				this.$refs.select.confirm()
				this.$refs.mask.close()
				return
			}

			if (this.convenient) {
				this.$refs.select.close()
				this.$refs.mask.close()
			}
		}
	},

	computed: {},
	watch: {}
}
</script>

