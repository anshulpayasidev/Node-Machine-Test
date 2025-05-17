const knex = require('knex');
const config = require('../config/knexfile');
const environment = 'development';

module.exports = knex(config[environment]);
