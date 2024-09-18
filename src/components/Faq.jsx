import { div } from 'framer-motion/client'
import React, { useState } from 'react'

function Faq() {
    const faqData=[
        {
            question: 'I don’t know the answer to this question',
            answer: 'Here is the answer to this question.'
        },
        {
            question: 'What is React?',
            answer: 'React is a JavaScript library for building user interfaces.'
        },
        {
            question: 'How does useState work?',
            answer: 'useState is a Hook that lets you add React state to function components.'
        }
    ]
    const[openFaq,setOpenFaq]=useState()

    const togglefaq=(index)=>{
        setOpenFaq(openFaq===index?null:index)
    }
  return (
    <div className='w-4/5 mx-auto my-5'>
      <h1>Frequently Asked Questions</h1>
      {
        faqData.map((faq,index)=>(
            <div className='space-y-5'>
                <div onClick={()=>togglefaq(index)} className='flex justify-between items-center'>
                    <h2>{faq.question}</h2>
                    <span className='cursor-pointer' >{openFaq===index?'-':'+'}</span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq===index?"max-h-40":"max-h-0"}`}>
                    <p className='text-slate-400'>{faq.answer}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Faq
