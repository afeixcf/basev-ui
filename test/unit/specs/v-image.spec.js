import Vue from 'vue'
import VImage from '@/components/v-image'

describe('VImage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(VImage)
    const vm = new Constructor().$mount()
    expect(vm.a).to.equal(234)
  })
})
