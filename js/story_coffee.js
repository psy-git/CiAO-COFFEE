window.addEventListener("load",function(){
    // let rem = 20
    // 2*rem
    //자바스크립트에는 rem이라는 단위가 존재하지 않기 때문에 변수로 만들어서 변수를 사용한다
    const station5 = new Swiper(".station5",{
        slidesPerView: 1.2,
        spaceBetween: 14,
        breakpoints:{
            768:{
                slidesPerView:2.3,
                spaceBetween:18,
            },
            1280:{
                slidesPerView:4,
                spaceBetween:20,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })
})