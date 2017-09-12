var link = document.querySelector(".search a");
var	form = document.querySelector(".map form.form");


window.addEventListener("load", function(event) {
        if(!form.classList.contains("form_hiden")) {
            form.classList.add("form_hiden");
        }
    }
);


link.addEventListener("click", function(event) {
        event.preventDefault();

        if(form.classList.contains("form_hiden")) {

            form.classList.remove("form_hiden");
            form.classList.add("animation");
        }
         else {
            form.classList.remove("animation");
            form.classList.add("form_hiden");
         }
    }
);