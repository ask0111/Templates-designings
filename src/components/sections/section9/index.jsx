import React from 'react'
import { Card } from './Card'


const section9Data = [
  {
    title: 'Canva',
    desc: 'Create compelling visuals for your marketing.',
    img: '/img/section9/1.avif'
},
  {
   
    title: 'Mailchimp for Salesforce',
    desc: 'Sync your Mailchimp subscribers and Salesforce® leads across platforms.    ',
    img: '/img/section9/2.avif'
},
{
  title: 'Instagram',
  desc: 'Promote and share your Instagram posts in email campaigns.',
  img: '/img/section9/3.avif'
},
{
  
  title: 'Shopify',
  desc: 'Sync Shopify customers, products, and purchase data to Mailchimp.',
  img: '/img/section9/4.avif'
},
{
  
  title: 'Google Analytics  ',
  desc: 'Unlock powerful insights with campaign, website, or landing page data.  ',
  img: '/img/section9/5.avif'
},
{
  
  title: 'WooCommerce  ',
  desc: 'Power your ecommerce store with smart marketing features.',
  img: '/img/section9/6.avif'
},
{
  
  title: 'QuickBooks Online  ',
  desc: 'Bring together your marketing tools and invoice data.  ',
  img: '/img/section9/7.avif'
},
{
  title: 'Squarespace Commerce  ',
  desc: 'Market your ecommerce business and drive sales.  ',
  img: '/img/section9/8.avif'
},
{
  
  title: 'Zapier',
  desc: 'Automatically pass data between web services without a single line of code.',
  img: '/img/section9/9.avif'
},
]

export const SectionNine = () => {
  return (
    <div className='px-16 py-16 '>
        <h1 className='text-4xl font-medium w-[50%]'>Bring in more data, drive more growth with our integrations</h1>
        <div className='flex flex-wrap w-full px-4 py-16 gap-x-4 gap-y-8'>
           {section9Data.map(({title, desc, img}, index)=> <Card key={index} title={title} desc={desc} img={img} />) }
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
        </div>
        <a  className="flex text-center items-center gap-2" href="#">
        View all 300+ integrations
          <span className="rounded-full flex p-1 bg-pr-cl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </span>
        </a>
    </div>
  )
}
