const body = document.body
const toggleButton = document.querySelector('.toggle-button')
const elementsWithLink = document.querySelectorAll('.link')

const changeBodyBackgroundColor = () => {
  if (toggleButton.checked === true) {
    body.classList.remove('body-before-toggle')
    body.classList.add('body-after-toggle')
    elementsWithLink.forEach(element => {
      element.classList.remove('link-before-toggle')
      element.classList.add('link-after-toggle')
    })
    return
  }

  body.classList.remove('body-after-toggle')
  body.classList.add('body-before-toggle')
  elementsWithLink.forEach(element => {
    element.classList.remove('link-after-toggle')
    element.classList.add('link-before-toggle')
  })
}

toggleButton.addEventListener('click', changeBodyBackgroundColor)