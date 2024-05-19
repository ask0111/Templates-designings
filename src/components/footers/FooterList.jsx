import React from 'react'

export const FooterList = ({title, lists}) => {
  return (
    <div className='flex flex-col gap-2 w-[14%]'>
        <p className='mb-2'>{title}</p>

        {lists.map((list, index) => <a key={index} className='underline underline-offset-1 text-sm hover:bg-yellow-400 w-auto ' href='#'>{list}</a>)}
        
    </div>
  )
}
