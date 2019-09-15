export default createClass({
  render: function () {
    const entry = this.props.entry

    // header
    const img = entry.getIn(['data', 'featured_img'])
    const featured_img = this.props.getAsset(img) || ''
    const title = entry.getIn(['data', 'title'])

    // recette details
    const category = entry.getIn(['data', 'categories'])
    const tags = entry.getIn(['data', 'tags']) || []
    const nb_persons = entry.getIn(['data', 'nb_persons'])
    const difficulty = entry.getIn(['data', 'difficulty'])
    const ingredients = entry.getIn(['data', 'ingredients']) || []

    return h('div', { className: 'page-recette' },
      // enleve le blanc en haut de la preview
      h('style', {}, 'body {padding: 0;}'),

      // header de la page
      h('div', { className: 'page-header', style: { backgroundImage: `url(${featured_img.toString()})` } },
        h('div', {className: 'container'},
          h('h1', {}, title)
        )
      ),

      // contenu de la page
      h('div', { className: 'page-content' },

        h('div', { className: 'content-wrapper' },

          // contenu de la recette
          h('main', {},
            h('article', { className: 'recette-content' }, this.props.widgetFor('body'))
          ),

          // details de la recette
          h('aside', { className: 'recette-details' },
            h('div', { className: 'aside-content' },
              h('div', { className: 'card' },
                // categorie & étiquettes
                h('div', { className: 'card-item card-html' },
                  h('h4', {}, category),
                  h('p', {},
                    tags.map(tag => h('a', { className: 'badge-link' }, tag))
                  )
                ),
                // nb personnes
                h('div', { className: 'card-item card-text center' },
                  h('h5', {}, `Pour ${nb_persons} personnes`)
                ),
                // difficulté
                h('div', { className: 'card-item card-html' },
                  h('h5', {}, 'Difficulté :'),
                  h('div', { className: 'stars' },
                    Array(5).fill('x').map((x, i) => {
                      if (difficulty > i) return h('span', { className: 'star' }, '★')
                      return h('span', { className: 'star' }, '☆')
                    })
                  )
                ),
                // ingrédients
                h('div', { className: 'card-item card-html' },
                  h('h3', {}, 'Ingrédients :'),
                  ingredients.map(ingredient => h('div', { className: 'ingredients-item' },
                    h('input', { type: 'checkbox' }),
                    ' ' + ingredient
                  ))
                )
              )
            )
          )
        )
      )
    )
  }
})
