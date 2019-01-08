import tippy from 'tippy.js'
// eslint-disable-next-line no-unused-vars
import assign from 'nano-assign'

const hasBindingChanged = (value, oldValue) => {
  return Object.keys(value).some(key => {
    return value[key] !== oldValue[key]
  })
}

export default (opts = {}) => {
  const init = (el, { value = {}, oldValue = {} }) => {
    if (el._tippy) {
      if (hasBindingChanged(value, oldValue)) {
        // Re-initialize the element when binding value changes
        el._tippy.set({
          ...opts,
          ...value
        })
      }
    } else {
      tippy(el, {
        ...opts,
        ...value
      })
    }
  }

  const unbind = el => {
    if (el._tippy) {
      el._tippy.destroy()
    }
  }

  return {
    inserted: init,
    componentUpdated: init,
    unbind
  }
}
