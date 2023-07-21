current = 0;
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselItemWidth = carouselItems[0].offsetWidth;
let currentPosition = 0;

const showNext = () => {
  ele = document.getElementsByClassName("img");
  imgLen = ele.length;

  console.log("ele", ele);
  console.log("imgLen", imgLen);

  next = current + 1;
  prev = current - 1;
  next = imgLen === next ? 0 : next;
  prev = prev < 0 ? imgLen - 1 : prev;

  ele[prev].classList = "img";
  ele[current].classList = "img shownext"; // add shownext class to current img element
  ele[next].classList.add("shownext");

  current = imgLen - 1 === current ? 0 : current + 1;

  ele = document.getElementsByClassName("img-right");
  imgLen = ele.length;

  next = current + 1;
  next = imgLen === next ? 0 : next;

  for (let i = 0; i < imgLen; i++) {
    ele[i].classList.remove("shownext");
    ele[i].classList.add("hiddenext");
  }

  ele[next].classList.remove("hiddenext");
  ele[next].classList.add("shownext");

  current = next;
};

const whiteMask = document.createElement("div");
whiteMask.classList.add("white-mask");
document.querySelector(".hero-left").appendChild(whiteMask);

const showWhiteMask = () => {
  whiteMask.classList.add("show");
};

const hideWhiteMask = () => {
  whiteMask.classList.remove("show");
};

const onClickNext = () => {
  showWhiteMask();

  ele = document.getElementsByClassName("img");
  imgLen = ele.length;

  next = current + 1;
  prev = current - 1;
  next = imgLen === next ? 0 : next;
  prev = prev < 0 ? imgLen - 1 : prev;

  ele[prev].classList = "img";
  ele[current].classList = "img";
  ele[current].classList.add("hidenext");
  ele[next].classList.add("shownext");

  current = imgLen - 1 === current ? 0 : current + 1;

  const carousel = document.querySelector(".carousel");
  carousel.scrollLeft += carousel.clientWidth;

  const lastItem = carousel.lastElementChild;
  carousel.scrollLeft += lastItem.clientWidth;
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
    carousel.scrollLeft = 0;
  }

  setTimeout(hideWhiteMask, 500);
};

const onClickBack = () => {
  showWhiteMask();

  ele = document.getElementsByClassName("img");
  imgLen = ele.length;

  prev = current + 1;
  next = current - 1;
  next = next < 0 ? imgLen - 1 : next;
  prev = imgLen === prev ? 0 : prev;

  ele[prev].classList = "img";
  ele[current].classList = "img";
  ele[next].classList.add("showback");
  ele[current].classList.add("hideback");

  // check if the first item in the right carousel is visible
  const carousel = document.querySelector(".carousel");
  const firstItem = carousel.firstElementChild;
  if (firstItem.clientWidth + firstItem.offsetLeft >= carousel.scrollLeft) {
    carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
  }

  if (current === 0) {
    current = imgLen - 1;
  } else {
    current--;
  }

  // move the scroll position 1 item to the left
  carousel.scrollLeft -= carousel.clientWidth;

  setTimeout(hideWhiteMask, 500);
};

// show the first image by default on page load
showNext();
