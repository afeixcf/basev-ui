import component1 from './component1'
import component2 from './component2'
import VImage from './v-image'

const components = [component1, component2, VImage]

function install(Vue) {
  components.forEach(component => {
    console.info('install----all----')
    Vue.component(component.name, component)
  })
}

export default {
  install,
  component1,
  component2,
  VImage
}
