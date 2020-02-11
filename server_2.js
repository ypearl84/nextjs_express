//const { createServer } = require('http')
const express = require('express');
const next = require('next')
//const routes = require('./routes')
const { parse } = require('url')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require("./webpack.config")
const compiler = webpack(webpackConfig)


const port = parseInt(process.env.PORT, 10) || 3010

async function start() {

    const dev = process.env.NODE_ENV !== 'production';
    const app = next({ dev });
    //const handler = routes.getRequestHandler(app);

    await app.prepare();
    //await nextRenderService.prepare();

    const handle = app.getRequestHandler();
    const server = express();

   // server.use('/', express.static(path.resolve(__dirname, '../test2/build')))
    /*server.use(
        require("webpack-dev-middleware")(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        })
    );

    server.use(require("webpack-hot-middleware")(compiler));*/

    server.use(express.static("public"))
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

    server.get('/posts/:id', (req, res) => {
        return app.render(req, res, '/posts', { id: req.params.id })
    })

    server.get('/section/:p1?/:p2?', async (req, res, next) => {
        try {
            const queryParams = { p1 : req.params.p1, p2 : req.params.p2  }
            console.log('server to section')
            console.log(queryParams)
            app.render(req, res, '/section', queryParams);

        } catch (e) {
            next(e);
        }
    });

    server.get('/top50', async (req, res, next) => {
        try {
            console.log('server to top50')
            app.render(req, res, '/top50', {p1:'top50test'});

        } catch (e) {
            next(e);
        }
    });

    server.get('/opinion/:p1?', async (req, res, next) => {
        try {
            const queryParams = { p1 : req.params.p1 }
            console.log('server to opinion')
            console.log(queryParams)
            app.render(req, res, '/opinion', queryParams);

        } catch (e) {
            next(e);
        }
    });

    server.get('/livinginfo/:p1?', async (req, res, next) => {
        try {
            const queryParams = { p1 : req.params.p1 }
            console.log('server to livinginfo')
            console.log(queryParams)
            app.render(req, res, '/livinginfo', queryParams);

        } catch (e) {
            next(e);
        }
    });

    server.get('/photonews', async (req, res, next) => {
        try {
            console.log('server to photonews')
            app.render(req, res, '/photonews');

        } catch (e) {
            next(e);
        }
    });

    server.get('/home', async (req, res, next) => {
        try {

            res.redirect('/');

        } catch (e) {
            next(e);
        }
    });

    /*
       server.get('/:page?/:p1?/:p2?', async (req, res, next) => {
            try {

                const queryParams = { page : req.params.page , p1 : req.params.p1, p2 : req.params.p2  }
                console.log('two params')
                console.log(queryParams)
                app.render(req, res, '/', queryParams);

            } catch (e) {
                next(e);
            }
        });


        server.get('/:page/:p1', async (req, res, next) => {
            try {

                const queryParams = { page : req.params.page , p1 : req.params.p1  }
                console.log('one params')
                console.log(queryParams)
                app.render(req, res, '/', queryParams);

            } catch (e) {
                next(e);
            }
        });

        server.get('/:page', async (req, res, next) => {
            try {

                const queryParams = { page : req.params.page}
                console.log('no params')
                console.log(queryParams)
                app.render(req, res, '/', queryParams);

            } catch (e) {
                next(e);
            }
        });*/


    server.get('/', async (req, res, next) => {
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