import recettePreviewTemplate from './_admin/recette-preview'
import pagePreviewTemplate from './_admin/page-preview'

// styles
CMS.registerPreviewStyle('/css/style.css')
CMS.registerPreviewStyle('https://fonts.googleapis.com/css?family=Amatic+SC|Fredericka+the+Great|Josefin+Slab')

// templates
CMS.registerPreviewTemplate('posts', recettePreviewTemplate)
CMS.registerPreviewTemplate('about', pagePreviewTemplate)
CMS.registerPreviewTemplate('contact', pagePreviewTemplate)
CMS.registerPreviewTemplate('contact-success', pagePreviewTemplate)
