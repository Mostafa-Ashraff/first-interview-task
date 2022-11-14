import './App.scss';
import load from "./Infinity-2.9s-244px.svg";
import Gallery from './components/gallery/Gallery';
import Home from './components/Home';
import Contact from './components/contact/Contact'
import { useState, useEffect, useRef } from "react";
//import useLocoScroll from './hooks/useLocoScroll';
//import useSmooth from './hooks/useSmooth';
function App() {
  const [loading, setloading] = useState(true)
  
  //useLocoScroll();

  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setloading(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  
  return (<>
  <div id='main-container'>
          <Home />
          <Gallery />
          <Contact />
  </div>

    </>

  );
}

export default App;
