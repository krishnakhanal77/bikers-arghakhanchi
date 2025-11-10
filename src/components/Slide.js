import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderCard from './SliderCard';
import { blogData } from '../data'

const Slide = () => {
  const data = blogData
 // console.log(data)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };
  return (
    <>
      <div className='pb-10 md:w-[100%] sm:w-[24rem] overflow-hidden'>
        <Slider {...settings}>

          {
            data.map(({ title, description, images }, index) => {
              return (
                <>
                  <div>
                    <SliderCard name={title} blogText={description} image={images[0]} key={index} id={index} />
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