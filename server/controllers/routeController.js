const path = require('path');

const getApiHome = function(req, res) {
    res.sendFile( path.join(__dirname, '../', 'index.html') );
};

module.exports = {getApiHome};