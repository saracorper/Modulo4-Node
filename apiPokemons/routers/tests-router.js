'use strict'

const express = require('express');
const router = express.Router();

router.get('/tests/test01', (req, res,next) => {
    console.log('Recibi los siguientes query params', req.query);

    res.send(req.query);
});

module.exports = router;