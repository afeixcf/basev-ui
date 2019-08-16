<template>
	<v-select-group ref="datePicker" :list="list" :default-value="values" :onclose="close" :onchange="change"
		:onselect="confirm" :convenient="convenient"></v-select-group>
</template>

<script>
export default {
	name: 'VDatePicker',
	props: {
		years: Array,
		months: Array,
		date: Array,
		minYear: [String, Number],
		maxYear: [String, Number],
		minMonth: [String, Number],
		maxMonth: [String, Number],
		minDate: [String, Number],
		maxDate: [String, Number],
		defaultValue: {
			type: String,
			default() {
				return '1901/01/01'
			}
        },
        convenient: Boolean,
        onselect: Function,
        onclose: Function,
        onchange: Function
	},
	data() {
		return {
            datePicker: null,
            origin: [],
            values: this.defaultValue.split(/-|\//).map(val => parseInt(val))
		}
	},
	computed: {
		list() {
			let years = this.years || this.getPickerYears()
			let months = this.months || this.getPickerMonths()
			let date = this.date || this.getPickerDate()

			return [years, months, date]
		}
	},
	methods: {
		open() {
            this.origin = JSON.parse(JSON.stringify(this.values))
			this.datePicker.open()
		},
		close() {
            this.onclose && this.onclose()
            this.values = JSON.parse(JSON.stringify(this.origin))
		},
		change(option, resetListPosition, options) {
			if (option.type === 'year') {
				this.$set(this.values, 0, option.value)
			} else if (option.type === 'month') {
				this.$set(this.values, 1, option.value)
				const year = this.values[0]
                const month = this.values[1]
				this.$set(
					this.list,
					2,
					this.getPickerDate(this.minDate, new Date(year, month, 0).getDate())
                )
			} else if (option.type === 'date') {
				this.$set(this.values, 2, option.value)
            }

            this.onchange && this.onchange(this.values)
        },
        confirm(options) {
            this.onselect && this.onselect(options.map(option => option.value))
        },

		getPickerYears(min, max) {
			const maxYear = max || this.maxYear || new Date().getFullYear()
			const minYear = min || this.minYear || 1901

			return this.getRangeArray(minYear, maxYear).map(year => {
				return { label: year + '年', value: year, type: 'year' }
			})
		},
		getPickerMonths(min, max) {
			const maxMonth = max || this.maxMonth || 12
			const minMonth = min || this.minMonth || 1

			return this.getRangeArray(minMonth, maxMonth).map(month => {
				return { label: month + '月', value: month, type: 'month' }
			})
		},
		getPickerDate(min, max) {
            const minDate = min || this.minDate || 1
            const maxDate = max || this.maxDate || 31
			return this.getRangeArray(minDate, maxDate).map(date => {
				return { label: date + '日', value: date, type: 'date' }
			})
		},

		getRangeArray(min, max) {
			let arr = []

			for (let i = min; i <= max; i++) {
				arr.push(i)
			}

			return arr
		}
	},
	mounted() {
        this.datePicker = this.$refs.datePicker
	}
}
</script>

