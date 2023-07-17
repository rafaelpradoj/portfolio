const buttonUp = document.querySelector('.btn-voltar-topo')

const goUpPage = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
const showButtonUp = () => {
  const pageHeight = document.documentElement.scrollHeight
  const windowHeight = window.innerHeight;
  const scrollPosition = window.offsetY || document.documentElement.scrollTop || document.body.scrollTop
  const isInMiddleOrEndOfPage = scrollPosition > windowHeight / 2 && scrollPosition < pageHeight - windowHeight

  if (isInMiddleOrEndOfPage) {
    // Está no meio ou no fim da página
    buttonUp.style.display = 'block';
  } else {
    // Está no início ou no fim da página
    buttonUp.style.display = 'none';
  }
}

buttonUp.addEventListener('click', goUpPage)
window.addEventListener('scroll', showButtonUp)