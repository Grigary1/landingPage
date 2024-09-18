import React from 'react'
import { IoPlay } from 'react-icons/io5'
import lamp from '../assets/lamp.png'
import { delay, motion } from 'framer-motion'
function Hero() {
    const textVarient = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1, x: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            }
        }
    }
    const buttonVarient = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.2,
                ease: "easeInOut",
            }
        }
    }
    const imageVarient = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1, x: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            }
        }
    }
    return (
        <div className='w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>
            <div className='md:w-1/2 space-y-6'>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={textVarient}>
                    ___Innovation Requires Courage</motion.p>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={textVarient}
                    className='text-5xl md:text-7xl font-bold'>Being Innovators Requires Courage</motion.h1>
                <p>
                    Understanding your Capacity for risk can guide your buiseness into
                    untapped opportunities, helping you navigate growth
                </p>
                <div className='flex space-x-5'>
                    <motion.button className='px-5 py-3 rounded-full font-semibold bg-black text-white'>Book</motion.button>
                    <motion.button
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.5}}
                    variants={buttonVarient}
                    className='flex space-x-4 items-center'>
                        <span className='w-8 h-8 flex justify-center items-center bg-black text-white rounded-full'><IoPlay /></span><span>Watch Video</span>
                    </motion.button>
                </div>
            </div>
            <div className='w-1/3 md:w-1/3'>
                <motion.img 
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                variants={imageVarient}
                src={lamp} alt="" className='w-full object-contain' />
            </div>
        </div>
    )
}

export default Hero
