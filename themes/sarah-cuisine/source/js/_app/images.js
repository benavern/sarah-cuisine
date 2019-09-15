import mediumZoom from 'medium-zoom'

const recetteImageSelector = '#page-recette p > img'
const options = {
  margin: 90,
  background: 'rgba(255, 255, 255, 0.9)'
}

export default function() {
  mediumZoom(recetteImageSelector, options)
}
