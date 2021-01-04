const express = require("express");
const exphbs  = require('express-handlebars');
const app = express()
const port = 1000
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/views/about.handlebars', (req, res) => {
    res.render('about')
})
app.get('/views/contact.handlebars', (req, res) => {
    res.render('contact')
})

app.listen(port, console.log("server start" +port))
