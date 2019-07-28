<template>
	<div>
		<form action="" @submit="search">
			<v-row class="h50 v-search-bar-row" :style="style">
				<v-col class="view-v-center pl10 v-search-back-icon-wrap">
					<img
						:src="backIcon"
						alt=""
						class="v-search-back-icon"
						@click="goback"
					/>
				</v-col>
				<v-col class="view-v-center h50 flex-1 v-search-input-wrap relative">
					<input
						type="search"
						class="v-search-input"
						:placeholder="placeholder"
						autofocus
						autocomplete="off"
						v-model="value"
					/>

					<div class="v-search-list">
						<div
							v-for="(item, i) in list"
							:key="i"
							class="v-search-list-item"
							@click="select(item)"
						>
							{{ item.label }}
						</div>
					</div>
				</v-col>
				<v-col class="view-v-center h50 v-search-text" @click.native="search">
					搜索
				</v-col>
			</v-row>
			<slot name="search-content"></slot>
		</form>
	</div>
</template>

<script>
import { debounce } from '../../util'

export default {
	name: 'VSearch',
	data() {
		return {
			value: '',
			list: []
		}
	},
	computed: {
		style() {
			return {
				background: this.bgColor
			}
		}
	},
	props: {
		bgColor: {
			type: String,
			default: 'rgba(0, 0, 0, .7)'
		},
		backIcon: {
			type: String,
			default: require('./back.png')
		},
		autoComplete: {
			type: Boolean,
			default: false
		},
		placeholder: String,
		getKeywords: Function,
		onSearch: Function,
		timeOut: {
			type: [String, Number],
			default: 300
		}
	},
	methods: {
		goback() {
			history.go(-1)
		},
		search() {
			this.onSearch(this.value)
		},
		select(item) {
			this.unwatchValue()
			this.value = item.label
			this.watchValue()
			this.list = []
		},
		_getKeywords() {
			this.getKeywords(this.value, list => {
				this.list = list
			})
		},
		keyup() {
			console.log('keyup')
		},
		change() {
			console.log('change')
		},
		watchValue() {
			this.unwatchValue = this.$watch('value', function() {
				debounce(this._getKeywords, parseInt(this.timeOut), this)
			})
		}
	},
	mounted() {
		this.watchValue()
	},
	beforeDestroy() {}
}
</script>

