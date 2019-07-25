<template>
	<div class="v-select-container">
		<v-row class="plr10">
			<v-col span="3" class="h50 lh50">取消</v-col>
			<v-col span="6" class="txt-center h50 lh50">{{ title }}</v-col>
			<v-col span="3" class="txt-right h50 lh50">完成</v-col>
		</v-row>
		<div class="v-touch-container of-hidden">
			<div
				ref="scrollEle"
				class="v-touch-content"
				v-for="(item, i) in selectData"
				:key="i"
				data-top="0"
				@touchstart="startMove($event)"
				@touchmove.passive="moving($event, item)"
			>
                <div class="h50 txt-center lh50"></div>
                <div class="h50 txt-center lh50"></div>
				<div
					v-for="(option, j) in item.options"
					:key="j"
					class="h50 txt-center lh50"
                    @click="select(option, j)"
				>
					{{ option.label }}
				</div>
                <div class="h50 txt-center lh50"></div>
                <div class="h50 txt-center lh50"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VSelect',
	data() {
		return {
			title: '选择城市',
			startY: 0,
			endY: 0,
			disY: 0
		}
	},
	props: {
		list: {
			required: true,
			type: Array
		}
	},
	mounted() {},
	methods: {
		startMove(e) {
			let scrollEle = this.$refs.scrollEle[0]
			let top = parseFloat(scrollEle.dataset['top'])
			this.startY = e.touches[0].pageY - top
			console.log(this.startY)
		},
		moving(e, item) {
			let scrollEle = this.$refs.scrollEle[0]
			this.endY = e.changedTouches[0].pageY
            this.disY = scrollEle.dataset['top'] = this.endY - this.startY
            console.log(this.disY);
			scrollEle.style.transform = 'translate3d(0,' + this.disY + 'px, 0)'
			scrollEle.style.webkitTransform = 'translate3d(0,' + this.disY + 'px, 0)'
		}
	},

	computed: {
		style() {
			return {
				top: this.disY + 'px'
			}
		},
		selectData() {
			let temp = []
			if (this.list.length && !(this.list[0] instanceof Array)) {
				temp = [this.list]
			} else {
				temp = this.list
			}

			return temp.map(labels => {
				return {
					value: '',
					label: '',
					disY: 0,
					span: parseInt(12 / temp.length),
					options: labels
				}
			})
		}
	}
}
</script>

