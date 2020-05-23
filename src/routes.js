const { Router } = require('express');
const routes = Router();

const questions = require('./questions');

routes.get('/questions', (req, res) => {
    res.json({ questions });
});

module.exports = routes;