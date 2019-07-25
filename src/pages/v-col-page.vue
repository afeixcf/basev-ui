<template>
	<div class="plr26">
		<div class="mt30">span=4, span=4, span=4</div>
		<v-row class="h100">
			<v-col :span="4" class="h50">1234</v-col>
			<v-col :span="4" class="h50"></v-col>
			<v-col :span="4" class="h50"></v-col>
		</v-row>

		<div class="mt30">span=12</div>
		<v-row class="h100">
			<v-col :span="12" class="h50">1234</v-col>
		</v-row>

		<div class="mt30">span=3, span=4, span=3</div>
		<v-row class="h100">
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="4" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
		</v-row>

		<div class="mt30">span=3, span=3, span=3, span=3</div>
		<v-row class="h100">
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
		</v-row>

		<div class="mt30">justyify-content: center; align-items: center;</div>
		<v-row justify="center" align="center" class="h100">
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
		</v-row>

		<div class="mt30">
			justyify-content: space-evenly; align-items: flex-start;
		</div>
		<v-row justify="space-evenly" align="flex-start" class="h100">
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
		</v-row>

		<div class="mt30">justyify-content: space-around; align-items: center;</div>
		<v-row justify="space-around" align="center" class="h100">
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
		</v-row>

		<div class="mt30">
			justyify-content: space-between; align-items: flex-end;
		</div>
		<v-row justify="space-between" align="flex-end" class="h100">
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
		</v-row>

		<div class="mt30">justyify-content: flex-start; align-items: center;</div>
		<v-row justify="flex-start" align="center" class="h100">
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
		</v-row>

		<div class="mt30">justyify-content: flex-end; align-items: center;</div>
		<v-row justify="flex-end" align="center" class="h100">
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
			<v-col :span="3" class="h50"></v-col>
		</v-row>

		<div class="h50"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style>
.v-row.h100 {
	border: 1px solid #eee;
}
.v-row.h100 div {
	background: #eee;
	border: 1px solid white;
}
</style>


