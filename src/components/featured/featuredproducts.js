import React from 'react'

import FavCarousel from './productscarousel'

function FeaturedProducts() {

  return (
    <>
      <div className="flex flex-col w-screen min-h-min justify-center items-center gap-6 bg-white font-Montserrat" >
        <section className='flex flex-col w-screen flex-[1_1_0%] justify-evenly items-center gap-[4em]'>
          <section className='flex flex-row w-screen justify-between items-center'>
            <span className='text-[60px] transform translate-x-[40px] md:text-[80px]  lg:translate-x-[4em]'>๐ธ</span>
            <span className='font-semibold text-[12px] md:text-[15px] 2xl:text-[20px] w-[150px] sm:min-w-max mr-[5em] '>{`// Find your happy in our new collection of boots & booties ๐ //`}</span>
          </section>
          <span className='font-semibold text-[12px] md:text-[15px] 2xl:text-[20px]  w-[150px] sm:min-w-max self-start ml-[3em]'>{`// Drop your summertime plans this weekend and be here in these new Nikes. . . ๐ //`}</span>
        </section>
        <section className='flex flex-1 flex-col w-screen justify-center items-center'>
          <h1 className='font-black text-[30px] tracking-[.2em] sm:self-end sm:mr-[2em] md:text-[40px] lg:text-[70px] '>{`WHAT'S HOT ๐ฅ`}</h1>
          <FavCarousel />
        </section>
        <section className='flex flex-1 flex-col w-screen justify-center items-center'>
          <section className='flex flex-row w-screen justify-between items-center'>
            <span className='font-semibold text-[12px] md:text-[15px] 2xl:text-[20px] w-[150px] sm:min-w-max ml-[5em] '>{`// New shoes are like new pillowsโthey just make a room feel brand new! //`}</span>
            <span className='text-[50px] transform -translate-x-[50px] lg:-translate-x-[4em] lg:text-[80px] '>๐</span>
          </section>
          <section className='flex flex-row w-screen justify-between items-center py-[2em]'>
            <span className='text-[50px] lg:text-[80px] transform translate-x-[50px]  lg:translate-x-[3em]  '>๐ค</span>
            <span className='font-semibold text-[12px] md:text-[15px] 2xl:text-[20px] w-[150px] sm:min-w-max mr-[5em]'>{`// Just because youโve got a new pair of kicks doesnโt mean you`} <br/>{`no longer have to go the extra mile. //`}</span>
          </section>
        </section>
      </div>
    </>
  )
}

export default FeaturedProducts