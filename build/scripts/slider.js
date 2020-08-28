let slide = document.getElementsByClassName("slide__wrapper");
let current = document.getElementsByClassName("current");
let defaultSlide = (slide.length - (slide.length % 2)) / 2;
let defaultPos = defaultSlide * 100;
let thisPos = 0;

setTimeout(sliderGear(0), 0);

function currentSlider(id) {
  for (let i = 0; i < current.length; i++) {
    if (current[i].classList.contains("currentOn")) {
      current[i].classList.remove("currentOn");
    }
  }

  thisPos = id;
  buttonOp();

  slide[0].style.marginLeft = thisPos + "%";
  let av = -id / 100;
  current[av].classList.add("currentOn");
}

function sliderGear(next) {
  if (thisPos == (-slide.length + 1) * 100 && next == -100) {
    return;
  }

  if (thisPos == 0 && next == 100) {
    return;
  }

  thisPos = thisPos + next;

  buttonOp();

  for (let i = 0; i < current.length; i++) {
    if (current[i].classList.contains("currentOn")) {
      current[i].classList.remove("currentOn");
    }
  }
  current[-thisPos / 100].classList.add("currentOn");
  slide[0].style.marginLeft = thisPos + "%";
}

function buttonOp() {
  if (thisPos == 0) {
    document.querySelector(".slider_prev").style.opacity = "20%";
  } else {
    document.querySelector(".slider_prev").style.opacity = "100%";
  }

  if (thisPos == (-slide.length + 1) * 100) {
    document.querySelector(".slider_next").style.opacity = "20%";
  } else {
    document.querySelector(".slider_next").style.opacity = "100%";
  }
}

/** Slider number 2 **/
let slider2 = document.querySelectorAll(".slider2__slide");
let defPosSlider2 = 0;
let nextButton;
let nextSlideW = 200;

function slider2Gear(np) {
  nextButton = nextSlideW * np;
  defPosSlider2 = defPosSlider2 + nextButton;

  control2();
  slider2[0].style.marginLeft = defPosSlider2 + "px"; 
}

function control2() {
let offsetW = document.querySelector(".slider2__tracks").offsetWidth;

  if (defPosSlider2 > 0 && defPosSlider2 != nextSlideW){
    defPosSlider2 = 0;
  }
  if (defPosSlider2 == nextSlideW) {
    defPosSlider2 = (slider2.length * 350 * -1) + offsetW;

  }


  if (defPosSlider2 < (slider2.length * 350 * -1) + offsetW && defPosSlider2 != (slider2.length * 350 * -1) + offsetW - nextSlideW){
    defPosSlider2 = (slider2.length * 350 * -1) + offsetW;

  }
  if (defPosSlider2 == (slider2.length * 350 * -1) + offsetW - nextSlideW) {
    defPosSlider2 = 0;

  }
}
