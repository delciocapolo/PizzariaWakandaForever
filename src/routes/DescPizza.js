const descricaoPizza = require('express').Router();

descricaoPizza.get('/', (req, res) => {
	res.render('informacaoPizza.ejs');
});

module.exports = descricaoPizza;
