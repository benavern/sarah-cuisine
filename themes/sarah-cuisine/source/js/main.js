import greatings from './_app/greatings'
import handleResponsiveMenu from './_app/menu'
import handleImages from './_app/images'
import registerServiceWorker from './_app/service-worker'

document.addEventListener("DOMContentLoaded", function() {
  greatings()
  handleResponsiveMenu()
  handleImages()
  registerServiceWorker()
})

