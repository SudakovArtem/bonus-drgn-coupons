import {modals} from './modals/init-modals.js'

const initWheel = () => {
  const element = document.querySelector('[data-wheel="element"]')
  const buttons = document.querySelectorAll('[data-wheel="button"]')

  if (!element) {
    return
  }

  buttons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault()
      if (element.getAttribute('data-spin') === 'first') {
        element.setAttribute('data-spin', 'second')
        modals.close('spin')
        element.addEventListener('animationend', () => {
          modals.open('success')
        }, {once: true})
        return
      }
      element.setAttribute('data-spin', 'first')
      element.addEventListener('animationend', () => {
        modals.open('spin')
      }, {once: true})
    })
  })
}

export {initWheel}
