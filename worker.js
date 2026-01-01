const app = require('./app.js')
const serveNcmApi = require('./server.js').serveNcmApi

export default {
  async fetch(request, env, ctx) {
    app.start()
    return new Response(serveNcmApi.use(request, env, ctx))
  },
}
