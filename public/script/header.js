class MenuCima {
	constructor(menuLateral, btnCaller, item_menuCabecalho) {
		this.menuLateral = document.querySelector(menuLateral);
		this.btnMostrarMenuLateral = document.querySelector(btnCaller);
		this.allItem_menuCabecalho = document.querySelectorAll(item_menuCabecalho);

		this.actived = 'actived'; //eh uma string, que representa a classe (css) .active(no arquivo header.css)
		this.eventoChamarMenu = this.eventoChamarMenu.bind(this); //O this, sem essa instrucao, estava a referenciar, somente, a class ou o elemnto(btnCaller)! com essa instrucao, o this referencia todos os this ou todos elementos
	}

	eventoChamarMenu() {
		this.allItem_menuCabecalho.forEach((item, index) => {
			console.log(`${index / 7 + 0.3}s`);
			item.style.animation
				? (item.style.animation = '')
				: (item.style.animation = `showFake 0.5s ease-in forwards ${
						index / 7 + 0.01
				  }s`);
		});
		/**
		 * Defincao: O metodo toggle, da propriedade classList, permite adicionar ou remover classe ou classes (css) a um elemento HTML
		 * Condicao: Se a classe(css), ja existir, o toogle remove. Se nao existir o toggle adiciona
		 */
		this.menuLateral.classList.toggle(this.actived);
	}
	addEventClickMenuLateral() {
		this.btnMostrarMenuLateral.addEventListener('click', this.eventoChamarMenu); //Tou adicionando evento click ao menu, responsivo, e a chamar a funcao (eventoChamarMenu)
	}
	inicializadorClasse() {
		if (this.btnMostrarMenuLateral) {
			//Para verificar se o elemento existe no HTML ou no DOM(Document Object Model(todo codigo HTML))
			this.addEventClickMenuLateral();
		}
	}
}

const Menu = new MenuCima('.navbar', '.mobile-menu', '.item-menuCabecalho');
Menu.inicializadorClasse();
