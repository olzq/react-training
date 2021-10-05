
const development = require('./webpack.dev.conf.js');
const production = require('./webpack.prod.conf.js');

const configuration = process.env.NODE_ENV === 'development' ? development : production;

module.exports = configuration;
