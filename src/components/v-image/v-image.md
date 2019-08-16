# v-image

基础图片

```
import Vue from 'vue'
import { VImage } from 'basev-ui'

Vue.use(VImage)

<v-image :src="src" lazy threshold="20"></v-image>
```


## src String
真实图片地址，格式必须以 https: http: data: 开头，不然视为无效的地址不会渲染img标签


## lazy Boolean
图片是否需要懒加载


## proxySrc String
不需要加载真实图片前显示的图片，默认是一张灰色的图片，同时可以全局定义IMAGE_PROXY_SRC参数


```

Vue.prototype.IMAGE_PROXY_SRC = ''	


```

优先级 proxySrc > IMAGE__PROXY__SRC > 默认灰色图


## containerCls String
懒加载时检测的滚动容器类名，默认document


## threshold Number
加载真实图片的具体位置, 距离底部多少距离时开始加载真实图片
