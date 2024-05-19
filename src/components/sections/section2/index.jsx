import React from 'react'
import { Seaction2Card } from './card'

const section2Data = [
    {
        title: "Convert with email automations",
        img: '/img/section2/1.avif',
        desc: 'Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.',
        btn: 'Explore marketing automation',
        bgcolor: 'sc2-1',
    },
    {
        title: 'Create faster with generative AI',
        img: '/img/section2/2.avif',
        desc: 'Effortlessly create on-brand content with generative AI tools and choose from expertly designed templates.',
        btn: 'Explore AI tools  ',
        bgcolor: 'sc2-2',
    },
    {
        title: 'Refine with segmentation',
        img: '/img/section2/3.avif',
        desc: 'Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes.',
        btn: 'Explore audience management',
        bgcolor: 'sc2-3',
    },
    {
        title: 'Optimize with analytics & reporting',
        img: '/img/section2/4.avif',
        desc: 'Analyze performance with custom reports, funnel visualizations, and industry benchmarking.',
        btn: 'Explore analytics & reporting',
        bgcolor: 'sc2-4',
    },
];

export const SectionTwo = () => {
  return (
    <div className=' w-full flex'>
        {section2Data.map(({title, img, desc, btn, bgcolor}) => <Seaction2Card title={title} img={img} desc={desc} btn={btn} bg={bgcolor} />)}
    </div>
  )
}
