const body = document.body
const toggleButton = document.querySelector('.toggle-button')
const links = document.querySelectorAll('.link')

const activateDarkMode = () => {
  body.classList.add('body-after-toggle')
  links.forEach(link => link.classList.add('link-after-toggle'))
}
const removeDarkMode = () => {
  body.classList.remove('body-after-toggle')
  links.forEach(link => link.classList.remove('link-after-toggle'))
}
const darkModeSettings = () => {
  const isToggleButtonChecked = toggleButton.checked === true

  if (isToggleButtonChecked) {
    activateDarkMode()
    return
  }

  removeDarkMode()
}

toggleButton.addEventListener('click', darkModeSettings)