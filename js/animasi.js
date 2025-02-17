// import anime from 'animejs/lib/anime.es.js';

const tombol = document.querySelector(".theme_changer");

tombol.addEventListener("click", () => {
    console.log("pop")
    anime({
        targets: ".theme_changer",
        rotate: 360,
        duration: 5000,
        easing: "easeInOutSine",
    });
});
