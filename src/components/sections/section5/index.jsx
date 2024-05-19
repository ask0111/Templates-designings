import React from 'react'
import { CardPrice } from './Card'

const section5Price = [
  {
    title: 'Premium',
    desc: 'Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.',
    sub: 'Starts at',
    delet: '₹23,000',
    price: '11,500',
    priceText: '/month for 12 months*',
    text: [
      'Phone & Priority Support',
      'Custom-coded and Pre-built Email Templates',
      'Multivariate and A/B Testing',
      'Enhanced Automated Customer Journeys',
      'Dedicated Personalized Onboarding',
      'Predictive Segmentation',
      'Campaign Manager',
    ],
    btn: 'Buy Now',

  },
  {
    title: 'Standard',
    desc: 'Sell even more with personalization, optimization tools, and enhanced automations.',
    sub: 'Starts at',
    delet: '₹1,150',
    price: '575',
    priceText: '/month for 12 months*',
    text: [
      '24/7 Email & Chat Support',
      'Custom-coded and Pre-built Email Templates      ',
      'Multivariate & A/B Testing',
      'Enhanced Automated Customer Journeys',
      'Personalized Onboarding',
      'Predictive Segmentation',
      'Campaign Manager',
    ],
    btn: 'Buy Now',
    clas:'scale-y-110 scale-x-105 bg-blue-500 shadow-lg shadow-blue-500/50'
  },
  {
    title: 'Essentials',
    desc: 'Send the right content at the right time with testing and scheduling features.',
    sub: 'Starts at',
    delet: '₹770',
    price: '385',
    priceText: '/month for 12 months*',
    text: [
      '24/7 Email & Chat Support',
      'Pre-built Email Templates',
      "A/B Testing",
      "Basic Automated Customer Journeys",
      "Personalized Onboarding",
      "Predictive Segmentation",
      "Campaign Manager",
    ],
    btn: 'Buy Now',
    start: true,
    line: 4
  },
  {
    title: 'Free',
    desc: 'Easily create email campaigns and learn more about your customers.',
    price: '0    ',
    priceText: '/month*    ',
    text: [
      'Email support for first 30 days',
      'Pre-built Email Templates',
      'A/B Testing',
      'Basic Automated Customer Journeys',
      'Onboarding',
      'Predictive Segmentation',
      'Campaign Manager',
    ],
    btn: 'Sign Up Free',
    start: true,
    line: 4
  },
]

export const SectionFifth = () => {
  return (
    <div className='mt-32 w-full sc5-1 flex py-16 flex-col gap-5'>
        <p className='text-center'>Limited Time Offer</p>
        <h1 className='text-5xl text-center  font-medium'>Save 50% for 12 months</h1>
        <div className='border flex w-[500px] m-auto'>
            <p className='py-1 whitespace-nowrap px-4 w-2/3 flex items-center'>How many contacts do you have?</p>
            <select
              id="country"
              className="block text-lg appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>500</option>
              <option>1000</option>
              <option>1500</option>
            </select>
        </div>

<div className='w-full p-20 flex'>
        {section5Price.map(({title, desc, delet, price, priceText, text, btn, clas, start, line}, index) =><CardPrice key={index} clas={clas} title={title} desc={desc} delet={delet} price={price} priceText={priceText} text={text} btn={btn} start={start} line={line} />)}

</div>
        <p className='text-center whitespace-nowrap text-xs'>*SeeOffer Terms Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more</p>
        <a  className="flex text-center justify-center items-center gap-2" href="#">
        See all plan details
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
