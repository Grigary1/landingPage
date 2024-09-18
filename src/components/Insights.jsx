import { easeInOut } from 'framer-motion'
import { div } from 'framer-motion/client'
import React from 'react'
import { motion } from 'framer-motion'
import { SiDatabricks, SiGoogleassistant } from 'react-icons/si'

function Insights() {
    const InsightData = [
        {
            title: 'Productivity Enhancer',
            date: "July 2023",
            icon: SiGoogleassistant,
            desc: "Dynamic visibility tools built to drive engagement",
        },
        {
            title: 'Remote Assistance',
            date: "July 2023",
            icon: SiDatabricks,
            desc: "Dynamic visibility tools built to drive engagement",
        }
    ]
    const cardVarient = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: (i) * 0.2,
                duration: 0.5,
                ease: "easeInOut",
            }
        })
    }
    return (
        <div className='w-4/5 mx-auto py-20 flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0'>
            <div className='md:w-1/3 space-y-4'>
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 0.5 }}
                    className='text-2xl font-bold'>Industry Insights</motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 0.5 }}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    injected humour and the like
                </motion.p>
                <div className='flex items-center space-x-2'>
                    <img className='w-12 h-12 rounded-full border-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEs7laE3vwQVlZPZJ7EJZWX2vepjptypSRpQ&s" alt="" />
                    <div>
                        <h1 className='font-bold text-lg'>Michel Runner</h1>
                        <p className='text-sm text-gray-400'>CEO, Founder</p>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 justify-start items-start'>
                {
                    InsightData.map((item, index) => {
                        return (
                            <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount:0.5}}
                            variants={cardVarient}
                            key={index} className='w-full border border-gray-200 py-4 px-10 md:w-auto'>
                                <div className='flex justify-between '>
                                    <div className='flex items-center space-x-2'>
                                        <button>{item.icon()}</button>
                                        <h1 className='font-bold'>{item.title}</h1>
                                    </div>
                                    <p className='text-sm text-gray-500'>{item.date}</p>
                                </div>
                                <p className='text-gray-700'>{item.desc}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Insights
