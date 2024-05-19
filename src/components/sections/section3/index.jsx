import React from 'react'

export const SectionThree = () => {
  return (
    <div className='w-full border py-20 flex h-[100vh] sc3-1 text-white'>
        <div className='w-[44%] p-28  flex flex-col gap-3 justify-center'>
            
            <h1 className='font-semibold text-4xl '>Find out why we’re best-in-class</h1>
            <p className='text-2xl'>The #1 email marketing and automations platform* that recommends ways to get more opens, clicks, and sales.</p>
        </div>
        <div className='flex flex-wrap items-center justify-center w-[60%]'>
            <div className='w-1/2'>
                <h1 className='text-2xl mb-2 font-medium'>Up to 25x ROI</h1>
                <p className='text-md'>seen by Mailchimp users*</p>
            </div>
            <div className='w-1/2'>
                <h1 className='text-2xl mb-2 font-medium'>22 years experience</h1>
                <p className='text-md'>helping businesses sell more</p>
            </div>
            <div className='w-1/2'>
                <h1 className='text-2xl mb-2 font-medium'>11M+ Users</h1>
                <p className='text-md'>of Mailchimp globally</p>
            </div>
            <div className='w-1/2'>
                <h1 className='text-2xl mb-2 font-medium'>$1.7K per campaign</h1>
                <p className='text-md'>generated on average*</p>
            </div>
            
        </div>
    </div>
  )
}
