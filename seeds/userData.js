const { User } = require('../models/User');

const userData = [
{
    name: "James",
    email: "james@james.com",
    password: 'root1234!'
},
{
    name: "Vidisha",
    email: 'vidisha@me.org',
    password: 'rootintootin1234!'
},
{
    name: "Timmy",
    email: 'timmytwotoes@toes.com',
    password:"timmy123"
},
{
    name: 'Dowling',
    email: 'dowlingdoesit@donkey.donk',
    password: 'root96024'
},
{
    name: "Josh",
    email: "josh@joshingit.josh",
    password: 'rotorooter@route.routes.org'
}
];

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;