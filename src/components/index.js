import component1 from './component1'
import component2 from './component2'
import VImage from './v-image'
import VMaskLayer from './v-mask-layer'
import VCol from './v-col'
import VRow from './v-row'
import VSelect from './v-select'
import VSelectSingle from './v-select-single'
import VSelectGroup from './v-select-group'
import VScrollLoad from './v-scroll-load'
import VPullRefresh from './v-pull-refresh'
import VToast from './v-toastr'
import VTooltip from './v-tooltip'
import VSearch from './v-search'
import VTimePicker from './v-time-picker'
import VDatePicker from './v-date-picker'

const components = {
  install,
  component1,
  component2,
  VImage,
  VMaskLayer,
  VCol,
  VRow,
  VSelect,
  VSelectSingle,
  VSelectGroup,
  VScrollLoad,
  VPullRefresh,
  VToast,
  VTooltip,
  VSearch,
  VTimePicker,
  VDatePicker
}

function install(Vue) {
  for (let key in components) {
    if (key === 'install') continue

    components[key].install(Vue)
  }
}

export default components
