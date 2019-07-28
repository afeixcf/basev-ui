<template>
	<div class="v-tooltip-container">
		<div ref="clickContent" @click.stop="show">
			<slot></slot>
		</div>
		<transition name="fade" appear>
			<div
				class="v-tooltip-content"
				:class="[cls]"
				v-if="visible"
				:style="positionStyle"
			>
				<div class="v-tooltip-arrow"></div>
				<div class="txt-left" @click.stop="show">{{ content }}</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'VTooltip',
	data() {
		return {
			visible: false,
			positionStyle: {
				left: 0,
				top: 0,
				background: this.bgColor,
				color: this.fontColor,
				fontSize: this.fontSize + 'px'
			},
			timer: null
		}
	},
	computed: {
		cls() {
			return `v-tooltip-${this.position}`
		},
		timeout() {
			return parseInt(this.timeOut)
		}
	},
	props: {
		position: {
			type: String,
			default: 'top'
		},
		content: {
			required: true,
			type: String
		},
		timeOut: {
			type: [Number, String],
			default: 2000
		},
		distance: {
			type: [Number, String],
			default: 10
		},
		bgColor: {
			type: String,
			default: 'rgba(0,0,0,.7)'
		},
		fontColor: {
			type: String,
			default: 'white'
		},
		fontSize: {
			type: [Number, String],
			default: 12
		}
	},
	methods: {
		show() {
			this.visible = true
			this.$nextTick(this.setPostion)
			if (this.timeout) {
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					this.hide()
				}, parseInt(this.timeout))
			}
		},
		hide() {
			clearTimeout(this.timer)
			this.timer = null
			this.visible = false
		},
		setPostion() {
			const tooltipContent = document.querySelector(`.${this.cls}`)
			const clickContent = this.$refs.clickContent
			const position = this.position
			const dis = parseInt(this.distance)

			if (position === 'top') {
				this.positionStyle.left =
					clickContent.offsetLeft +
					clickContent.offsetWidth / 2 -
					tooltipContent.offsetWidth / 2 +
					'px'
				this.positionStyle.top =
					clickContent.offsetTop - tooltipContent.offsetHeight - dis + 'px'
			} else if (position === 'top-start') {
				this.positionStyle.left = clickContent.offsetLeft + 'px'
				this.positionStyle.top =
					clickContent.offsetTop - tooltipContent.offsetHeight - dis + 'px'
			} else if (position === 'top-end') {
				this.positionStyle.left =
					clickContent.offsetLeft +
					clickContent.offsetWidth -
					tooltipContent.offsetWidth +
					'px'
				this.positionStyle.top =
					clickContent.offsetTop - tooltipContent.offsetHeight - dis + 'px'
			} else if (position === 'bottom') {
				this.positionStyle.left =
					clickContent.offsetLeft +
					clickContent.offsetWidth / 2 -
					tooltipContent.offsetWidth / 2 +
					'px'
				this.positionStyle.top =
					clickContent.offsetTop + clickContent.offsetHeight + dis + 'px'
			} else if (position === 'bottom-start') {
				this.positionStyle.left = clickContent.offsetLeft + 'px'
				this.positionStyle.top =
					clickContent.offsetTop + clickContent.offsetHeight + dis + 'px'
			} else if (position === 'bottom-end') {
				this.positionStyle.left =
					clickContent.offsetLeft +
					clickContent.offsetWidth -
					tooltipContent.offsetWidth +
					'px'
				this.positionStyle.top =
					clickContent.offsetTop + clickContent.offsetHeight + dis + 'px'
			} else if (position === 'left') {
				this.positionStyle.left =
					clickContent.offsetLeft - tooltipContent.offsetWidth - dis + 'px'
				this.positionStyle.top =
					clickContent.offsetTop -
					(tooltipContent.offsetHeight - clickContent.offsetHeight) / 2 +
					'px'
			} else if (position === 'left-start') {
				this.positionStyle.left =
					clickContent.offsetLeft - tooltipContent.offsetWidth - dis + 'px'
				this.positionStyle.top = clickContent.offsetTop + 'px'
			} else if (position === 'left-end') {
				this.positionStyle.left =
					clickContent.offsetLeft - tooltipContent.offsetWidth - dis + 'px'
				this.positionStyle.top =
					clickContent.offsetTop +
					clickContent.offsetHeight -
					tooltipContent.offsetHeight +
					'px'
			} else if (position === 'right') {
				this.positionStyle.left =
					clickContent.offsetLeft + clickContent.offsetWidth + dis + 'px'
				this.positionStyle.top =
					clickContent.offsetTop -
					(tooltipContent.offsetHeight - clickContent.offsetHeight) / 2 +
					'px'
			} else if (position === 'right-start') {
				this.positionStyle.left =
					clickContent.offsetLeft + clickContent.offsetWidth + dis + 'px'
				this.positionStyle.top = clickContent.offsetTop + 'px'
			} else if (position === 'right-end') {
				this.positionStyle.left =
					clickContent.offsetLeft + clickContent.offsetWidth + dis + 'px'
				this.positionStyle.top =
					clickContent.offsetTop +
					clickContent.offsetHeight -
					tooltipContent.offsetHeight +
					'px'
			}
		}
	},
	mounted() {
		document.addEventListener('click', this.hide, false)
	},
	beforeDestroy() {
		document.removeEventListener('click', this.hide, false)
	}
}
</script>

