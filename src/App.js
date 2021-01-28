import React, { Component } from 'react'
import BackgroundSlider from 'react-background-slider'
import FormCard from './FormCard'
// import styled, {keyframes} from "styled-components"
// import { fadeInDown } from 'react-animations'
import Fade from 'react-reveal/Fade'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import image7 from './assets/image7.jpg'
import image8 from './assets/image8.jpg'
import image9 from './assets/image9.jpg'
import image10 from './assets/image10.jpg'

// const fade=styled.div`animation:2s ${keyframes`${fadeInDown}`} infinite`;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Fade top>
          <div className='card-container'>
            <FormCard />
          </div>
        </Fade>

        <BackgroundSlider
          images={[image1, image2, image3, image4, image5, image6,image7,image8,image9,image10]}
          duration={8}
          transition={2}
        />
      </div>
    )
  }
}

export default App