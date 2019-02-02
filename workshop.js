document.addEventListener("DOMContentLoaded", function(){

var company = document.querySelector("#navbar ul li");
var dropdown = document.querySelector(".dropdown-menu");
var expos = document.querySelectorAll(".expo");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var slides = document.querySelectorAll(".slider li");

// dropdown menu

company.addEventListener("mouseover", function(){
    dropdown.style.display="block";
    dropdown.style.display="flex";
});
company.addEventListener("mouseout", function(){
    dropdown.style.display="none";
});

// obrazki

for(i = 0; i < expos.length; i++) {
    expos[i].addEventListener("mouseover", function(){
        this.children[0].style.display = "none";
    });
    expos[i].addEventListener("mouseout", function(){
        this.children[0].style.display = "block";
    });
};

// slider

var index = 0;
    
    slides[index].classList.add("visible");

    prev.addEventListener("click", function() {
        slides[index].classList.add("visible");
        index--;
        if(index < 0){
            index = slides.length-1;
        }
        refreshImageStatus();
    });

    next.addEventListener("click", function() {
        //img[index].classList.remove("visible");
        index++;
        if(index >= slides.length){
            index = 0;
        }
        refreshImageStatus();
    });

    function refreshImageStatus() {
    
        var visible = document.querySelector('.visible');
        visible.classList.remove('visible');

        slides[index].classList.add("visible");

    };

});