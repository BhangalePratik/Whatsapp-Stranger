const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/generate-link', (req, res, next) => {
    let wsNumber = req.body.number;
    let msg = req.body.msg ? req.body.msg : '';
    res.render('./redirect', {
        wsNumber,
        msg
    })
});

app.use('/', (req, res, next) => {
    res.render('./index');
});
module.exports.handler = serverless(app);
app.listen(3000);