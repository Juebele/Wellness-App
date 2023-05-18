// Requirements for dependencies.
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const models =  require('./models');
const path = require('path');



const handlebars = require('handlebars');

// const helpers = require('./utils/helpers');

// const passport = require('passport');

const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.static('public'));

handlebars.registerHelper('eq', function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
  });


//Establishes middleware functionality.
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App now listening on ${PORT}`));
});