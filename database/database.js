const Sequelize = require('sequelize');


const connection= new Sequelize('updown','root','root',{
    host:'localhost',
    dialect:'mysql',
});

module.exports = connection;