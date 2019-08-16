<template>
	<div class="pull-refresh-container">
		<div v-show="status === 0">
			<div v-if="!$slots.pull">
				<img class="arrow-icon" :src="arrowIcon" alt="" />
			</div>
			<div v-else>
				<slot name="pull"></slot>
			</div>
		</div>
		<div v-show="status === 1">
			<div v-if="!$slots.beforeLoad">
				<img class="load-icon canload" :src="loadingIcon" alt="" />
			</div>
			<div v-else>
				<slot name="beforeLoad"></slot>
			</div>
		</div>
		<div v-show="status === 2">
			<div v-if="!$slots.loading">
				<img class="load-icon loading" :src="loadingIcon" alt="" />
			</div>
			<div v-else>
				<slot name="loading"></slot>
			</div>
		</div>
		<div v-show="status === 3">
			<div v-if="!$slots.loadSuccess">
				更新成功
			</div>
			<div v-else>
				<slot name="loadSuccess"></slot>
			</div>
		</div>
		<div v-show="status === 4">
			<div v-if="!$slots.loadFail">
				更新失败
			</div>
			<div v-else>
				<slot name="loadFail"></slot>
			</div>
		</div>
	</div>
</template>

<script>
import { getScrollTop } from '../../util'

export default {
	name: 'VPullRefresh',
	props: {
		containerCls: String,
		distance: {
			type: [String, Number],
			default: 50
		},
		onRefresh: Function,
		loadingIcon: {
			type: String,
			default: require('./refresh-icon.png')
		},
		arrowIcon: {
			type: String,
			default: require('./down-arrow.png')
		},
		ms: {
			type: [String, Number],
			default: 500
		}
	},
	data() {
		return {
			can: true, // 能否下拉
			startY: 0,
			endY: 0,
			disY: 0,
			status: 0 // 0 下拉状态中 1.松开可以触发更新 2.更新ing 3.更新完成 4.更新失败
		}
	},
	computed: {
		dis() {
			return parseInt(this.distance)
		}
	},
	methods: {
		touchstart(){},
		touchmove(){},
		touchend(){}
	},
	mounted() {
		const container = this.containerCls
			? document.querySelector('.' + this.containerCls)
			: document
		const scrollContainer = container === document ? document.body : container
		
		const cb = () => {
			scrollContainer.style.transform = `none`
			scrollContainer.style.webkitTransform = `none`
			setTimeout(() => {
				scrollContainer.classList.remove('___animate')
				this.can = true
				this.status = 0
			}, 300)
		}
		const success = () => {
			this.status = 3
			setTimeout(cb, this.ms)
		}
		const fail = () => {
			this.status = 4
			setTimeout(cb, this.ms)
		}

		this.touchstart = e => {
			this.startY = e.touches[0].pageY
		}
		this.touchend = e => {
			this.disY && scrollContainer.classList.add('___animate')
			if (this.disY >= this.dis) {
				scrollContainer.style.transform = `translate3d(0, ${this.dis}px, 0)`
				scrollContainer.style.webkitTransform = `translate3d(0, ${this.dis}px, 0)`
				this.status = 2
				this.disY = 0
				this.can = false
				this.onRefresh({ success, fail })
			} else {
				this.disY && cb()
			}
		}
		this.touchmove = e => {
			if (!this.can) return
			const scrollTop = getScrollTop(container)
			this.endY = e.changedTouches[0].pageY
			if (scrollTop === 0 && this.endY > this.startY) {
				this.disY = (this.endY - this.startY) / 1.5
				this.disY = this.disY > 100 ? 100 + (this.disY - 100) / 2 : this.disY
				this.disY = this.disY > 200 ? 200 + (this.disY - 200) / 2.5 : this.disY
				this.disY > this.dis ? (this.status = 1) : (this.status = 0)
				scrollContainer.style.transform = `translate3d(0, ${this.disY}px, 0)`
				scrollContainer.style.webkitTransform = `translate3d(0, ${this.disY}px, 0)`
				e.preventDefault()
			}
		}
		container.addEventListener('touchstart', this.touchstart, { passive: false })
		container.addEventListener('touchmove', this.touchmove, { passive: false })
		container.addEventListener('touchend', this.touchend, { passive: false })
	},
	beforeDestroy() {
		const container = this.containerCls
			? document.querySelector('.' + this.containerCls)
			: document
		container.removeEventListener('touchstart', this.touchstart)
		container.removeEventListener('touchmove', this.touchmove)
		container.removeEventListener('touchend', this.touchend)
	}
}
</script>

