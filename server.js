//const { createServer } = require('http')
const express = require('express');
const next = require('next')
//const routes = require('./routes')
const { parse } = require('url')
const cors = require('cors')
const bodyParser = require('body-parser')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require("./webpack.config")
const compiler = webpack(webpackConfig)


const port = parseInt(process.env.PORT, 10) || 3000


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler()

app.prepare().then(() => {

    const server = express()

    server.use(cors())

    server.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));

    server.all('/', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
       // res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });


    server.get('/home', async (req, res) => {
        try {

            res.redirect('/');

        } catch (e) {
            next(e);
        }
    });
/*
    server.get('/top50', (req, res) => {
        return app.render(req, res, '/top50', req.query)
    })

    server.get('/photonews', (req, res) => {
        return app.render(req, res, '/photonews', req.query)
    })

    server.get('/opinion/:p1?/:p2?', (req, res) => {

        const queryParams =  Object.assign({}, req.params, req.query);
        console.log(queryParams)
        return app.render(req, res, '/opinion', queryParams)
    })

    server.get('/section/:p1?/:p2?', (req, res) => {

        const queryParams =  Object.assign({}, req.params, req.query);
        console.log(queryParams)
        return app.render(req, res, '/section', queryParams)
    })

    server.get('/livinginfo/:p1?/:p2?', (req, res) => {

        const queryParams =  Object.assign({}, req.params, req.query);
        console.log(queryParams)
        return app.render(req, res, '/livinginfo', queryParams)
    })*/

    server.get('/top50', (req, res) => {
        return app.render(req, res, '/', req.query)
    })

    server.get('/photonews', (req, res) => {
        return app.render(req, res, '/', req.query)
    })

    server.get('/opinion/:p1?/:p2?', (req, res) => {

        const queryParams =  Object.assign({}, req.params, req.query);
        console.log(queryParams)
        return app.render(req, res, '/', queryParams)
    })

    server.get('/section/:p1?/:p2?', (req, res) => {

        const queryParams =  Object.assign({}, req.params, req.query);
        console.log(queryParams)
        return app.render(req, res, '/', queryParams)
    })

    server.get('/article/:p1?/:p2?', (req, res) => {

        const queryParams =  Object.assign({}, req.params, req.query);
        console.log(queryParams)
        return app.render(req, res, '/', queryParams)
    })

    server.get('/livinginfo/:p1?/:p2?', (req, res) => {

        const queryParams =  Object.assign({}, req.params, req.query);
        console.log(queryParams)
        return app.render(req, res, '/', queryParams)
    })

    server.get('/search', (req, res) => {

        const queryParams =  Object.assign({}, req.params, req.query);
        console.log(queryParams)
        return app.render(req, res, '/', queryParams)
    })



    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})