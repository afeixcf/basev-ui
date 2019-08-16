<template>
	<div class="txt-center">
		<div v-if="!$slots['loading-html'] && !completed">正在加载中...</div>
		<div v-if="!$slots['loaded-html'] && completed">加载完成</div>
		<slot v-if="$slots['loading-html'] && !completed" name="loading-html"></slot>
		<slot v-if="$slots['loaded-html'] && completed" name="loaded-html"></slot>
	</div>
</template>

<script>
import visibleObserver from 'dom-visible-observer'

export default {
	name: 'VScrollLoad',
	props: {
		loadMore: {
			type: Function,
			required: true
		},
		completed: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			can: true,
			completed: false,
			destroy: () => {}
		}
	},
	methods: {
		lock() {
			this.can = false
		},
		unlock() {
			this.can = true
		},
		finish() {
			this.completed = true
		}
	},
	mounted() {
		this.destroy = visibleObserver({
			el: this.$el,
			show: () => {
				if (this.can) {
					this.loadMore(this.unlock, this.finish)
				}
				this.lock()
			}
		}).destroy
	},
	beforeDestroy() {
		this.destroy()
	}
}
</script>

