<template>
  <img
    :src="src"
    alt
    proxy-src="http://resource.bucket.ahaschool.com/5a449e27aa77c11t7plxzHe.png?imageView2/1/w/315/h/210/interlace/1"
  />
</template>

<script>
export default {
  name: 'VImage',
  props: {
    src: {
      type: String,
      required: true,
      validator(val) {
        if (!/^(http:|https:)/.test(val)) {
          throw TypeError('src is not a url, the val is :' + val)
        }
        return true
      }
    },
    // proxySrc: String,
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {},
  created() {
    // console.info('VImage----created----')
    // console.log(this.src)
    // console.log(this.lazy)
  },
  mounted() {
    // let t = offsetTop(this.$el)
    // console.log(t)
  }
}
// function offsetTop(el) {
//   let top = el.offsetTop
//   let parent = el.offsetParent

//   while (parent) {
//     top += parent.offsetTop
//     parent = parent.offsetParent
//   }

//   return top
// }
</script>
