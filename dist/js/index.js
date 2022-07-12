 const data =[
        [
            "dist/img/00.jpg",
            "http://www.google.com.tw"
        ],
        [
            "https://picsum.photos/id/1033/1400/400",
            "http://www.yahoo.com.tw"
        ],
        [
            "https://picsum.photos/id/1031/1400/400",
            "http://www.facebook.com.tw"
        ],
        [
            "https://fakeimg.pl/1400x400/",
            "http://www.msn.com.tw"
        ],
 ]

const carouselInner = document.querySelector(".carousel-inner")

function carousal(data) {
  let html = "";
  for (let i = 0; i < data.length; i++) {
      html += `<div class="carousel-item">`;
      html += `<a class="soe_photoLink" href=${data[i][1]} target=_blank><div class="soe_resImg" style=" background-image:url('${data[i][0]}')"></div></a>`;
      html += "</div>";
      if (i == 9) {
          break;
      }
    }
    carouselInner.innerHTML = html
  carouselInner.firstElementChild.classList.add("active")
  append_li();
}


    
const total = document.querySelectorAll('.carousel-item').length
function append_li() {
  //下方自動加入控制圓鈕
  let li = "";
  const carouselItem = document.querySelectorAll(".carousel-item")
  carouselItem.forEach((item,i) => {
    if (i == (i) / 2) {
      li += `<button type="button" data-bs-target="#js_Carousel" class="active" data-bs-slide-to="${i}" class="active" aria-current="true"></button>`;
    } else {
      li += `<button type="button" data-bs-target="#js_Carousel" data-bs-slide-to="${i}"></button>`;
    }
  })
  $(".carousel-indicators").append(li);

}

//單則隱藏控制鈕
if (total.length < 2) {
    $('.carousel-indicators').hide();
}

function init() {
  carousal(data)
}
init()

$(function () {
  $('.js-slicker').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
    dots: true,
  })
})