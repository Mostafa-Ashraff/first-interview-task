import Scrollbar from 'smooth-scrollbar';


var tl = gsap.timeline({
    defaults:{
        duration: 1}
});

const Herotext = new SplitType('#title')

tl.to(".box", {
    yPercent: -100,
    ease: "expo.easeInOut",
    })
    .from(".center-img", {
    scale: 3,
    x: 100,
    ease: "expo.easeInOut",
    }, '-=1')
    .to(".wrapper-img", {
        width: "500",
        height: "600",
        ease: "expo.easeInOut",
        duration: 1
    }, '-=1')
    .to(".left", {
        x: -300,
        y: 50,
        rotation: -10,
        ease: "expo.easeInOut"
    }).to(".right", {
        x: 327,
        y: 56,
        rotation: 10,
        ease: "expo.easeInOut"
    }, '-=0.8')
    .to('.title',{
        opacity: 1
    }, )
    .fromTo('.char',{
        yPercent: 25,
        opacity: 0,
        },
        {opacity: 1,
        stagger: 0.1,duration: 0.2}
        ,'-=1')
    .fromTo('.nav > div, .hero-container > div',{
    opacity: 0,
    y: -30,
    ease: "expo.easeInOut",
},{
    y:0,
    opacity: 1,
},'-=1')
.to('.arrow-down',{
    opacity:1,
    y: 50,
    repeat:-1,    ease: "expo.easeInOut"})

let heroArrow = document.querySelector('.arrow-down');
heroArrow.addEventListener('click',()=>{
    tl.reverse(4);
    gsap.to(window, {delay:2, duration: 2, scrollTo: "#features"});
    //setTimeOut(tl.restart(true, false), 5000)

})
/*
if(tl.reversed){
    tl.play();
}*/
