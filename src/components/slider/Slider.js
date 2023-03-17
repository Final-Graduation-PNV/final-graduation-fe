import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: '/image/slide_1.jpg',
    caption: 'First Slide'
  },
  {
    url: '/image/slide_2.jpg',
    caption: 'Second Slide'
  },
  {
    url: '/image/slide_3.jpg',
    caption: 'Third Slide'
  },
];

const Slideshow = () => {
  return (
    <div className="slideshow">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className='slideshow__content' key={index}>
            <img src={fadeImage.url} />
            {/* <h2>{fadeImage.caption}</h2> */}
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow;