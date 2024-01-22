import { useState } from 'react'
import Store from './DiscoverData'

function Discover() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const Backward = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 0 : currentIndex-1;
    setCurrentIndex(newIndex)

  }

  const Forward = () =>{
    const isLastSlide = currentIndex === Store.length - 1;
    const newIndex = isLastSlide ? Store.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex)
    
  }

  return (
    <div className=' md:px-8  '>
      <div className='md:flex '>
        <div className='md:flex relative'>
          {Store[currentIndex].image}
          <div className='md:hidden absolute right-0 bottom-0'>
              <button onClick={Backward} className='bg-black hover:bg-gray-500 px-5 py-5'><img src="/aboutImages/icon-angle-left.svg" alt="" /></button>
              <button onClick={Forward} className='bg-black hover:bg-gray-500 px-5 py-5'><img src="/aboutImages/icon-angle-right.svg" alt="" /></button>
          </div>
        </div>
        <div className='md:relative md:w-3/6 pt-5 md:pt-0'>
          <div className=' md:px-20 px-4'>
            <h1 className='md:text-4xl text-xl font-bold mb-5 md:mt-24'>{Store[currentIndex].title}</h1>
            <p className='mb-5 text-slate-500'>{Store[currentIndex].description}</p>
            <div className='flex gap-5 text-slate-500'>
              <p className='text-lg mb-3 '>SHOP NOW </p>
              <img src="/aboutImages/icon-arrow.svg" alt="" className='hover:text-slate-500' />
            </div>
          </div>
          <div className='md:flex absolute left-0 bottom-0 hidden'>
            <button onClick={Backward} className='bg-black hover:bg-gray-500 px-5 py-5'><img src="/aboutImages/icon-angle-left.svg" alt="" /></button>
            <button onClick={Forward} className='bg-black hover:bg-gray-500 px-5 py-5'><img src="/aboutImages/icon-angle-right.svg" alt="" /></button>
          </div>
        </div>
      </div>  

      <div className='grid md:grid-cols-3 mt-5 md:mt-0'>
        <div >
          <img src="/aboutImages/image-about-dark.jpg" alt="" />
        </div>
        <div className='py-10 px-5 '>
          <h1 className='text-xl font-bold mb-3'>About our furniture</h1>
          <p className='text-slate-500'>Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <div>
          <img src="/aboutImages/image-about-light.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Discover
