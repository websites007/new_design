const burgerBar = document.querySelector('.burger'),
      navBar = document.querySelector('.navbar')

burgerBar.addEventListener('click', () => {
    navBar.classList.toggle('active')
})