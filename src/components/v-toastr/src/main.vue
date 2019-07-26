<template>
	<transition name="fade">
		<div class="v-toastr-container" v-if="visible">
			<div v-if="icon"><img :src="icon" alt="" class="v-toastr-icon mb10" /></div>
			<div>{{ message }}</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'VToastr',
	props: {},
	data() {
		return {
			visible: false,
			message: '',
			type: ''
		}
	},
	computed: {
		icon() {
			if (this.type === 'success') {
				return require('./icon-right.png')
			} else if (this.type === 'warn') {
				return require('./icon-warn.png')
			} else if (this.type === 'fail') {
				return require('./icon-fail.png')
			}
			return ''
		}
	},
	methods: {
		show(message, { timeOut = 1500, type , cb} = {}) {
			this.message = message
			this.type = type
			this.visible = true
			setTimeout(() => {
				this.hide()
				cb && cb()
			}, timeOut)
			return this
		},
		hide() {
			this.visible = false
		}
	},
	created() {},
	beforeMount() {
		let container = document.querySelector('.v-toast-list-container')
		if (!container) {
			container = document.createElement('div')
			container.classList.add('v-toast-list-container')
			document.body.appendChild(container)
		}

		container.appendChild(this.$el)
	},
	mounted() {},
	beforeDestroy() {}
}
</script>
