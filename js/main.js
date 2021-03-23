document.querySelector(".menu-btn").addEventListener("click", () => {
     document.querySelector(".nav-menu").classList.toggle("show");
});

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = true;
menuBtn.addEventListener("click", () => {
     if (menuOpen) {
          menuBtn.classList.add("open");
          menuOpen = false;
     } else {
          menuBtn.classList.remove("open");
          menuOpen = true;
     }
});
//scroll-up

document.getElementById("buttonUp").addEventListener("click", scrollUp);

function scrollUp() {
     var currentScroll = document.documentElement.scrollTop;
     if (currentScroll > 0) {
          requestAnimationFrame(scrollUp);
          window.scrollTo(0, currentScroll - currentScroll / 10);
          buttonUp.style.transform = "scale(0)";
     }
}

buttonUp = document.getElementById("buttonUp");
window.onscroll = function () {
     var scroll = document.documentElement.scrollTop;
     if (scroll > 100) {
          buttonUp.style.transform = "scale(1)";
     } else if (scroll < 100) {
          buttonUp.style.transform = "scale(0)";
     }
};

/*ScrollReveal().reveal(".nav-main", { delay: 0.1 });
ScrollReveal().reveal(".div-logo", { delay: 0.1 });
ScrollReveal().reveal(".news-cards", { delay: 0.1 });
ScrollReveal().reveal(".social", { delay: 0.1 });
ScrollReveal().reveal(".footer", { delay: 0.1 });*/
