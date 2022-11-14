import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import img1 from '../../imgs/c1.jpg'
import "./gallery.scss";

const images = [
  {
    src:img1,
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div />
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div />
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);
/*
  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      gsap.registerPlugin(ScrollTrigger);
      // This does not seem to work without a settimeout
        let sections = gsap.utils.toArray(".gallery-item-wrapper");
        let horizontal = document.querySelector('.gallery')
        
        gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        pin: true,
        scrub: 1,
        snap: 1 / 5,
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: ()=> `+=${horizontal.offsetWidth}`,
      }
    });<div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
      ScrollTrigger.refresh();
    });
  }, []);
*/
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // This does not seem to work without a settimeout
      let sections = gsap.utils.toArray(".gallery");
      let horizontal = document.querySelector('.gallery-wrap')
      console.log(horizontal.offsetWidth)
gsap.to(horizontal, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      scroller: horizontal,  
      trigger: horizontal,
      pin: true,
      scrub: 1,
      snap:  1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: ()=> `+=${horizontal.offsetWidth}`,
      onUpdate: self => console.log("direction:", self.direction)
    }
  });        
  
      ScrollTrigger.refresh();
    },[]);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
    
  };

  return (
    <section className="section-wrapper gallery-wrap">

      

        {images.map((image, index) => (
            <div className="gallery" ref={ref}>
          <GalleryItem
            key={index}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
          </div>
        ))}
      
    </section>
  );
}