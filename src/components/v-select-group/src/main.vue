<template>
	<v-mask-layer ref="___select___group">
		<transition name="fadeup" appear>
			<div class="v-select-group-container" v-show="visible">
				<v-row class="plr10" :style="headerStyle" v-show="(title || showCloseBtn)">
					<v-col class="h50 lh50" @click.native="close">
						<span v-if="showCloseBtn">取消</span>
					</v-col>

					<v-col class="flex-1 txt-center h50 lh50">
						<span v-if="title">{{ title }}</span>
					</v-col>

					<v-col class="txt-right h50 lh50" @click.native="confirm">
						<span v-if="showCloseBtn">完成</span>
					</v-col>
				</v-row>

				<v-row>
					<v-select ref="___select_item" v-for="(item, i) in selectData" :key="i" :list="item"
						:default-value="selectValue[i]" effect="" :get-current-option="getCurrentOption"></v-select>
				</v-row>
			</div>
		</transition>
	</v-mask-layer>
</template>

<script>
export default {
	name: 'VSelectGroup',
	data() {
		return {
			headerStyle: {
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				background: 'white'
			},
			selectGroupMask: null,
			timestamp: new Date().getTime(),
			comps: [],
			selectValue:
				JSON.parse(JSON.stringify(this.defaultValue)) ||
				this.list.map(group => group[0].value),
			values: [],
			selectOptions: [],
			visible: false
		}
	},
	props: {
		list: Array,
		defaultValue: Array,
		onselect: Function,
		onclose: Function,
		onchange: Function,
		title: String,
		showCloseBtn: {
			type: Boolean,
			default: true
		}
	},
	created() {},
	mounted() {
		this.selectGroupMask = this.$refs.___select___group
		this.comps = this.$refs.___select_item
		// this.comps = this.$refs['select_' + this.timestamp]
	},
	methods: {
		toggleheader() {
			this.visible = !this.visible
		},
		open() {
			this.visible = true
			this.values = JSON.parse(JSON.stringify(this.selectValue))
			// this.values = this.selectValue
			this.selectData.forEach((group, i) => {
				group.forEach((option, j) => {
					if (option.value === this.selectValue[i]) {
						this.setList(option)
					}
				})
			})

			// this.$nextTick(() => {
			this.selectGroupMask.open()
			this.comps.forEach((item, i) => {
				item.open()
			})
			this.$nextTick(() => {
				this.headerStyle.bottom = this.comps[0].$el.offsetHeight + 'px'
			})

			this.setSelectOptions()
			// })
		},
		close() {
			this.visible = false
			this.selectGroupMask.close()
			this.onclose && this.onclose()
			setTimeout(() => {
				this.selectValue = JSON.parse(JSON.stringify(this.values))
				// this.selectValue = this.values
			}, 100)
		},
		confirm() {
			this.onselect && this.onselect(this.selectOptions)
			this.visible = false
			this.selectGroupMask.close()
		},
		getCurrentOption(option) {
			this.onchange && this.onchange(option, this.resetListPosition)
			this.setList(option)

			let flag = false
			this.selectData.forEach((group, i) => {
				if (flag) this.resetListPosition(i)
				if (
					group.indexOf(option) > -1 &&
					option.value !== this.selectValue[i]
				) {
					this.$set(this.selectValue, i, option.value)
					option.optionList && (flag = true)
				}

				// group.forEach((option, j) => {
				// 	if (option.value === this.selectValue[i]) {
				// 		this.$set(this.selectOptions, i, option)
				// 	}
				// })
			})

			this.setSelectOptions()
		},

		setSelectOptions() {
			this.selectData.forEach((group, i)=>{
				group.forEach(option=>{
					if (option.value === this.selectValue[i]) {
						this.$set(this.selectOptions, i, option)
					}
				})
			})
		},

		resetListPosition(i) {
			this.$set(this.selectValue, i, this.selectData[i][0].value)
		},

		setList(option) {
			const _fn = (list, option) => {
				list.forEach((group, i) => {
					if (option.optionList && group.indexOf(option) > -1) {
						this.$set(list, i + 1, option.optionList)
						_fn(list, option.optionList[0])
					}
				})
			}
			option.optionList && _fn(this.selectData, option)
		}
	},

	computed: {
		selectData() {
			return this.list
		}
	}
}
</script>

