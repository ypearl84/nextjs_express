//const { createServer } = require('http')
const express = require('express');
const next = require('next')
const routes = require('./routes')
const { parse } = require('url')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const port = parseInt(process.env.PORT, 10) || 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(
    () => {

      const server = express()

      server.use('/', express.static(path.resolve(__dirname, '../test2/build')))
      // parse application/x-www-form-urlencoded
      server.use(bodyParser.urlencoded({ extended: true }))

      // parse application/json
      server.use(bodyParser.json())

      server.use(cors());

      server.get('/top50', (req, res)=> {
        const actualPage = '/top50'
        const queryParams = { status : 'main' }

        app.render(req, res, actualPage, queryParams)
      })

      server.get('*', (req, res) => {
        return handle(req, res)
      })

      server.listen(3000, (err) => {
        if(err) throw err
        console.log('>ready on http://localhost:3000')
      })
    })
    .catch((ex) => {
      console.err(ex.stack)
      process.exit(1)
    })
