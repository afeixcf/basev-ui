<template>
	<div>
		<v-pull-refresh :on-refresh="onRefresh" distance="70">
			<!-- <template v-slot:pull>
				请继续下拉
			</template>
			<template v-slot:beforeLoad>
				松开以触发更新
			</template>
			<template v-slot:loading>
				更新中
			</template>
			<template v-slot:loadSuccess>
				更新成功
			</template>
			<template v-slot:loadFail>
				更新失败
			</template> -->
		</v-pull-refresh>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<div class="h60">asdasdas</div>
		<!-- <div class="h100 of-hidden">
			<v-image :src="src"  lazy threshold="20"></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src"  lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src"  lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src"  lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src"  lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src"  lazy></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src" ></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image
				:src="src"
				
				lazy
				threshold="-200"
			></v-image>
		</div>
		<div class="h100 mt50 of-hidden">
			<v-image :src="src"  lazy></v-image>
		</div> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			src:
				'http://resource.bucket.ahaschool.com/5d1de5fc3f03fv9F0KPAXaU.png?imageView2/1/w/120/h/100/interlace/1'
		}
	},
	methods: {
		onRefresh({ success, fail }) {
			setTimeout(fail, 1000)
		}
	},
	mounted() {}
}
</script>

