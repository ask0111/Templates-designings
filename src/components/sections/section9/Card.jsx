import React from 'react'

export const Card = ({title, desc, img}) => {
  return (
    <div className='w-[31%] flex px-4 items-center'>
        <div className='h-[100px] w-[130px] border'>
            <img  className='img-full' src={img} />
        </div>
        <div className='w-full px-4'>
            <h1 className='font-medium text-lg'>{title}</h1>
            <p className='text-xs mt-1'>{desc}</p>
        </div>
    </div>
  )
}
