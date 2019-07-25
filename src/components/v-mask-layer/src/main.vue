<template>
	<transition :name="effect">
		<div v-if="visible" class="v-mask-container">
			<div class="v-mask-layer" @click="close"></div>
			<slot name="content"></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'VMaskLayer',
	props: {
		onClose: Function,
		effect: String
		
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

			if (typeof this.onClose === 'function') {
				this.onClose(this)
			}
			ModalHelper.beforeClose()
		}
	},
	created() {
		console.info('VMaskLayer----created----')
	},
	mounted() {
		console.info('VMaskLayer----mounted----')
	}
}
let ModalHelper = (function(bodyCls) {
	let scrollTop // 在闭包中定义一个用来保存滚动位置的变量
	return {
		afterOpen: function() {
			//弹出之后记录保存滚动位置，并且给body添加.modal-open
			scrollTop = document.scrollingElement.scrollTop
			document.body.classList.add(bodyCls)
			document.body.style.top = -scrollTop + 'px'
		},
		beforeClose: function() {
			//关闭时将.modal-open移除并还原之前保存滚动位置
			document.body.classList.remove(bodyCls)
			document.scrollingElement.scrollTop = scrollTop
		}
	}
})('modal-open')
</script>
