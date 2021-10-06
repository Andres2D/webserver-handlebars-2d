
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Andres',
        title: 'Node course'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Andres',
        title: 'Node course'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Andres',
        title: 'Node course'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});
 
app.listen(port, () => {
    console.log(`Application runing on port ${port} 🚀`);
});
