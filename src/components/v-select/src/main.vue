<template>
	<v-mask-layer ref="___select" @click.native="closeMask">
		<transition :name="effect" appear>
			<div class="v-select-container" v-show="visible">
				<v-row class="plr10" v-if="title || showCloseBtn">
					<v-col class="h50 lh50" @click.native="close" v-if="showCloseBtn"
						>取消</v-col
					>
					<v-col class="flex-1 txt-center h50 lh50" v-if="title">{{
						title
					}}</v-col>
					<v-col
						class="txt-right h50 lh50"
						@click.native="confirm"
						v-if="showCloseBtn"
						>完成</v-col
					>
				</v-row>
				<div
					class="v-select-touch-container of-hidden"
					@touchstart="touchstart($event)"
					@touchmove.prevent="touchmove($event)"
					@touchend="touchend($event)"
				>
					<div
						ref="scrollEle"
						class="v-select-touch-content"
						data-top="0"
						:style="scrollTransform"
					>
						<div
							v-for="(option, j) in selectData"
							ref="scrollItem"
							:key="j"
							class="txt-center pt20 pb20 v-select-item"
						>
							{{ option.label }}
						</div>
					</div>
					<div class="v-select-touch-result" :style="positionStyle">
						<div :style="scrollTransform" ref="scrollRst">
							<div
								v-for="(option, j) in selectData"
								ref="scrollItem"
								:key="j"
								class="txt-center pt20 pb20 v-select-item"
							>
								{{ option.label }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</v-mask-layer>
</template>

<script>
// 外套maskLayer组件时 关闭怎么样产生动画？

const ANIMATE_CLASS = '___animate'
export default {
	name: 'VSelect',
	data() {
		return {
			visible: false,
			startY: 0,
			endY: 0,
			disY: 0,
			positionStyle: {
				top: 0,
				bottom: 0
			},
			tops: [],
			timestart: 0,
			power: 0,
			prev: 0,
			timer: null,
			selectOption: null,
			selectMask: null
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
		onSelect: Function,
		onClose: Function,
		title: String,
		showCloseBtn: Boolean,
		showConfirmBtn: Boolean,
		defaultValue: [String, Number]
	},
	mounted() {
		this.selectMask = this.$refs.___select
	},
	methods: {
		touchstart(e) {
			clearTimeout(this.timer)
			this.power = 0
			const scrollEle = this.$refs.scrollEle
			let top = parseFloat(scrollEle.dataset['top'])
			this.startY = e.touches[0].pageY - top
			this.timestart = e.timeStamp
			this.prev = this.startY
		},
		touchmove(e) {
			if (e.timeStamp - this.timestart > 100) {
				const scrollEle = this.$refs.scrollEle
				this.endY = e.changedTouches[0].pageY
				this.disY = scrollEle.dataset['top'] = this.endY - this.startY
			}
			this.power = e.changedTouches[0].pageY - this.prev
			this.prev = e.changedTouches[0].pageY
		},
		touchend() {
			const friction = ((this.power >> 31) * 2 + 1) * 0.5
			this.timer = setInterval(() => {
				const scrollEle = this.$refs.scrollEle
				const scrollRst = this.$refs.scrollRst
				const scrollItem = this.$refs.scrollItem[0]
				const scrollItemHeight = scrollItem.offsetHeight
				const len = this.selectData.length
				const h = scrollItemHeight * (len - 1)
				this.power -= friction
				this.disY += this.power
				scrollEle.dataset['top'] = this.disY
				if (this.disY > 0) {
					this.ease(0)
					this.selectOption = this.selectData[0]
				} else if (this.disY < -h + scrollItemHeight / 2) {
					this.ease(-h)
					this.selectOption = this.selectData[len - 1]
				} else if (Math.abs(this.power) < 1) {
					this.tops.forEach((top, i) => {
						if (
							this.disY < -top + scrollItemHeight / 2 &&
							this.disY > -this.tops[i + 1] + scrollItemHeight / 2
						) {
							this.ease(-top)
							this.selectOption = this.selectData[i]
						}
					})
				}
			}, 20)
		},

		close() {
			this.visible = false
			this.$nextTick(this.selectMask.close)
			this.onClose()
		},

		confirm() {
			this.onSelect(this.selectOption)
			this.close()
		},

		open() {
			this.selectMask.open()
			this.visible = true
			this.$nextTick(() => {
				const scrollEle = this.$refs.scrollEle
				const scrollItem = this.$refs.scrollItem[0]
				scrollEle.style.top = scrollItem.offsetHeight * 2 + 'px'
				scrollEle.style.height = scrollItem.offsetHeight * 5 + 'px'
				this.positionStyle.top = this.positionStyle.bottom =
					(scrollEle.offsetHeight - scrollItem.offsetHeight) / 2 + 'px'
				this.tops = this.selectData.map((item, i) => {
					if (this.defaultValue === item.value) {
						this.disY = scrollEle.dataset['top'] = -scrollItem.offsetHeight * i
						this.selectOption = item
					}
					return scrollItem.offsetHeight * i
				})
			})
		},

		ease(h) {
			const scrollEle = this.$refs.scrollEle
			clearInterval(this.timer)
			this.timer = setInterval(() => {
				this.disY -= (this.disY - h) * 0.2
				scrollEle.dataset['top'] = this.disY
				if (Math.abs(this.disY - h) < 1) {
					this.disY = scrollEle.dataset['top'] = h
					clearInterval(this.timer)
				}
			}, 20)
		},

		closeMask() {
			if (!this.showCloseBtn) this.confirm()
		}
	},

	computed: {
		selectData() {
			return this.list.map(option => {
				return {
					value: option.value,
					label: option.label
				}
			})
		},
		scrollTransform() {
			return {
				transform: 'translate3d(0,' + this.disY + 'px, 0)'
			}
		}
	},
	beforeDestroy() {
		document.removeEventListener('click', this.confirm, false)
	}
}
</script>

