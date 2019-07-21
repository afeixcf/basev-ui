<template>
  <div>
    <div>p-v-image 组件</div>
    <v-image :src="src" lazy></v-image>
    <div class="home-course-img flex view-center of-hidden">
      <img
        src="http://resource.bucket.ahaschool.com/5d1de5fc3f03fv9F0KPAXaU.png?imageView2/1/w/120/h/100/interlace/1
        "
        alt
      />
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
