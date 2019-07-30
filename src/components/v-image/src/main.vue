<template>
	<img :src="imgUrl" alt />
</template>

<script>
import lazyload from 'baselazyload'

export default {
	name: 'VImage',
	props: {
		src: {
			type: String,
			required: true,
			validator(val) {
				return /^(data:|http:|https:)/.test(val)
			}
		},
		proxySrc: {
			type: String,
			default() {
				return this.IMAGE_PROXY_SRC || require('./gray_block.png')
			}
		},
		lazy: {
			type: Boolean,
			default: false
		},
		threshold: {
			type: [Number, String],
			default: 0
		},
		containerCls: String,
		effect: String
	},
	data() {
		return {
			destroy: function() {}
		}
	},
	computed: {
		imgUrl() {
			if (this.lazy) {
				return this.proxySrc
			}
			return this.src
		}
	},
	methods: {},
	created() {
		console.info('VImage----created----')
	},
	mounted() {
		console.info('VImage----mounted----')
		if (this.lazy) {
			this.destroy = lazyload({
				container: this.containerCls
					? document.querySelector('.' + this.containerCls)
					: document,
				el: this.$el,
				src: this.src,
				defaultSrc: this.proxySrc,
				threshold: parseInt(this.threshold),
				effect: (this.effect || '').toLowerCase()
			}).destroy
		}
	},
	beforeDestroy() {
		this.destroy()
	}
}
</script>
