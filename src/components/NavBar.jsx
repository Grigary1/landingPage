import React from 'react'
import { motion } from 'framer-motion'
function NavBar() {
  return (
    <div className='w-4/5 mx-auto flex justify-between items-center pt-5'>
      <h1 className='text-xl font-bold'>LunarTech</h1>
      <motion.ul 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3,staggerChildren:0.1}}
      className='hidden md:flex items-center space-x-5'>
        <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          <a href="#">Portfolio</a>
        </motion.li>
        <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          <a href="#">Our Team</a>
        </motion.li>
        <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          <a href="#">Career</a>
        </motion.li>
        <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          <a href="#">About Us</a>
        </motion.li>
      </motion.ul>
      <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='px-5 py-2 border border-black hover:text-white hover:bg-violet-400 font-semibold rounded-full'>
        Register
      </motion.button>
    </div>
  )
}

export default NavBar
