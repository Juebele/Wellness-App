// Requirements for dependencies.
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const models =  require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

//Establishes middleware functionality.
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App now listening on ${PORT}`));
});