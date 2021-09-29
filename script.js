// navbar
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
// const navBarlist =document.querySelector('.nav-list');
menu.addEventListener('click',()=>{
    navbar.classList.toggle('change')
    menu.classList.toggle('change')

    // navBarlist.classList.add('.change.nav-link')
})
// End of Navbr

//video play pause

const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playpause = () =>{
    if(video.paused){
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '.7'
    }else{
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
}

btn.addEventListener('click', () => {
    playpause()
})

video.addEventListener('timeupdate', () => {
    // console.log(video.currentTime, video.duration)
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100 }%`
    if(video.ended){
        btn.className = 'far fa-play-circle'
        video.style.opacity ='.3'
    }
})

// Section3 pricing cards
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  });