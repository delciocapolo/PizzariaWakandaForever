const express = require('express');
const debug = require('debug');
const descricaoPizza = require('./routes/DescPizza');

class Main {
	constructor() {
		this.app = express();
		this.log = debug('api:main');
		this.port = 4002;
	}
	config() {
		//As configuracoes
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.static('public'));
		this.app.set('view engine', 'ejs');
	}
	routes() {
		//A gerência das rotas todas estao aqui
		this.app.get('/', (req, res) => {
			res.render('home.ejs');
		});

		try {
			this.app.use('/informacaoPizza', descricaoPizza);
		} catch (error) {
			this.log(`Erro de rota: ${error.message}`);
		}
	}
	inicializador() {
		this.config();
		this.routes();
		this.app.listen(this.port, () => this.log('Server is running'));
	}
}

const Instancia1 = new Main();
Instancia1.inicializador();
