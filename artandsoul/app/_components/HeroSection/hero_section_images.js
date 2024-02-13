import React from 'react'
import Image from 'next/image'

export const HeroSectionImages = () => {
  return (
    <div className='absolute'>
        <Image src="/firstPaint.jpg" width="200" height="500" className='rounded-[50%]'></Image>
        <Image src="/secondPaint.jpg" width="200" height="400" className='rounded-[50%]'></Image>
        <Image src="/thirdPaint.jpg" width="200" height="400" className='rounded-[50%]'></Image>
        <Image src="/secondPaint.jpg" width="200" height="400" className='rounded-[50%]'></Image>
        {/* <Image src="/firstPaint.jpg" width="200" height="400" className='rounded-[50%]'></Image> */}
    </div>
  )
}
