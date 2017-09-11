var link = document.querySelector(".search a");
var	form = document.querySelector(".map form.form");
form.classList.add("form_hiden"); //добавляем класс скрывающий форму
link.addEventListener("click", function (evt) { 
	evt.preventDefault();
if(form.classList.contains("form_hiden")&&!form.classList.contains("animation")&&!form.classList.contains("animation_close")){
	form.classList.toggle("form_hiden");
	form.classList.add("animation");
}else {
	form.classList.toggle("animation");
	form.classList.toggle("animation_close");
	form.classList.toggle("form_hiden");
}
}); 
