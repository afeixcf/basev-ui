import component1 from './component1'
import component2 from './component2'
import VImage from './v-image'
import VMaskLayer from './v-mask-layer'
import VCol from './v-col'
import VRow from './v-row'
import VSelect from './v-select'
import VScrollLoad from './v-scroll-load'
import VPullRefresh from './v-pull-refresh'
import VToast from './v-toastr'
import VTooltip from './v-tooltip'

const components = {
  install,
  component1,
  component2,
  VImage,
  VMaskLayer,
  VCol,
  VRow,
  VSelect,
  VScrollLoad,
  VPullRefresh,
  VToast,
  VTooltip
}

function install(Vue) {
  for (let key in components) {
    if (key === 'install') continue

    components[key].install(Vue)
  }
}

export default components
