import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderCard from './SliderCard';
import { blogData } from '../data'

const Slide = () => {
  const data = blogData
  console.log(data)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };
  return (
    <>
      <div className='pb-10'>
        <Slider {...settings}>

          {
            data.map(({ blogText, image, name, id, location}) => {
              return (
                <>
                  <div>
                    <SliderCard name={name} blogText={blogText} image={image} key={id} location={location} />
                  </div>
                </>
              )
            })
          }

        </Slider>
      </div>
    </>
  )
}

export default Slide