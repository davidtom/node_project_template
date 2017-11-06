let express = require('express');
let router = express.Router();
// let User = new require('../models/User');
// let mongoose = require('mongoose');

router.get('/test', (req, res) => {
    res.send(JSON.stringify({ message: 'Hello World!' }));
});

module.exports = router;
