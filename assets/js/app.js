const body = document.body
const toggleButton = document.querySelector('.toggle-button')
const links = document.querySelectorAll('.link')

const changeElementClass = elementProperties => {
  const { element, oldClass, newClass } = elementProperties

  element.classList.remove(oldClass)
  element.classList.add(newClass)
}
const darkModeLinks = () => {
  links.forEach(link => {
    const linksDarkClass = {
      element: link,
      oldClass: 'link-before-toggle',
      newClass: 'link-after-toggle'
    }
    
    changeElementClass(linksDarkClass)
  })
}
const lightModeLinks = () => {
  links.forEach(link => {
    const linksLightClass = {
      element: link,
      oldClass: 'link-after-toggle',
      newClass: 'link-before-toggle'
    }

    changeElementClass(linksLightClass)
  })
}

const bodyDarkClass = {
  element: body,
  oldClass: 'body-before-toggle',
  newClass: 'body-after-toggle'
}
const bodyLightClass = {
  element: body,
  oldClass: 'body-after-toggle',
  newClass: 'body-before-toggle'
}

const changeBodyBackgroundColor = () => {
  const isToggleButtonChecked = toggleButton.checked === true
  if (isToggleButtonChecked) {
    changeElementClass(bodyDarkClass)    
    darkModeLinks()
    return
  }

  changeElementClass(bodyLightClass)
  lightModeLinks()
}

toggleButton.addEventListener('click', changeBodyBackgroundColor)