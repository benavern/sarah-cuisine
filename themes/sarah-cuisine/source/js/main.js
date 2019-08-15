function greatings () {
  console.log('Bienvenue sur "Sarah cuisine"!')
}

function handleResponsiveMenu () {
  const $navToggle = document.querySelector('.site-header .nav-toggle')
  const $nav = document.querySelector('.site-header nav')

  $navToggle.addEventListener('click', function (e) {
    e.preventDefault()
    $navToggle.classList.toggle('nav-visible')
    $nav.classList.toggle('visible')
  })

  $nav.addEventListener('click', function() {
    $navToggle.classList.remove('nav-visible')
    $nav.classList.remove('visible')
  })
}

(function() {
  greatings()
  handleResponsiveMenu()
})()
