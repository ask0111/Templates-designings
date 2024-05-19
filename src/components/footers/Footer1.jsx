import React from "react";
import { FooterList } from "./FooterList";

const Footer1Data = [
  {
    title: 'Products',
    lists: [
      'Why Mailchimp?',
      'Product Updates',
      'Email Marketing',
      'Websites',
      'Transactional Email',
      'How We Compare',
      'GDPR Compliance',
      'Security',
      'Status',
      'Mobile App',
    ]
  },{
    title: 'Resources',
    lists: [
      'Marketing Library',
      'Free Marketing Tools',
      'Marketing Glossary',
      'Integrations Directory',
    ]
  },
  {
    title: 'Community',
    lists: [
      'Agencies & Freelancers',
      'Developers',
      'Events'
    ]
  },
  {
    title: 'Company',
    lists: [
      'Our Story',
      'Newsroom',
      'Give Where You Live',
      'Careers',
      'Accessibility',
    ]
  },
  {
    title: 'Help',
    lists: [
      'Contact Us',
      'Hire an Expert',
      'Help Center',
      'Talk to Sales',
    ]
  }
]

export const Footer1 = () => {
  return (
    <div className="flex flex-col gap-8">
      <div style={{borderBottom: '.2px solid black'}} className="flex gap-6 justify-center items-center py-16 border-b-2 ">
        <span className="font-medium text-lg">Related Links:</span>
        <a href="#" className='underline underline-offset-1 text-sm hover:bg-yellow-400 w-auto '>What is SEO?</a>
        <a href="#" className='underline underline-offset-1 text-sm hover:bg-yellow-400 w-auto '>Make Money Online</a>
        <a href="#" className='underline underline-offset-1 text-sm hover:bg-yellow-400 w-auto '>ChatGPT: What to Know About This AI Content Writing Tool</a>
      </div>
      <div style={{borderBottom: '.2px solid black'}}  className="flex gap-4 px-32 py-16">
        {Footer1Data.map(({title, lists}, index)=> <FooterList key={index} title={title} lists={lists} />)}
        
        <div className="w-[250px]">
          <img src="" />
          <span className="">
            Films, podcasts, and original series that celebrate the
            entrepreneurial spirit.
          </span>
          <a className="flex text-center items-center gap-2" href="#">
            Check it out
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
      </div>
      
    </div>
  );
};
