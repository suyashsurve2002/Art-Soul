import React from 'react'
import Image from 'next/image'

export const FeaturedImageSwiper = () => {
  return (
    <div className='flex justify-center items-center mt-[50px]'>
        <div className='flex gap-[50px]'>
        
          <Image src="/lastSectionImage.jpg" height="230" width="165" className='rounded-[500px] translate-y-[240px] rotate-[-20deg]'></Image>
          <Image src="/lastSectionImage.jpg" height="230" width="165" className='rounded-[500px] translate-y-[160px] rotate-[-20deg]'></Image>
          <Image src="/lastSectionImage.jpg" height="230" width="165" className='rounded-[500px] translate-y-[80px] rotate-[-15deg]'></Image>
          <Image src="/lastSectionImage.jpg" height="230" width="165" className='rounded-[500px]'></Image>
          <Image src="/lastSectionImage.jpg" height="230" width="165" className='rounded-[500px] translate-y-[80px] rotate-[15deg]'></Image>
          <Image src="/lastSectionImage.jpg" height="230" width="165" className='rounded-[500px] translate-y-[160px] rotate-[20deg]'></Image>
          <Image src="/lastSectionImage.jpg" height="230" width="165" className='rounded-[500px] translate-y-[240px] rotate-[20deg]'></Image>
        </div>
    </div>
  )
}
