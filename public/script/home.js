class Home {
	constructor(
		containerTools,
		btnToggleContainerTools,
		whenActivedHide,
		carrinhoSugestao,
		btnLovePizza,
		cardSugestao
	) {
		this.containerTools = document.querySelector(containerTools);
		this.btnToggleContainerTools = document.querySelectorAll(
			btnToggleContainerTools
		);
		this.whenActivedHide = document.querySelector(whenActivedHide);
		this.carrinhoSugestao = document.querySelectorAll(carrinhoSugestao);
		this.btnLovePizza = document.querySelectorAll(btnLovePizza);
		this.cardSugestao = document.querySelectorAll(cardSugestao);

		this.actived = 'actived';
		this.hide = 'hide';
		this.eventoToggleContainerTools =
			this.eventoToggleContainerTools.bind(this);
		this.eventoDescricaoPizza = this.eventoDescricaoPizza.bind(this);
		this.addInforAllCards = this.addInforAllCards.bind(this);
	}

	addInforAllCards() {
		const container_info = `<div class="informacao-pizza backgroundImage">
                                    
		<div class="detalhes-pizza change-detalhes-pizza display-flex flex-space-between">
			<div class="container-btns-actions change-btn-action display-flex">
				<div class="send">
					<button type="button" class="btn-send-pizza btn-action">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="tamanho-item-menu">
							<path d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z" class="svg-send"/>
						</svg>
					</button>
				</div>
				<h1 class="title change-text-1">Informações</h1>
			</div>
			<div class="container-btns-actions change-btn-action display-flex">
				<div class="send">
					<button type="button" class="btn-love-pizza btn-action">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="tamanho-item-menu">
							<path d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z" class="svg-loved"/>
							<!-- <path d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z" style="fill:none; stroke: var(--temporality);stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/> -->
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div class="foto-pizza">
			<img src="/images/Menu/Pizzas/image1.jpg" alt="Uma Imagem">
		</div>
		<div class="detalhes-pizza display-flex">
			<h1 class="title change-text-2">Pizza-Omolete</h1>
			<h2 class="price change-text-3">2000,00kz</h2>
		</div>
		<div class="descricao-texto-pizza">
			<div class="detalhes-pizza display-flex flex-left">
				<h1 class="title flex-left change-text-1">classificação</h1>
				<div class="classificacao flex-left">
					<span class="avalicao-numero">4.1</span>
					<div class="images-estrela-avalicao display-flex">
						<%for(let i = 0; i < 5; i++) {%>
							<div class="avalicao-estrela">
								<svg width="14" height="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M5.87222 1.09002C6.37466 0.136657 7.75326 0.13666 8.2557 1.09002L9.5935 3.62846C9.59616 3.63351 9.60113 3.63697 9.60683 3.63774L12.5338 4.03603C13.6592 4.18917 14.097 5.56916 13.262 6.33137L11.1932 8.21979C11.1888 8.22386 11.1867 8.22992 11.1878 8.23584L11.6827 10.9379C11.8799 12.0148 10.7517 12.8534 9.76148 12.3659L7.07187 11.0418C7.06689 11.0393 7.06103 11.0393 7.05605 11.0418L4.36644 12.3659C3.37622 12.8534 2.24798 12.0148 2.44522 10.9379L2.9401 8.23584C2.94119 8.22992 2.93914 8.22386 2.93467 8.21978L0.8659 6.33137C0.0308934 5.56916 0.468712 4.18917 1.59412 4.03603L4.52109 3.63774C4.52679 3.63697 4.53176 3.63351 4.53442 3.62846L5.87222 1.09002Z" fill="#F24E1E" stroke="#F24E1E"/>
								</svg>
							</div>
						<%}%>
					</div>
				</div>
			</div>
			<div class="detalhes-pizza display-flex flex-left mg-top">
				<h1 class="title flex-left change-text-1">descrição</h1>
				<p class="texto-descricao-pizza">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi accusantium et vitae ipsam fuga cupiditate dolorum totam commodi suscipit facere. Cum voluptas inventore reprehenderit iusto culpa deserunt nulla, quod illo.
				</p>
			</div>
			<div class="detalhes-pizza display-flex flex-left mg-top">
				<h1 class="title change-text-1">Quantidade</h1>
				<div class="container-btns-actions display-flex">
					<div class="add-remove display-grid">
						<button type="button" class="btn-add-pizza btn-action">+</button>
						<h2 class="count-quantidade-pizza">2</h2>
						<button type="button" class="btn-remove-pizza btn-action">-</button>
					</div>
					<div class="send">
						<button type="button" class="btn-send-pizza btn-action">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="tamanho-item-menu">
								<path d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z" class="svg-send"/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>`;

		this.cardSugestao.forEach(card => {
			card.insertAdjacentText('afterbegin', container_info);
		});
		// document.querySelector('div')
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
	eventoAdicionarPizzaCarrinho() {
		console.log('Clicando');
	}
	addEventClickCarrinho() {
		this.carrinhoSugestao.forEach(btnCarrinho => {
			btnCarrinho.addEventListener('click', this.eventoAdicionarPizzaCarrinho);
		});
	}
	eventoMarcarCorPrimaria(element, back) {
		//Evento Para adicionar a qualquer elemento a cor primaria no fundo(background ou fill)
		switch (back) {
			case 'background':
				console.log('Em construcao');
				break;
			case 'fill':
				element.forEach(obj => {
					obj.addEventListener('click', () => {
						obj.children[0].children[0].classList.toggle(this.actived);
					});
				});
				break;
			default:
				console.warn('Nao escolheu em que plano de fundo será aplicado');
				break;
		}
	}
	addEventClickLove() {
		this.eventoMarcarCorPrimaria(this.btnLovePizza, 'fill');
	}

	eventoDescricaoPizza(obj) {}

	addEventClickCardSugestao() {
		this.cardSugestao.forEach(card =>
			card.addEventListener('click', () => card.classList.toggle(this.actived))
		);
	}
	inicializador() {
		if (this.containerTools) {
			this.addEventToggleContainerTools();
			this.addEventClickCarrinho();
			this.addEventClickLove();
			this.addEventClickCardSugestao();
		}
		return this;
	}
}

const InstanciaHome = new Home(
	'.container-tools',
	'.addEventSeta',
	'.whenActivedHide',
	'.carrinho-sugestao',
	'.btn-love-pizza',
	'.card-sugestao'
);
InstanciaHome.inicializador();
