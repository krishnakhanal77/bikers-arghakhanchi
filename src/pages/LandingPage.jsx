import React from 'react'
import Button from '../components/Button'
import ExploreDestinationCard from '../components/ExploreDestinationCard'
import Slide from '../components/Slide'
import bikeImg from '../images/bike-hero.png'

const LandingPage = () => {
  return (
    <>
      <div className="hero-sercion">
        <div className='xl:w-[70%] lg:w-[80%]  md:w-[80%] xs:w-[95%] m-auto' >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className=' xs:order-2 sm:mt-[4rem] md:mt-[8rem] text-white'>
              <h1 className='sm:font-medium sm:text-[2rem] md:font-semibold md:text-[4rem] md:leading-[4.5rem]' >Boost your <br /> Power Now!!</h1>
              <p className='mt-8 text-justify italic'>Riding a motorcycle is a tribute, a tip of the helmet as it were, to our rugged ancestors who challenge us through the dust of centuries, proof that we have succumbed to the safety nets of civilization.”</p>
              <div className="mt-[4rem]">
                <Button>Learn More</Button>
              </div>
            </div>
            <div className='mt-[5rem]  xs:order-first sm:order-last md:order-last lg:order-last '>
              <img src={bikeImg} alt="" />
            </div>
          </div>
          <div className='text-white' >
            <h1 className='mb-3'>Blogs</h1>
            <Slide />
          </div>
        </div>
      </div>
      <section>
        <div className='md:w-[80%] xs:w-[95%] m-auto'>
          <h1 className='mt-8 font-medium  text-gray-700'>Explore Our Nearest Destinations</h1>
          <ExploreDestinationCard />
        </div>
      </section>
    </>
  )
}

export default LandingPage