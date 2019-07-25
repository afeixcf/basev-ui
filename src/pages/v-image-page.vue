<template>
	<div>
		<div>v-image 组件</div>
		<div class="h100 of-hidden">
			<v-image :src="src" :proxy-src="defaultUrl" lazy threshold="20"></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src" :proxy-src="defaultUrl" lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src" :proxy-src="defaultUrl" lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src" :proxy-src="defaultUrl" lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src" :proxy-src="defaultUrl" lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src" :proxy-src="defaultUrl" lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src" :proxy-src="defaultUrl"></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image
				:src="src"
				:proxy-src="defaultUrl"
				lazy
				threshold="-200"
			></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src" :proxy-src="defaultUrl" lazy></v-image>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			src:
				'http://resource.bucket.ahaschool.com/5d1de5fc3f03fv9F0KPAXaU.png?imageView2/1/w/120/h/100/interlace/1'
		}
	}
}
</script>
