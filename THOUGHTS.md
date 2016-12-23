## ideas

`lander dev --port 3000` - builds `lander.config.js` and runs the server
`lander deploy` - builds with --prod flag and pushes to gh-pages


#issues
- Webpack's regexs' currently wont work with windows
- Need good way to document hbs templates
- How to handle async actions in lander.conf.js?
- cli can't make use of webpack require goodies
- need to specifically name stylesheets `_variables` and `index.scss` otherwise don't no how to order them.
- docs integration
- multiple pages
- when elements have script deps?
- we should hide all configurations that the user doesn't touch
- link prefix is trouble - github pages usually requires it unless it's a custom domain.

#ideas
- use react for templates?
- compile to memeory and then use metalsmith as a plugin https://webpack.github.io/docs/node.js-api.html#compile-to-memory