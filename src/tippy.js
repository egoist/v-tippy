import tippy from 'tippy.js'
import assign from 'nano-assign'

const hasBindingChanged = (value, oldValue) => {
  return Object.keys(value).some(key => {
    return value[key] !== oldValue[key]
  })
}

export default (opts = {}) => {
  const init = (el, { value = {}, oldValue = {} }, vnode) => {
    if (!el.getAttribute('title')) {
      el.setAttribute('title', value.title || vnode.data.attrs.title || opts.title)
    }

    if (el.tip) {
      if (hasBindingChanged(value, oldValue)) {
        // Re-initialize the element when binding value changes
        // TODO: find a way to update settings w/o recreate the tippy instance
        el.tip.destroyAll()
        el.tip = tippy(el, {
          ...opts,
          ...value
        })
      } else {
        // Only update content when title changes
        const popper = el.tip.getPopperElement(el)
        el.tip.update(popper)
      }
    } else {
      el.tip = tippy(el, {
        ...opts,
        ...value
      })
    }
  }

  return {
    bind: init,
    componentUpdated: init
  }
}
