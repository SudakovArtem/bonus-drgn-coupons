const initPrompt = () => {
  const prompt = document.querySelector('[data-prompt]')

  if (!prompt) {
    return
  }

  setInterval(() => {
    prompt.classList.toggle('is-active')
  }, 5000)
}

export {initPrompt}
