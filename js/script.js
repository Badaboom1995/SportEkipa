
// Форма обратной связи
var contactForm = document.querySelector(".contact-form");
var exitBtn = document.querySelector(".contact-form__exit");
contactForm.addEventListener("click", function(e){
	if((e.target==contactForm)||(e.target==exitBtn)){
		this.classList.add("contact-form--hidden");
	}
});


var feedbackBtn = document.querySelector(".main-header__feedback-btn");
feedbackBtn.addEventListener("click", function(e){
	e.preventDefault();
		contactForm.classList.remove("contact-form--hidden");
		console.log("hi");
});
// Форма обратной связи

var catchForm = document.querySelector(".contact-form--catch");
var exitBtnCatch = document.querySelector(".contact-form--catch .contact-form__exit");
if(catchForm){
	catchForm.addEventListener("click", function(e){
	if((e.target==catchForm)||(e.target==exitBtnCatch)){
		this.classList.add("contact-form--hidden");
	}
	});
	var feedbackBtnCatch = document.querySelector(".call-to-discount__btn");
	feedbackBtnCatch.addEventListener("click", function(e){
		e.preventDefault();
			catchForm.classList.remove("contact-form--hidden");
	});
}




// Табы на карточке товара
var getActiveClass = function(activeElem,classForActiveElem ){
	var activeItemAndSiblings = activeElem.parentElement.children
	for(var i=0;i<activeItemAndSiblings.length; i++){
		if (activeItemAndSiblings[i].classList.contains(classForActiveElem)){
			activeItemAndSiblings[i].classList.remove(classForActiveElem);
		}	
	}
	activeElem.classList.add(classForActiveElem);
}
var choseTab = function (tabClass){
	var chosenTab = document.querySelector("#"+tabClass);
	getActiveClass(chosenTab,"product__tabs-nav-item--active");
	switch (chosenTab.id){
		case "description-tab":
			var targetTab = document.querySelector(".product__tab-description");
			getActiveClass(targetTab ,"product__tab-active");
		break;
		case "sizes-tab":
			var targetTab = document.querySelector(".product__params");
			getActiveClass(targetTab ,"product__tab-active");
		break;
		case "reviews-tab":
			var targetTab = document.querySelector(".product__reviews");
			getActiveClass(targetTab ,"product__tab-active");
		break;
		case "pay-and-deliver-tab":
			var targetTab = document.querySelector(".product__pay-and-deliver");
			getActiveClass(targetTab ,"product__tab-active");
		break;
	}
}
var productAdditionalTabs = document.querySelector(".product__tabs-nav");
if (productAdditionalTabs){
	productAdditionalTabs.addEventListener("click", function(e){
		e.preventDefault();
		choseTab(e.target.id);
	})
}
// Табы на карточке товара

// Фотографии на карточке товара
var thumbnails = document.querySelector(".product__thumbnail");// Найти блок с миниатюрами
var mainPicture = document.querySelector(".product__main-img img");// Найти блок с большой фотографией
// Отследить клик по блоку с миниатюрами
if(thumbnails){
	thumbnails.addEventListener("click", function(e){
		if (e.target.hasAttribute("src")){
			var pathToThumbnail = e.target.getAttribute("src");
			mainPicture.setAttribute("src",pathToThumbnail);
		}
		else {
			var pathToThumbnail = e.target.querySelector("img").getAttribute("src");
			mainPicture.setAttribute("src",pathToThumbnail);
		}
		
	});
}
// Фотографии на карточки товара

// Счетчик товаров
var goodsCounter = {
	minus: document.querySelector(".product__counter-control--minus"),
	plus: document.querySelector(".product__counter-control--plus"),
	input: document.querySelector(".product__option-value"),
	increase: function (){
		this.input.value = +this.input.value+1;
	},
	decrease: function (){
		if(this.input.value>1){
			this.input.value = +this.input.value-1;
		}
	},
	test: function(){s
		console.log(this.input.value)	
	}
}
if (goodsCounter.input){
	goodsCounter.plus.addEventListener("click", function(e){
		e.preventDefault();
		goodsCounter.increase();
	});
	goodsCounter.minus.addEventListener("click", function(e){
		e.preventDefault();
		goodsCounter.decrease();
	});
	goodsCounter.input.addEventListener("change",function(e){
		if(goodsCounter.input.value<1||isNaN(+goodsCounter.input.value)){
			goodsCounter.input.value=1;
		};
	});
}
// Счетчик товаров

// var filterForm = document.querySelector(".catalog__filtres");
// var catalogFiltres = document.querySelectorAll(".catalog__filtres input[type=checkbox]");
// var catalogItems = document.querySelector(".catalog__products-wrapper").children;
// var filtrationCatalog = function(itemsCatalog,filterInputs){
// 	var activeCheckboxes = [];
// 	console.log(filterInputs);
// 	for(var i=0; i<filterInputs.length;i++){
// 		if(filterInputs[i].checked)
// 		activeCheckboxes[i]=filterInputs[i].id;
// 	}
// 	console.log(activeCheckboxes);
// }

// filterForm.addEventListener("change", function(e){
// 	filtrationCatalog(catalogItems,catalogFiltres);
// });



// Кнопка вверх
var upBtn = document.querySelector(".up-btn");
upBtn.addEventListener("click",function(){
	window.scrollTo(0,0);
})




