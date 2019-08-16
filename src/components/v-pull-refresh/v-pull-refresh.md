# v-pull-refresh

下拉刷新组件

# javascript
```
import Vue from 'vue'
import { VPullRefresh } from 'basev-ui'

Vue.use(VPullRefresh)
```

# html
```
<v-pull-refresh :on-refresh="onRefresh" distance="70">
	<template v-slot:pull>
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
	</template>
</v-pull-refresh>
```

## distance [Number, String]
下拉多少距离后可以触发刷新

## onRefresh({success, fail})
触发刷新后，一般自行调用http请求，异步结束后，通知组件是否成功

## loadingIcon String
未使用v-slot:loading时生效，是一个图片url，默认自动旋转动画，可以通过修改类的属性来控制动画

## arrowIcon
未使用v-slot:pull时生效，是一个图片url，提示用户继续下拉才后才更新

