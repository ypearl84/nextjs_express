//const { createServer } = require('http')
const express = require('express');
const next = require('next')
const routes = require('./routes')
const { parse } = require('url')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const port = parseInt(process.env.PORT, 10) || 3000

async function start() {

  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev });
  //const handler = routes.getRequestHandler(app);

  await app.prepare();

  const handle = app.getRequestHandler();
  const server = express();

  server.use('/', express.static(path.resolve(__dirname, '../test2/build')))
  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: true }))

  // parse application/json
  server.use(bodyParser.json())

  server.use(cors());


/*
  server.use(function(req, res, next) {
   // res.header("Access-Control-Allow-Origin", "*");
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.writeHead(200, {'Access-Control-Allow_Origin': '*'});
    next();
  });

  server.get('*', (req, res, next) => {
    if(req.path.split('/')[1]==='static') return next();
    res.sendFile(path.resolve(__dirname, '../test2/build/index.html'));
  });*/

  server.get('/home', async (req, res, next) => {
    try {

      res.redirect('/');

    } catch (e) {
      next(e);
    }
  });

  server.get('/*', async (req, res, next) => {
    try {

      app.render(req, res, '/');

    } catch (e) {
      next(e);
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:`+port);
  });


}

start();

//const handler = routes.getRequestHandler(app)

/*

app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}) */



/*
app.prepare().then(() => {
  createServer((handler) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.

   // console.log(handler);
 //   const parsedUrl = parse(req.url, true)
  //  const { pathname, query } = parsedUrl
   // console.log(req, res, pathname)
  //   app.render(req, res, '/', query)
    /* if (pathname === '/a') {
       app.render(req, res, '/b', query)
     } else if (pathname === '/b') {
       app.render(req, res, '/a', query)
     } else {
       handle(req, res, parsedUrl)
     }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost')
  })
}) */

/*
app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
*/

/* // With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})

// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000)
}) */