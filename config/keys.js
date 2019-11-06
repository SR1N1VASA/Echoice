if (process.env.NODE_ENV == 'production'){
module.exports = require('./Product');
}
else {
    module.exports = require('./devop');
}