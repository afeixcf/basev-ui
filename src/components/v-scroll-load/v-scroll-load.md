# v-scroll-load

滚动加载组件

# javascript
```
import Vue from 'vue'
import { VScrollLoad } from 'basev-ui'

Vue.use(VScrollLoad)
```

# html
```
<v-scroll-load :load-more="loadMore">
	<template v-slot:loading-html>
		正在加载中。。。
	</template>
	<template v-slot:loaded-html>
		加载已完成
	</template>
</v-scroll-load>
```


## loadMore(unlock, finish)
触发加载更多的回调函数，处罚时组件会自动禁用监听，unlock可以告诉组件我这里已经加载更多完成，可以继续触发监听，finish可以告诉组件已经加载完所有数据了，以便组件显示加载已完成


