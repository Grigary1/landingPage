import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import {motion} from 'framer-motion'
function Stats(props) {
    const imageVarient={
        hidden:{opacity:0,x:-50,scale:1},
        visible:{
            opacity:1,x:0,scale:1.1,
            transition:{
                ease:"easeInOut"
            }
        }
}
  return (
    <div className=' py-20 bg-white/50'>
      <div className='w-4/5 m-auto flex flex-col md:flex-row space-x-10 items-center justify-between space-y-10 md:space-y-0'>
        <div className='md:w-1/3'>
            <motion.img 
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.5}}
            variants={imageVarient}
            className='rounded-tr-[50px] rounded-bl-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEs7laE3vwQVlZPZJ7EJZWX2vepjptypSRpQ&s" alt="" />
        </div>
        <div className='md:w-1/2 space-y-8'>
            <h1 className='text-4xl md:text-6xl font-semibold'>{props.amount}</h1>
            <p className='md:text-xl'>
                {""}
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like reada
                ble English. Many desktop publishing packages
                {props.desc}
            </p>
            <div className='flex flex-col space-y-5'>
                <div className='flex items-center  space-x-2'>
                    <span><FaChartLine/></span>
                    <h1>Data Validation</h1>
                </div>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                 Many desktop publishing packages
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
