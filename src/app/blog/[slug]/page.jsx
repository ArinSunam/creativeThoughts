import Image from 'next/image'
import React from 'react'

const SinglePostPage = () => {
  return (
    <div className='grid grid-cols-3'>
      {/* Img container */}
      <div className='col-start-1 col-end-2 relative w-[400px] mmd:hidden' style={{ height: 'calc(100vh - 200px)' }}>
        <Image src="/cat.jpg" alt='' fill className='object-cover' />
      </div>


      <div className='col-start-2 col-end-4 flex flex-col gap-[50px] mmd:col-start-1 mmd:col-end-4'>
        <h1 className='text-[64px]'>Title</h1>

        {/* athor details */}

        <div className='relative h-[50px] w-[50px] flex  gap-[20px]' >
          <Image src="/Nami Icon.jpeg" alt='' width={50} height={50} className='rounded-[50px]' />

          <div className='flex flex-col gap-[10px]'>
            <span className='text-[#777] font-bold'>Author</span>
            <span className='font-medium'>Nami swannn</span>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <span className='text-[#777] font-bold'>Published</span>
            <span className='font-medium'>01.01.2024</span>
          </div>
        </div>

        {/* Desc */}
        <div className='text-[16px] w-[50vw] mmd:w-[80vw]'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore cupiditate accusamus sed aliquid quo enim et asperiores dolore facilis rem.</p></div>

      </div>
    </div>
  )
}

export default SinglePostPage
