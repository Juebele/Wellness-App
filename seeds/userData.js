const { User } = require('../models');

const userData = [
{
    id: 1,
    name: "James",
    email: "james@james.com",
    password: 'root1234!'
},
{
    id: 2,
    name: "Vidisha",
    email: 'vidisha@me.org',
    password: 'rootintootin1234!'
},
{
    id: 3,
    name: "Timmy",
    email: 'timmytwotoes@toes.com',
    password:"timmy123"
},
{
    id: 4,
    name: 'Dowling',
    email: 'dowlingdoesit@donkey.donk',
    password: 'root96024'
},
{
    id: 5,
    name: "Josh",
    email: "josh@joshingit.josh",
    password: 'rotorooter@route.routes.org'
}
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;