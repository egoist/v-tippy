import tippy from './tippy'

export default (Vue, opts) => {
  Vue.directive('tippy', tippy(opts))
}
