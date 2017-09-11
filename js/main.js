
	var link = document.querySelector(".search a");
	var	form = document.querySelector(".map form.form");
	
	form.classList.add("form_hiden"); //добавляем класс скрывающий форму
		
	link.addEventListener("click", function (evt) { //отлавливаем нажатие ссылки
 		
 		evt.preventDefault();
 		form.classList.toggle("form_hiden");
 		if(!form.classList.contains("animation")){
 			form.classList.add("animation");
 			}
 		
 	}); 
 	