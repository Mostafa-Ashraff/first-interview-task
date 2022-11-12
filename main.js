var tl = gsap.timeline({
    defaults:{
        duration: 1}
});

const text = new SplitType('#title')


tl.to(".box", {
    yPercent: -100,
    ease: "expo.easeInOut",
    })
    .from(".center-img", {
    scale: 3,
    x: 100,
    ease: "expo.easeInOut",
    }, '-=0.5')
    .to(".wrapper-img", {
        width: "500",
        height: "600",
        ease: "expo.easeInOut",

    }, '-=0.5')
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
    .fromTo('.char',{
        yPercent: 25,
        opacity: 0,
        },
        {opacity: 1,
        stagger: 0.1,duration: 0.2}
        ,'-=1')
    .from('.nav > div, .hero-container > div',{
    opacity: 0,
    y: 30,
    ease: "expo.easeInOut",
},'-=1')


    /*.from(".center-img", {
        opacity: 0,
        ease: "expo.easeInOut",
    }, '+=3')*/