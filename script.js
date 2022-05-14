AOS.init();

window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    const btnScroll = document.querySelector("#btn-scroll");

    nav.classList.toggle("sticky", window.scrollY > 20 );
    btnScroll.classList.toggle("active", window.scrollY > 600);
    
});

const btnScroll = document.querySelector("#btn-scroll");
    btnScroll.addEventListener("click", function(){
    window.scrollTo(0, 0);
    console.log("click!");
});
