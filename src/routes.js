const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
    res.json({msg: "Funcionando"});
});

module.exports = routes;