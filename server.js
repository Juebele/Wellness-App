// Requirements for dependencies.
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const models =  require('./models');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3001;

//passport middleware
// app.use(session({
//     key: 'session_cookie_name',
//     secret: 'session_cookie_secret',
//     store: new MySQLStore({
//         host:'localhost',
//         port: 3306,
//         user:'root',
//         database: 'cookie_user'
//     }),
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 1000*60*60*24
//     }
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(express.static('public'));
// app.set("view engine", "ejs");


//Establishes middleware functionality.
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App now listening on ${PORT}`));
});