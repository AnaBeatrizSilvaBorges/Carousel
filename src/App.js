//import logo from './logo.svg';
import { useState, useEffect, useRef} from 'react'
import './App.css';
import { motion } from 'framer-motion'
import image1 from '../src/images/explicação.png'
import image2 from '../src/images/papel.png'
import image3 from '../src/images/metal.png'
import image4 from '../src/images/plastico.png'
import image5 from '../src/images/vidro.png'
import image6 from '../src/images/eletronico.png'
import image7 from '../src/images/organico.png'

const images = [image1, image2, image3, image4, image5, image6, image7]
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
