const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
.add('channel', '/:slug.:id', 'channel')
.add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')