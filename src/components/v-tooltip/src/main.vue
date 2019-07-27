<template>
	<div class="v-tooltip-container">
		<div ref="clickContent">
			<slot></slot>
		</div>
		<transition name="fade" appear>
			<div
				class="v-tooltip-content"
				:class="[cls]"
				v-if="visible"
				:style="positionStyle"
			>
				<div>{{ content }}</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'VTooltip',
	data() {
		return {
			visible: true,
			positionStyle: {
				left: 0,
				top: 0
			}
		}
	},
	computed: {
		cls() {
			return `v-tooltip-${this.position}`
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
		timeOut: [Number, String]
	},
	methods: {},
	mounted() {
		const tooltipContent = document.querySelector(`.${this.cls}`)
		const clickContent = this.$refs.clickContent
		const position = this.position

		if (position === 'top') {
			this.positionStyle.left =
				clickContent.offsetLeft +
				clickContent.offsetWidth / 2 -
				tooltipContent.offsetWidth / 2 +
				'px'
			this.positionStyle.top =
				clickContent.offsetTop - tooltipContent.offsetHeight - 10 + 'px'
		} else if (position === 'left') {
			this.positionStyle.left =
				clickContent.offsetLeft - tooltipContent.offsetWidth - 10 + 'px'
			this.positionStyle.top =
				clickContent.offsetTop -
				(tooltipContent.offsetHeight - clickContent.offsetHeight) / 2 +
				'px'
		}
	}
}
</script>

