
	var link = document.querySelector(".search a");
	var	form = document.querySelector(".map form.form");

 	link.addEventListener("click", function (evt) {

 		evt.preventDefault();

 		//form.classList.add("form","form_hiden");
 		form.classList.toggle("form_hiden");
 		}); 