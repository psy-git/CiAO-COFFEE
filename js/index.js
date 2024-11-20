window.addEventListener("load",function(){
    let swiper1 = new Swiper('.station1', {
        // Optional parameters
        // direction: 'vertical', //방향설정
        autheight:true,
        loop: true, //반복설정

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
        slidesPerView:1,
        autoplay: {
            delay:3000
        },
        speed:1000,

    });
    let swiper2 = new Swiper('.station2', {
        // Optional parameters
        // direction: 'vertical', //방향설정
        autheight:true,
        loop: true, //반복설정

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView:1,
        autoplay: {
            delay:3000
        },
        speed:1000,
    });

    const station3 = new Swiper(".station3",{
        loop:true,
        autoplay:true,
    })

    const station4 = new Swiper(".station4",{
        loop:true,
        effect:'fade',
        fadeEffect: {
            crossFade:true
        },
    })
    station3.on('slideChange', function () {
        // console.log(station3.realIndex);
        station4.slideToLoop(station3.realIndex)
    });

   
    //let,var,const 
})