const ScrollTop = document.getElementById('scroll__top');


ScrollTop.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  },15)
})