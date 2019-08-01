<template>
	<transition :name="effect" appear>
		<div
			v-show="visible"
			class="v-mask-container"
			:style="style"
			@click="convenientFn"
		>
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'VMaskLayer',
	props: {
		onclose: Function,
		effect: {
			type: String,
			default: 'fade'
		},
		background: {
			type: String,
			default() {
				return this.MASK_BACKGROUND || 'rgba(0,0,0,.5)'
			}
		},
		convenient: Boolean
	},
	data() {
		return {
			visible: false
		}
	},
	methods: {
		open() {
			ModalHelper.afterOpen()
			this.visible = true
		},
		close() {
			this.visible = false

			if (typeof this.onclose === 'function') {
				this.onclose()
			}
			ModalHelper.beforeClose()
		},
		convenientFn() {
			if (this.convenient) this.close()
		}
	},
	computed: {
		style() {
			return {
				background: this.background
			}
		}
	}
}
let ModalHelper = (function(bodyCls) {
	let scrollTop
	return {
		afterOpen: function() {
			scrollTop = document.scrollingElement.scrollTop
			document.body.classList.add(bodyCls)
			document.body.style.top = -scrollTop + 'px'
		},
		beforeClose: function() {
			document.body.classList.remove(bodyCls)
			document.scrollingElement.scrollTop = scrollTop
		}
	}
})('modal-open')
</script>
