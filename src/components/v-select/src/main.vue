<template>
	<transition :name="effect">
		<div class="v-select-container flex-1" v-if="visible">
			<v-row class="plr10" v-show="(title || showCloseBtn)" :style="headerStyle">
				<v-col class="h50 lh50">
					<span v-if="showCloseBtn" @click="close">取消</span>
				</v-col>

				<v-col class="flex-1 txt-center h50 lh50">
					<span v-if="title">{{ title }}</span>
				</v-col>

				<v-col class="txt-right h50 lh50">
					<span v-if="showCloseBtn" @click="confirm">完成</span>
				</v-col>
			</v-row>
			<div class="v-select-touch-container of-hidden" @touchstart="touchstart($event)"
				@touchmove.prevent="touchmove($event)" @touchend="touchend($event)">
				<div ref="scrollEle" class="v-select-touch-content" data-top="0" :style="scrollTransform">
					<div v-for="(option, j) in selectData" ref="scrollItem" :key="j"
						class="txt-center pt20 pb20 v-select-item">
						{{ option.label }}
					</div>
				</div>
				<div class="v-select-touch-result" :style="positionStyle">
					<div :style="scrollTransform" ref="scrollRst">
						<div v-for="(option, j) in selectData" ref="scrollItem" :key="j"
							class="txt-center pt20 pb20 v-select-item">
							{{ option.label }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
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
			selectValue: this.defaultValue
			// selectMask: null
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
		title: String,
		showCloseBtn: Boolean,
		defaultValue: [String, Number],
		getCurrentOption: Function,
		headerStyle: {
			type: Object,
			default() {
				return {
					background: 'white'
				}
			}
		}
	},
	mounted() {
		// this.selectMask = this.$refs.___select
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
			if (e.timeStamp - this.timestart > 40) {
				const scrollEle = this.$refs.scrollEle
				this.endY = e.changedTouches[0].pageY
				this.disY = scrollEle.dataset['top'] = this.endY - this.startY
			}
			this.power = e.changedTouches[0].pageY - this.prev
			this.prev = e.changedTouches[0].pageY
		},
		touchend() {
			const friction = ((this.power >> 31) * 2 + 1) * .2
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
					this.getCurrentOption && this.getCurrentOption(this.selectOption)
				} else if (this.disY < -h + scrollItemHeight / 2) {
					this.ease(-h)
					this.selectOption = this.selectData[len - 1]
					this.getCurrentOption && this.getCurrentOption(this.selectOption)
				} else if (Math.abs(this.power) < 1) {
					this.tops.forEach((top, i) => {
						if (
							this.disY < -top + scrollItemHeight / 2 &&
							this.disY > -this.tops[i + 1] + scrollItemHeight / 2
						) {
							this.ease(-top)
							this.selectOption = this.selectData[i]
							this.getCurrentOption && this.getCurrentOption(this.selectOption)
						}
					})
				}
			}, 20)
		},

		close() {
			this.visible = false
			this.onclose && this.onclose()
		},

		confirm() {
			this.onselect && this.onselect(this.selectOption)
			this.selectValue = this.selectOption.value
			this.visible = false
		},

		open() {
			// this.selectMask.open()
			this.visible = true
			this.$nextTick(() => {
				const scrollEle = this.$refs.scrollEle
				const scrollItem = this.$refs.scrollItem[0]
				scrollEle.style.top = scrollItem.offsetHeight * 2 + 'px'
				scrollEle.style.height = scrollItem.offsetHeight * 5 + 'px'
				this.positionStyle.top = this.positionStyle.bottom =
					(scrollEle.offsetHeight - scrollItem.offsetHeight) / 2 + 'px'
				this.tops = this.selectData.map((item, i) => {
					if (this.selectValue === item.value) {
						this.disY = scrollEle.dataset['top'] = -scrollItem.offsetHeight * i
						this.selectOption = item
					}
					return scrollItem.offsetHeight * i
				})
			})
		},

		setOption(value) {
			const scrollItem = this.$refs.scrollItem[0]
			const scrollEle = this.$refs.scrollEle
			this.selectData.forEach((item, i) => {
				if (value === item.value) {
					this.ease(-scrollItem.offsetHeight * i)
					// this.disY = scrollEle.dataset['top'] = -scrollItem.offsetHeight * i
				}
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
		}
	},

	computed: {
		selectData() {
			return this.list
		},
		scrollTransform() {
			return {
				transform: 'translate3d(0,' + this.disY + 'px, 0)'
			}
		}
	},
	watch: {
		defaultValue(val, oval) {
			this.selectValue = val
			this.setOption(val)
		}
	}
}
</script>

