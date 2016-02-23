var btn_form = document.querySelector(".offer-form-btn-big")
var popup = document.querySelector(".offer-form-popup")
var close = document.querySelector(".offer-form-btn-big")

btn_form.addEventListener("click", function(event){
    event.PreventDefault();
    popup.classList.add("offer-form-popup-show");
});

close.addEventListener("click", function(event){
    event.PreventDefault();
    popup.classList.remove("offer-form-popup-show");
}) 