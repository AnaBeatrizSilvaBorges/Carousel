//import logo from './logo.svg';
import { useState, useEffect, useRef} from 'react'
import './App.css';
import { motion } from 'framer-motion'
import image1 from './images/1.jpg'
import image2 from './images/metal.jpg'
import image3 from './images/plastico.jpg'
import image4 from './images/vidro.jpg'
import image5 from './images/organico.jpg'
import image6 from './images/eletronico.jpg'

const images = [image1, image2, image3, image4, image5, image6]
console.log(image1);


function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)
 
  useEffect (() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
 
  return (
    <div className="App">

        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div className="inner" 
          drag="x"
          dragConstraints={{ right: 0, left: -width}}
          >

            {images.map((item, index) => {
              return(
                <motion.div className="item" key={item}>
                  <img src={item} />
                  
                </motion.div>
                
              )
            })}
              
              
          </motion.div>
        </motion.div>

    </div>
  );
}

export default App;
