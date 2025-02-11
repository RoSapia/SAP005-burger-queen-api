const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const port = process.env.PORT || 3000


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})