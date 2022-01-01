class Home {
	constructor(containerTools, btnToggleContainerTools, whenActivedHide) {
		this.containerTools = document.querySelector(containerTools);
		this.btnToggleContainerTools = document.querySelectorAll(
			btnToggleContainerTools
		);
		this.whenActivedHide = document.querySelector(whenActivedHide);

		this.actived = 'actived';
		this.hide = 'hide';
		this.eventoToggleContainerTools =
			this.eventoToggleContainerTools.bind(this);
	}

	eventoToggleContainerTools() {
		this.containerTools.classList.toggle(this.actived);
		this.whenActivedHide.classList.toggle(this.hide);
	}
	addEventToggleContainerTools() {
		this.btnToggleContainerTools.forEach(element =>
			element.addEventListener('click', this.eventoToggleContainerTools)
		);
	}
	inicializador() {
		if (this.containerTools) {
			this.addEventToggleContainerTools();
		}
		return this;
	}
}

const InstanciaHome = new Home(
	'.container-tools',
	'.addEventSeta',
	'.whenActivedHide'
);
InstanciaHome.inicializador();
