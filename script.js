//
// 화면 슬라이드 ===============================================================

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("main-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}

// 로컬메뉴 스크롤시 상단고정 함수 ===============================================================

window.addEventListener("scroll", function () {
  var lnb = document.getElementById("main_lnb");
  var lnbOffsetTop = lnb.offsetTop;
  if (window.scrollY > lnbOffsetTop) {
    lnb.style.top = "0";
    lnb.style.backgroundColor = "rgba(255, 255, 255,)"; // 배경색을 고정합니다
  } else {
    lnb.style.top = "138px";
    lnb.style.backgroundColor = "rgba(255, 255, 255,)"; // 배경색을 고정합니다
  }
});
