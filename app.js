const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');

app.set('view engine', 'pug');
app.set('views', './pages');

const db = require('./db/custom');



const adminRoutes = require('./routes/admin');
const customerRoutes = require('./routes/customers');
const airportRoutes = require('./routes/airport');
const flightRoutes = require('./routes/flight');
const ffcgoldRoutes = require('./routes/ffcgold');
const ffcsilverRoutes = require('./routes/ffcsilver');
const ffcbronzeRoutes = require('./routes/ffcbronse');



app.use(bodyParser.urlencoded({extended:false}));
app.use("/admin", adminRoutes);
app.use(customerRoutes);
app.use(airportRoutes);
app.use(flightRoutes);
app.use(ffcgoldRoutes);
app.use(ffcsilverRoutes);
app.use(ffcbronzeRoutes);

/*
db().query('select * from customer')
    .then((result) => {
        console.log(result.rows);
    }).catch((err) => {
        console.log(err);
    });
*/ 

app.get("/", (req, res, next) => {
    res.render('index', {title: 'Home Page'});
});

app.use((req, res)=> {
    res.status(404)
    .render('404', {title: '404 Not Found'});
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});