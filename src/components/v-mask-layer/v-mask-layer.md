# v-mask-layer

遮罩层

# javascript
```
import Vue from 'vue'
import { VMaskLayer } from 'basev-ui'

Vue.use(VMaskLayer)
```

# html
```
<v-mask-layer :onclose="closed" background="rgba(0,0,0,.7)">支持插槽</v-mask-layer>
```

## onclose Function
关闭遮罩层时的回调函数

## convenient
默认false，为true时直接点击遮罩层可以关闭

## background
遮罩层的具体颜色，默认rgba(0,0,0,.5),也可以通过


```
Vue.prototype.MASK_BACKGROUND = ''	
```

优先级 background > MASK_BACKGROUND > 默认的 rgba(0,0,0,.5)
