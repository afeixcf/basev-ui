# v-date-picker

日期选择器

```
import Vue from 'vue'
import { VDatePicker } from 'basev-ui'

Vue.use(VDatePicker)

<v-date-picker ref="datepicker" :onselect="datePickerSelect" convenient :onclose="closeDatePicker"
    :onchange="changeDatePicker">
</v-date-picker>
```

## onselect(date)
选择日期并确认的回调函数,date是选中的日期，返回的是数组格式,例：[1995,2,1]

## onclose()
取消选择的回调函数

## onchange(date)
每次更改日期的回调函数,date是更改的日期

## convenient Boolean
点击背景是否可以关闭日期选择器，同样也会触发onclose

