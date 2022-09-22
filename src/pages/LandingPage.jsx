import React from 'react'
import Button from '../components/Button'
import Slide from '../components/Slide'
import bikeImg from '../images/bike-hero.png'

const LandingPage = () => {
  return (
    <>
      <div className="hero-sercion">
        <div className=' w-[80%] m-auto' >
          <div className="grid grid-cols-2">
            <div className='text-white mt-[8rem]'>
              <h1 className='font-semibold text-[4rem] leading-[4.5rem]' >Boost your <br /> Power Now</h1>
              <p className='mt-8 text-justify italic'>Our spacious and light fitness suites have dedicated areas
                for cardio, fixed weights, free weights, functional
                training, plate-loaded machines, lifting racks and cable motion.</p>
              <div className="mt-[4rem]">
                <Button>Learn More</Button>
              </div>
            </div>
            <div className='mt-[5rem]'>
              <img src={bikeImg} alt="" />
            </div>
          </div>
          <div className='text-white' >
            <h1>Blogs</h1>
            <Slide />
          </div>
        </div>
      </div>

      <section className='w-[80%] m-auto'>

      </section>
    </>
  )
}

export default LandingPage