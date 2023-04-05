(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
	function checkWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	};
	
	checkWebP(function (support) {
		if (support) {
			document.body.classList.add('webp');
		} else {
			document.body.classList.add('no-webp');
		}
	});
	
	const Methods = {
		init() {
			Methods.actionMenuMobile();
			Methods.actionMenuLoginMobile();
			Methods.maskInput();
			setTimeout(function () {
				const loadingPages = document.querySelector('.favela__loading');
				if (loadingPages) {
					loadingPages.classList.add('is--active');
				};
			}, 1200);
			if (document.querySelector('body').classList.contains('js--body-form')) {
				Methods.actionForm();
				Methods.sendEmail();
			};
			if (document.querySelector('body').classList.contains('js--body-briefing')) {
				Methods.briefingSteps();
				Methods.actionFormBriefing();
				Methods.sendEmailBriefing();
			}
			Methods.sliderMidia();
		},
	
		actionMenuMobile() {
			const toggleMenu = document.querySelector('.js--open-menu');
			const menuMobile = document.querySelector('.js--header');
			if (toggleMenu) {
				toggleMenu.addEventListener('click', ev => {
					ev.preventDefault();
					menuMobile.classList.toggle('is--active');
					document.querySelector('body').classList.toggle('has--no-scroll');
				});
			};
		},
	
		actionMenuLoginMobile() {
			const btnLogin = document.querySelector('.js--login');
			if (btnLogin) {
				btnLogin.addEventListener('click', ev => {
					document.querySelector('.has--submenu-wrapper').classList.toggle('is--active');
				});
			};
		},
	
		actionForm() {
			const selectItems = document.querySelectorAll('.has--select input');
			const itemsValue = document.querySelectorAll('.has--select__absolute span');
			if (selectItems) {
				[...selectItems].map(elem => {
					elem.addEventListener('click', ev => {
						ev.preventDefault();
						const $this = ev.currentTarget;
						$this.closest('.js--advertise').querySelector('.has--select').classList.add('is--active');
					});
				});
			};
	
			if (itemsValue) {
				[...itemsValue].map(item => {
					item.addEventListener('click', ev => {
						ev.preventDefault();
						const $this = ev.currentTarget;
						$this.closest('.js--advertise').querySelector('input').value = $this.textContent;
						$this.closest('.js--advertise').querySelector('.has--select').classList.remove('is--active');
					});
				});
			};
		},
	
		sendEmail() {
			// const formContact = document.querySelector('.js--form-contact');
			// const submitFormContact = document.querySelector('.js--submit-contact');

			// const contactName = document.querySelector('input[name=contact__name]').value;
			// const contactEmail = document.querySelector('input[name=contact__email]').value;
			// const contactSubject = document.querySelector('input[name=contact__interest]').value;
			// const contactMessage = document.querySelector('textarea[name=contact__message]').value;
			
			// if (submitFormContact) {
			// 	document.querySelector('.js--form-contact').addEventListener("submit", (ev) => {
			// 		ev.preventDefault();
					
			// 		fetch("https://api.apispreadsheets.com/data/wiadiBdTwEVzwSdj/", {
			// 			method: "POST",
			// 			headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },
			// 			body: JSON.stringify({
			// 				"data": {
			// 					"Nome:":`${contactName}`,
			// 					"E-mail:":`${contactEmail}`,
			// 					"Assunto:":`${contactSubject}`,
			// 					"Deixe sua mensagem abaixo:":`${contactMessage}`
			// 				}
			// 			}),
			// 		}).then(res => {
			// 			if (res.status == 201){
			// 				document.querySelector('.js--submit-contact').innerHTML = "Enviado com sucesso...";
			// 			}
			// 			else{
			// 				console.error('Formulário inconsistente');
			// 				document.querySelector('.js--submit-contact').innerHTML = "tente novamente depois";
			// 			}
			// 		})
			// 	});
			// }
			
			// if (formContact) {
			// 	formContact.onsubmit = function (ev) {
			// 		ev.preventDefault();
			// 		let request = new XMLHttpRequest();
			// 		request.open('POST', '../php/send-contact.php', /* async = */false);
					
			// 		var formData = new FormData(formContact);
			// 		request.send(formData);
					
			// 		submitFormContact.value = 'Enviado com sucesso...';
			// 	};
			// };
	
			// const form = document.querySelector('.js--form-want-to-advertise');
			// const submitForm = document.querySelector('.js--submit-want-to-advertise');
			
			// if (form) {
			// 	form.onsubmit = function (ev) {
			// 		ev.preventDefault();
			// 		let request = new XMLHttpRequest();
			// 		request.open('POST', '../php/send.php', /* async = */false);
	
			// 		var formData = new FormData(form);
			// 		request.send(formData);
	
			// 		submitForm.value = 'Enviado com sucesso...';
			// 	};
			// };
		},
	
		sendEmailBriefing() {
			// const formBriefing = document.querySelector('.js--form-briefing');
			const submitFormBriefing = document.querySelector('.js--submit-briefing');
	
			const email = document.querySelector('input[name=email]').value;
			const name = document.querySelector('input[name=name]').value;
			const campaign = document.querySelector('input[name=campaign]').value;
			const site = document.querySelector('input[name=site]').value;
			const productService = document.querySelector('textarea[name=product_service]').value;
			const competitors = document.querySelector('textarea[name=competitors]').value;
			const nameCampaign = document.querySelector('input[name=name_campaign]').value;
			const hashtag = document.querySelector('input[name=hashtag]').value;
			const socialMediaInstagram = document.querySelector('input[name=social_media_instagram]').value;
			const socialMediaYoutube = document.querySelector('input[name=social_media_youtube]').value;
			const influencerPerfil = document.querySelector('input[name=influencer_perfil]').value;
			const campaignObject = document.querySelector('input[name=campaign_object]').value;
			const cateogoriesInfluencer = document.querySelector('input[name=cateogories_influencer]').value;
			const personaCampaign = document.querySelector('textarea[name=persona_campaign]').value;
			const listPerfilLink = document.querySelector('textarea[name=list_perfil_link]').value;
			const notPerfilWorking = document.querySelector('textarea[name=not_perfil_working]').value;
			const age = document.querySelector('input[name=age]').value;
			const campaignObjectInfluencer = document.querySelector('input[name=campaign_object_influencer]').value;
			const campaignObjectState = document.querySelector('input[name=campaign_object_state]').value;
			const campaignObjectAgeRage = document.querySelector('input[name=campaign_object_age_rage]').value;
			const campaignObjectGenres = document.querySelector('input[name=campaign_object_genres]').value;
			const campaignObjectStatesBr = document.querySelector('input[name=campaign_object_states_br]').value;
			const listInfluencer = document.querySelector('textarea[name=list_influencer]').value;
			const notListInfluencer = document.querySelector('textarea[name=not_list_influencer]').value;
	
			if (submitFormBriefing) {
				document.querySelector('.js--form-briefing').addEventListener("submit", (ev) => {
					ev.preventDefault();
	
					fetch("https://api.apispreadsheets.com/data/twMLqZKOSfj6ya9T/", {
					method: "POST",
					headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"data": {
							"1. Qual é o seu email?":`${email}`,
							"2. Qual seu nome?":`${name}`,
							"3. Qual nome da marca será trabalhado na campanha?":`${campaign}`,
							"4. Qual é o site da marca?":`${site}`,
							"5. Resuma resumidamente sua marca e produto/serviço que funcionarão na campanha:":`${productService}`,
							"6. Liste aqui seus principais concorrentes (diretos e indiretos):":`${competitors}`,
							"1. Qual será o nome da campanha?":`${nameCampaign}`,
							"2. Qual hashtag usar na campanha?":`${hashtag}`,
							"3. Qual é o perfil da marca nas redes sociais?":`${socialMediaInstagram}`,
							"3. Qual é o perfil da marca nas redes sociais?":`${socialMediaYoutube}`,
							"4. Qual é o perfil do público da campanha?":`${influencerPerfil}`,
							"5. Qual é o objetivo da campanha?":`${campaignObject}`,
							"6. Em quais categorias os influenciadores devem estar?":`${cateogoriesInfluencer}`,
							"1. Qual é a persona esperada para a campanha? Exemplos: Maria, 27 anos, advogada, mãe, casada, negra, descolada, tatuada etc.":`${personaCampaign}`,
							"2. Liste os perfis aqui (cole o link) com conteúdo semelhante ao que você deseja trabalhar (sugerimos até 10 perfis). Abaixo, descreva o que você gosta nos perfis mencionados.":`${notPerfilWorking}`,
							"3. Liste os perfis aqui (cole o link) com conteúdo semelhante ao que você NÃO deseja trabalhar (sugerimos até 10 perfis). Abaixo, descreva o que você não gosta nos perfis mencionados.":`${listPerfilLink}`,
							"4. Qual é a idade do influenciador?":`${age}`,
							"5. Influenciadores de quais gêneros são preferidos?":`${campaignObjectInfluencer}`,
							"6. Em quais estados brasileiros os influenciadores devem residir?":`${campaignObjectState}`,
							"7. Quais são os principais grupos etários a serem impactados pela ação?":`${campaignObjectAgeRage}`,
							"8. Quais os gêneros a serem impactados pela ação?":`${campaignObjectGenres}`,
							"9. Quais estados brasileiros serão impactados pela ação?":`${campaignObjectStatesBr}`,
							"1. O QUE PODE: Liste diretrizes para o influenciador sobre como ele deve produzir o conteúdo. Exemplo: conteúdo, marca etc.":`${listInfluencer}`,
							"2. O QUE NÃO PODE: O que o conteúdo da campanha NÃO deve ter? Exemplo: não nomeie concorrentes, etc.":`${notListInfluencer}`,
						},
					}),
					}).then(res => {
						if (res.status == 201){
							document.querySelector('.js--submit-briefing').innerHTML = "Enviado com sucesso...";
						}
						else{
							console.error('Formulário inconsistente');
							document.querySelector('.js--submit-briefing').innerHTML = "tente novamente depois";
						}
					})
				});
			}
		},
	
		maskInput() {
			const inputPhone = document.querySelector('.js--want-to-advertise-phone');
			if (inputPhone) {
				VMasker(inputPhone).maskPattern("(99) 99999-9999");
			}
		},
	
		sliderMidia() {
			if (document.querySelector('body').classList.contains('slick')) {
				const sliderElement = $('.favela__slider .js--slider-items');
				if (sliderElement) {
					sliderElement.not('.slick-initialized').slick({
						dots: true,
						infinite: true,
						speed: 300,
						slidesToShow: 4,
						slidesToScroll: 1,
						responsive: [{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								adaptiveHeight: true
							}
						}]
					});
				};
			};
		},
	
		briefingSteps() {
			const buttonNextStep = document.querySelectorAll('.js--next-step');
			const fakeSelect = document.querySelectorAll('.js--open-select');
			const elementFakeSelect = document.querySelectorAll('.js--item-select');
			const selectedElement = document.querySelectorAll('.js--name-select');
			const navButtons = document.querySelectorAll('.js--btn-nav');
			const steps = document.querySelectorAll('.js--form-steps');
	
			[...navButtons].forEach(item => {
				item.addEventListener('click', () => {
					if (item.classList.contains('clickable')) {
						let indexActiveForm = item.dataset.index;
						[...steps].map(step => {
							if (step.dataset.index == item.dataset.index) {
								let titleInfoForm = step.getAttribute('data-title');
								document.querySelector('.js--header-briefing p').textContent = titleInfoForm;
								step.classList.add('is--active');
								window.scroll({
									top: 0,
									left: 0,
									behavior: 'smooth'
								});
							} else {
								step.classList.remove('is--active');
							}
						});
	
						[...navButtons].map(nav => nav.classList.remove('is--active'));
						navButtons[indexActiveForm].classList.add('is--active');
					}
				});
			});
	
			if (fakeSelect) {
				[...fakeSelect].map(elem => {
					elem.addEventListener('click', ev => {
						ev.preventDefault();
						const $this = ev.currentTarget;
						$this.nextElementSibling.classList.toggle('is--active');
					});
				});
			};
	
			if (elementFakeSelect) {
				[...elementFakeSelect].map(elem => {
					elem.addEventListener('click', ev => {
						ev.preventDefault();
						const $this = ev.currentTarget;
						let closestElement = $this.closest('.js--item-main');
	
						if (!closestElement.classList.contains('js--multiple')) {
							$this.closest('.js--absolute').classList.remove('is--active');
							let elementNameSelected = closestElement.querySelector('.js--name-select');
							if (elementNameSelected) {
								elementNameSelected.textContent = $this.textContent.trim();
								elementNameSelected.classList.add('is--active');
							}
							closestElement.querySelector('p').classList.add('readyonly');
							closestElement.querySelector('input[type="hidden"]').value = $this.textContent;
						} else {
							const limit = closestElement.dataset.limit;
							$this.closest('.js--absolute').classList.remove('is--active');
							let elementNameSelected = closestElement.querySelector('.js--options-selected');
	
							if (elementNameSelected) {
								const wrapper = `
									<div class="js--name-select is--active">${$this.textContent.trim()}</div>
								`;
								elementNameSelected.innerHTML += wrapper;
	
								if (elementNameSelected.querySelectorAll('.js--name-select').length >= limit) {
									closestElement.querySelector('p').classList.add('readyonly');
								}
	
								closestElement.querySelector('input[type="hidden"]').value = '';
	
								[...elementNameSelected.querySelectorAll('.js--name-select')].map(item => {
									closestElement.querySelector('input[type="hidden"]').value += ` | ${item.textContent}`;
	
									item.addEventListener('click', e => {
										const text = e.currentTarget.textContent;
										e.currentTarget.remove();
	
										setTimeout(() => {
											if (elementNameSelected.querySelectorAll('.js--name-select').length < limit) {
												closestElement.querySelector('p').classList.remove('readyonly');
											}
	
											closestElement.querySelector('input[type="hidden"]').value = closestElement.querySelector('input[type="hidden"]').value.replace(` | ${text.trim()}`, '');
										}, 100);
									});
								});
							}
						}
					});
				});
			};
	
			if (selectedElement) {
				[...selectedElement].map(elem => {
					elem.addEventListener('click', ev => {
						ev.preventDefault();
						const $this = ev.currentTarget;
						$this.textContent = '';
						$this.classList.remove('is--active');
						$this.closest('.js--item-main').querySelector('.js--open-select').classList.remove('readyonly');
					});
				});
			};
	
			if (buttonNextStep) {
				[...buttonNextStep].map(elem => {
					elem.addEventListener('click', ev => {
						ev.preventDefault();
						const $this = ev.currentTarget;
						const inputsStepActive = document.querySelectorAll('.favela__briefing-form--steps.is--active .js--input');
						if (inputsStepActive) {
							let input = null;
							let result = true;
							for (let i = 0; i < inputsStepActive.length; i++) {
								input = inputsStepActive[i];
								if (!input.value) {
									result = false;
									input.classList.add('error');
									input.focus();
									break;
								};
							};
							if (result === true) {
	
								const elementClosest = $this.closest('form').querySelector('.favela__briefing-form--steps.is--active');
								elementClosest.classList.remove('is--active');
								elementClosest.nextElementSibling.classList.add('is--active');
								const elemenNav = document.querySelectorAll('.js--btn-nav');
								const currentStep = $this.closest('.js--form-briefing').querySelector('.js--form-steps.is--active');
	
								elemenNav.forEach((item, index) => {
									if (currentStep.dataset.index == item.dataset.index) {
										elemenNav[index - 1].classList.add('clickable');
									}
								});
	
								window.scroll({
									top: 0,
									left: 0,
									behavior: 'smooth'
								});
	
								if (elemenNav) {
									let indexFormActive = document.querySelector('.js--form-steps.is--active');
									if (indexFormActive) {
										let indexActiveForm = indexFormActive.getAttribute('data-index');
										let titleInfoForm = indexFormActive.getAttribute('data-title');
										document.querySelector('.js--header-briefing p').textContent = titleInfoForm;
										[...elemenNav].map(nav => nav.classList.remove('is--active'));
										elemenNav[indexActiveForm].classList.add('is--active');
										if (indexActiveForm == 4) {
											document.querySelector('.js--next-step').classList.add('is--hidden');
											document.querySelector('.js--submit-briefing').classList.remove('is--hidden');
										}
									}
								};
							}
							return result;
						};
					});
				});
			};
		},
	
		actionFormBriefing() {
			const formId = "form-briefing";
			const url = location.href;
			const formIdentifier = `${url} ${formId}`;
			const saveButton = document.querySelector("#button-save");
			let form = document.querySelector(`#${formId}`);
			let formElements = form.elements;
	
			const getFormData = () => {
				let data = { [formIdentifier]: {} };
				for (const element of formElements) {
					if (element.name.length > 0) {
						data[formIdentifier][element.name] = element.value;
					}
				}
				return data;
			};
	
			saveButton.onclick = event => {
				event.preventDefault();
				data = getFormData();
				localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
			};
	
			const populateForm = () => {
				if (localStorage.key(formIdentifier)) {
					const savedData = JSON.parse(localStorage.getItem(formIdentifier));
					for (const element of formElements) {
						if (savedData !== null) {
							if (element.name in savedData) {
								element.value = savedData[element.name];
							}
						}
					}
				}
			};
	
			document.onload = populateForm();
		}
	
	};
	
	window.addEventListener("DOMContentLoaded", Methods.init);
	
	},{}]},{},[1]);
	
	window.addEventListener("DOMContentLoaded", function(){
	
		if(window.innerWidth > 768){
			$(".favela__cases-image figure[data-res='desktop'].active").removeClass("active");
			$(".favela__cases-image figure[data-res='desktop']")[0].classList.add("active");
			$(".favela__cases-image figure[data-res='mobile'].active").removeClass("active");
		} else {
			$(".favela__cases-image figure[data-res='mobile'].active").removeClass("active");
			$(".favela__cases-image figure[data-res='desktop'].active").removeClass("active");
			$(".favela__cases-image figure[data-res='mobile']")[0].classList.add("active");
		}
	
		let bigger = 0;
		$("#favela__about .carousel-item").each(function() {
			let current = parseFloat($(this).css("height").replace('px', ''));
			if(current > bigger){
				bigger = current; 
			}
		});
	
		$("#favela__about").css("height", bigger + "px");
	
		// $("#favela__about .carousel-item").each(function() {
		// 	$(this).css("height", bigger + "px");
		// });
		
		setCustomSelect();
	
		$("#favela__about").on("slid.bs.carousel", (to) => { 
			let item = $(to.relatedTarget).find(".favela__about-carousel-item");
			if($(item).hasClass("cases")){
				$("#favela__about").on("slid.bs.carousel", switchCaseImage);
			}
		});
	
	
		$("#dataFavelaModal").on('show.bs.modal', function(){
			$(".favela__header").css("z-index", "1050");
			$(".favela__header").css("position", "relative");
		});
	
		$("#dataFavelaModal").on('hide.bs.modal', function(){
			$(".favela__header").css("z-index", "initial");
			$(".favela__header").css("position", "unset");
		});
	
		$("#pesquisa_submit").click(function(){
			
			if(!validateForm()){
				alert("Verifique os dados e tente novamente");
				return false;
			} 
			
			let data = {
				nome: $("#f_nome").val(),
				email: $("#f_email").val(),
				atividade: $("#f_atividade").val(),
			}
	
			var root = location.protocol + '//' + location.host;
			let url = root + "/php/send-lead.php";
	
			$.post(url, data, function(response) {
				if(response == 1){
					var link = document.createElement("a");
					link.href = root + "/assets/misc/pesquisa_datafavela.pdf";
					link.setAttribute("download", "");
					document.querySelector("body").appendChild(link);
					link.click();
					link.remove();
	
					$("#dataFavelaModal").modal("hide");
					$("#f_nome").val("");
					$("#f_email").val("");
					$("#f_atividade").val("");
					setCustomSelect();
				}
			});
			
		});
	
	})
	
	var switchCaseImage = function switchCaseImage(){
		var l, current, currentIndex, nextIndex, next;
	
		if(window.innerWidth > 768){
			l = $(".favela__cases-image figure[data-res='desktop']").length;
			current = $(".favela__cases-image figure[data-res='desktop'].active");
		} else {
			l = $(".favela__cases-image figure[data-res='mobile']").length;
			current = $(".favela__cases-image figure[data-res='mobile'].active");
		}
	
		currentIndex = parseInt($(current).attr("index"));
		nextIndex = currentIndex + 1;
	
		if(nextIndex > l){
			nextIndex = 1;
		}
	
		if(window.innerWidth > 768){
			next = $(".favela__cases-image figure[data-res='desktop'][index='" + (nextIndex) + "']");
		} else {
			next = $(".favela__cases-image figure[data-res='mobile'][index='" + (nextIndex) + "']");
		}
	
		$(current).removeClass("active");
		$(next).addClass("active");
	
		$("#favela__about").off("slid.bs.carousel", switchCaseImage)	
	}
	
	window.onresize = function(){
		if(window.innerWidth > 768){
			$(".favela__cases-image figure[data-res='desktop'].active").removeClass("active");
			$(".favela__cases-image figure[data-res='desktop']")[0].classList.add("active");
			$(".favela__cases-image figure[data-res='mobile'].active").removeClass("active");
		} else {
			$(".favela__cases-image figure[data-res='mobile'].active").removeClass("active");
			$(".favela__cases-image figure[data-res='desktop'].active").removeClass("active");
			$(".favela__cases-image figure[data-res='mobile']")[0].classList.add("active");
		}
	
	
		let bigger = 0;
		$("#favela__about .carousel-item").each(function() {
			let current = parseFloat($(this).css("height").replace('px', ''));
			if(current > bigger){
				bigger = current; 
			}
		});
	
		$("#favela__about").css("height", bigger + "px");
	
		// $("#favela__about .carousel-item").each(function() {
		// 	$(this).css("height", bigger + "px");
		// });
	}
	
	function validateForm(){
		var isValid = true;
		let nome = $("#f_nome").val();
		let email = $("#f_email").val();
		let atividade = $("#f_atividade").val();
		let emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
		if(nome.length < 3){
			isValid = false;
		}
	
		if(!emailRe.test(email)){
			isValid = false;
		}
	
		if(atividade == 0){
			isValid = false;
		}
	
		return isValid;
	}
	
	function setCustomSelect(){
		var x, i, j, l, ll, selElmnt, a, b, c;
				/*look for any elements with the class "custom-select":*/
				x = document.getElementsByClassName("custom-select");
				l = x.length;
				for (i = 0; i < l; i++) {
				  selElmnt = x[i].getElementsByTagName("select")[0];
				  ll = selElmnt.length;
				  /*for each element, create a new DIV that will act as the selected item:*/
				  a = document.createElement("DIV");
				  a.setAttribute("class", "select-selected");
				  a.classList.add("default");
				  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
				  x[i].appendChild(a);
				  /*for each element, create a new DIV that will contain the option list:*/
				  b = document.createElement("DIV");
				  b.setAttribute("class", "select-items select-hide");
				  for (j = 1; j < ll; j++) {
					/*for each option in the original select element,
					create a new DIV that will act as an option item:*/
					c = document.createElement("DIV");
					c.innerHTML = selElmnt.options[j].innerHTML;
					c.addEventListener("click", function(e) {
						/*when an item is clicked, update the original select box,
						and the selected item:*/
						var y, i, k, s, h, sl, yl;
						s = this.parentNode.parentNode.getElementsByTagName("select")[0];
						sl = s.length;
						h = this.parentNode.previousSibling;
						h.classList.remove("default");
						for (i = 0; i < sl; i++) {
						  if (s.options[i].innerHTML == this.innerHTML) {
							s.selectedIndex = i;
							h.innerHTML = this.innerHTML;
							y = this.parentNode.getElementsByClassName("same-as-selected");
							yl = y.length;
							for (k = 0; k < yl; k++) {
							  y[k].removeAttribute("class");
							}
							this.setAttribute("class", "same-as-selected");
							break;
						  }
						}
						h.click();
					});
					b.appendChild(c);
				  }
				  x[i].appendChild(b);
				  a.addEventListener("click", function(e) {
					  /*when the select box is clicked, close any other select boxes,
					  and open/close the current select box:*/
					  e.stopPropagation();
					  closeAllSelect(this);
					  this.nextSibling.classList.toggle("select-hide");
					  this.classList.toggle("select-arrow-active");
					});
				}
				function closeAllSelect(elmnt) {
				  /*a function that will close all select boxes in the document,
				  except the current select box:*/
				  var x, y, i, xl, yl, arrNo = [];
				  x = document.getElementsByClassName("select-items");
				  y = document.getElementsByClassName("select-selected");
				  xl = x.length;
				  yl = y.length;
				  for (i = 0; i < yl; i++) {
					if (elmnt == y[i]) {
					  arrNo.push(i)
					} else {
					  y[i].classList.remove("select-arrow-active");
					}
				  }
				  for (i = 0; i < xl; i++) {
					if (arrNo.indexOf(i)) {
					  x[i].classList.add("select-hide");
					}
				  }
				}
				/*if the user clicks anywhere outside the select box,
				then close all select boxes:*/
				document.addEventListener("click", closeAllSelect);
	}
	
	window.addEventListener("DOMContentLoaded", function(){
		$("#favela__about").carousel("dispose");
		$("#favela__about").carousel({interval: 6000});
		setTimeout(changePictures, 3000);
	})
	
	
	$("#favela__about").on("slid.bs.carousel", (to) => { 
		if(to.to == 0){
			$("#favela__about").carousel("dispose");
			$("#favela__about").carousel({interval: 6000});
			setTimeout(changePictures, 3000);
			console.log("Intervalo: 6000");
		} else {
			$("#favela__about").carousel("dispose");
			$("#favela__about").carousel({interval: 4000});
			console.log("Intervalo: 4000");
		}
	});
	
	function changePictures(){
		let currentHeader = $(".favela__banner figure.active");
		let nextHeader = $(".favela__banner figure:not(.active)");
	
		let currentImages = $("#favela__about .favela__about-carousel-item.main .favela__about-images.active");
		let nextImages = $("#favela__about .favela__about-carousel-item.main .favela__about-images:not(.active)");
	
		$(currentHeader).addClass("hide-anim");
		$(currentHeader).removeClass("active");
		setTimeout(function(){ $(currentHeader).removeClass("hide-anim"); }, 1300);
		$(nextHeader).addClass("show-anim");
		$(nextHeader).addClass("active");
	
		$(currentImages).addClass("hide-anim");
		$(currentImages).removeClass("active");
		setTimeout(function(){ $(currentImages).removeClass("hide-anim"); }, 1300);
		$(nextImages).addClass("show-anim");
		$(nextImages).addClass("active");
	}