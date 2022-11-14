//import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Scrollbar from 'smooth-scrollbar';
import c1 from '../imgs/c1.jpg'
import '../style.css';
import SplitType from 'split-type';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
//gsap.registerPlugin(ScrollToPlugin);


/*


*/

/*
gsap.to('.features',{
    scrollTrigger: {
        trigger: '.features',
        scrub: true,
        animation: tl.play()
}

})
*/

/*
if(tl.reversed){
    tl.play();
}*/
/*
var tl2 = gsap.timeline({ scrollTrigger: {

}});

const featurestext = new SplitType('#features-p', { types: 'words' });


    
/*
gsap.fromTo('#features-p>.word', {
        xPercent: -100,
        ease: "expo.easeInOut",
        stagger: 1,
},{
        scrollTrigger: {
            trigger: '.word',
            markers: true,
            start: "top center"
        },
        xPercent: 100,
        backgroundPositionX: "0%",
        ease: "expo.easeInOut",
        duration: 3,
        stagger: 1,/*
        scrollTrigger: {
        
        markers: true,
        scrub: 1,
        start: "top center",
        end: "bottom top",
        },
    });*/


/*
words.forEach(word => {
    tl2.to(word,{
        scrollTrigger: {
            trigger: word,
        },
        backgroundPositionX: "0%",
        stagger: 1,

    });
});
*/

/**************/ 



const Home = () => {
    
useEffect(()=>{

    let tl = gsap.timeline({
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
    
    
    let words = gsap.utils.toArray('.side-txt> p');
    words.forEach((word)=>{
        gsap.to(word, { 
            position: 'sticky',
            x:300,
            color: 'rgb(14, 13, 12)',
            stagger: 1,
            ease: 'expo.easeInOut',
            duration: 1,
            scrollTrigger: {
                trigger: word,
                markers: true,
                scrub: 1,
                start: "top center",
                end: "bottom 80%",
            },
        })
    })
},[])
    return (<>
        <section  className="hero">
        <div className="container">
            <nav className="nav">
                <div className="nav-left nav-item">
                    <span className="nav-link">about</span>
                    <span className="nav-link">contact</span>
                </div>
                <div className="nav-center nav-item">
                    <h2 className="logo">CrimsonRose</h2>
                </div>
                <div className="nav-right nav-item">
                    <span className="nav-link">Process</span>
                </div>
            </nav>
            <div className="images">
                <div className="img left"></div>
                <div className="img right"></div>
            </div>
            <div className="hero-img">
                <div className="wrapper-img">
                    <div className="box"></div>
                    <div>
                        <img src={c1} alt="house" className="center-img" />
                    </div>
                </div>
            </div>
            <header>
                <h1 className="title" id="title">CrimsonRose</h1>
            </header>
            <div className="hero-container">
                <div className="sidebar-text">003</div>
                <div className="projects">projects</div>
                <div className="img-nav">
                    <div className="prev">prev</div>
                    <div className="next">next</div>
                </div>
            </div>
            <div className="arrow-down"></div>
        </div>
    </section>
    <section id="features" className="features">
        <div className="main">
            <div className="side-txt">
                <p >WHAT</p>
                <p>DO</p>
                <p>WE </p>
                <p>DO?</p>
            </div>
            <section className="features-dis">
            </section>
        </div>
    </section>

    </>
        
    );
}

export default Home;
/*

/**    <section className="gallery-wrap section-wrapper">
        <div className="gallery">
        <div className="gallery-counter"></div>
        
        </div>
    </section> 
    
    
    gallery.map(({src, title, subtitle, category}, index)=>{
    let div = document.createElement('div');
    div.classList.add='gallery-item-wrapper'
    div.innerHTML =`
    <div className="gallery-item">
            <div className="gallery-item-info">
                <h1 className="gallery-info-title">${title}</h1>
                <h6 className="gallery-info-subtitle">${subtitle}</h6>
                <p className="gallery-info-category">${category}</p>
            </div>
            <div className="gallery-item-img">

            </div>
        </div>
    `
    let galleryDiv = document.querySelector('.gallery') 
    galleryDiv.appendChild(div);
    let galleryDivImg = document.querySelector('.gallery-item-img') 
    galleryDivImg.style.backgroundImage = `url('${src}')`
})*/