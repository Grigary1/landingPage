import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Stats from './components/Stats'
import Faq from './components/Faq'
function App() {
  return (
    <div className='bg-custom-gradient'>
      <NavBar/>
      <Hero/>
      <Insights/>
      <Stats amount='Stay Focused' desc='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like reada ble English. Many desktop publishing packages'/>
      <Faq/>
    </div>
  )
}

export default App
