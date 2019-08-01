<template>
	<div>
		<p @click="openSelect">普通选择</p>
		<p @click="openTestSelectGroup">多列选择</p>
		<p @click="openSelectGroup">联动选择</p>
		<p @click="openTimeSelector">时间选择</p>

		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<p>231312231</p>
		<!-- <v-mask-layer ref="mask" @click.native="closeSelect">
			<v-select
				ref="select"
				:list="list"
				title="选择城市"
				:onselect="onSelect"
				:onclose="onClose"
				:default-value="selectValue"
				show-close-btn
			></v-select>
		</v-mask-layer> -->

		<v-select-single :list="list" ref="select" :showCloseBtn="hide" :onselect="onSelectSingle"
			:default-value="selectValue"></v-select-single>

		<v-select-group ref="selectGroup" :list="groupList" :default-value="defaultValue" :onselect="onSelect"
			:onclose="onClose">
		</v-select-group>

		<v-select-group ref="testSelectGroup" :list="testList" :default-value="defaultValue"
			:onchange="testSelectChange">
		</v-select-group>

		<v-time-picker ref="timepicker" :onselect="timepickerSelect" default-value="2:00"></v-time-picker>
	</div>
</template>

<style scoped>
p {
	height: 50px;
}
</style>


<script>
export default {
	data() {
		return {
			selectValue: 'shanghai2',
			defaultValue: ['shanghai', 'ja', 'ja3'],
			list: [
				{ label: '上海', value: 'shanghai' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' },
				{ label: '上海2', value: 'shanghai2' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' },
				{ label: '上海3', value: 'shanghai3' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' },
				{ label: '上海', value: 'shanghai' },
				{ label: '北京', value: 'beijing' },
				{ label: '广州', value: 'guangzhou' },
				{ label: '深圳', value: 'shenzhen' },
				{ label: '重庆', value: 'chongqing' },
				{ label: '江苏', value: 'jiangsu' },
				{ label: '山东', value: 'shandong' }
			],
			groupList: [
				[
					{
						label: '上海',
						value: 'shanghai',
						optionList: [
							{
								label: '黄浦区',
								value: 'hp',
								optionList: [
									{
										label: '黄浦区1',
										value: 'hp1'
									},
									{
										label: '黄浦区2',
										value: 'hp2'
									},
									{
										label: '黄浦区3',
										value: 'hp3'
									}
								]
							},
							{
								label: '浦东新区',
								value: 'pd',
								optionList: [
									{
										label: '浦东新区1',
										value: 'pd1'
									},
									{
										label: '浦东新区2',
										value: 'pd2'
									},
									{
										label: '浦东新区3',
										value: 'pd3'
									}
								]
							},
							{
								label: '静安区',
								value: 'ja',
								optionList: [
									{
										label: '静安区1',
										value: 'ja1'
									},
									{
										label: '静安区2',
										value: 'ja2'
									},
									{
										label: '静安区3',
										value: 'ja3'
									}
								]
							}
						]
					},
					{
						label: '北京',
						value: 'beijing',
						optionList: [
							{
								label: '朝阳区',
								value: 'cy',
								optionList: [
									{
										label: '朝阳区',
										value: 'cy'
									}
								]
							},
							{
								label: '东城区',
								value: 'dc',
								optionList: [
									{
										label: '东城区',
										value: 'dc'
									}
								]
							},
							{
								label: '西城区',
								value: 'xc',
								optionList: [
									{
										label: '西城区',
										value: 'xc'
									}
								]
							}
						]
					}
				]
			],
			testList: [
				[
					{
						label: '上海',
						value: 'shanghai'
					},
					{
						label: '北京',
						value: 'beijing'
					}
				],
				[
					{
						label: '黄浦区',
						value: 'hp'
					},
					{
						label: '浦东新区',
						value: 'pd'
					},
					{
						label: '静安区',
						value: 'ja'
					}
				],
				[
					{
						label: '静安区1',
						value: 'ja1'
					},
					{
						label: '静安区2',
						value: 'ja2'
					},
					{
						label: '静安区3',
						value: 'ja3'
					}
				]
			],
			hide: false
		}
	},
	mounted() {
		this.groupList.push(this.groupList[0][0].optionList)
		this.groupList.push(this.groupList[0][0].optionList[0].optionList)
	},
	methods: {
		testSelectChange(option, resetListPosition) {
			this.$set(this.testList, 2, [
				{
					label: '123',
					value: '1234'
				}
			])
			resetListPosition(2)
		},
		onSelectSingle(option) {
			console.log(option)
		},
		onCloseSingle() {
			console.log('close')
		},
		onSelect(options) {
			options.forEach((option, i) => {
				this.$set(this.defaultValue, i, option.value)
			})
		},
		onClose() {
			console.log('close')
		},
		openSelect() {
			// this.$refs.mask.open()
			this.$refs.select.open()
			// setTimeout(()=>{
			// 	this.selectValue = 'shanghai'
			// },1000)
		},
		closeSelect() {
			this.$refs.select.close()
			// this.$refs.mask.close()
		},

		openSelectGroup() {
			this.$refs.selectGroup.open()
		},

		openTestSelectGroup() {
			this.$refs.testSelectGroup.open()
		},

		openTimeSelector() {
			this.$refs.timepicker.open()
		},
		timepickerSelect(time) {
			console.log(time)
		}
	}
}
</script>

