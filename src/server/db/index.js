const dbConfig = require('./knexfile.js');
const knex = require('knex')(dbConfig[process.env.NODE_ENV]);
const bookshelf = require('bookshelf')(knex);
// const User = require('./models/User');

// bookshelf.Model.extend(User);

module.exports = {
    bookshelf,
    knex
};
