export default createClass({
  render: function () {
    const entry = this.props.entry

    // header
    const img = entry.getIn(['data', 'featured_img'])
    const featured_img = this.props.getAsset(img)
    const title = entry.getIn(['data', 'title'])

    return h('div', { className: 'page-default' },
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
            h('section', {}, this.props.widgetFor('body'))
          )
        )
      )
    )
  }
})
