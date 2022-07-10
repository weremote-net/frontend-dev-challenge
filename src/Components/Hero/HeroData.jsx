import React from 'react'
import '../../css/HeroData.css'

const HeroData = ({ text1, text2, text3 }) => {
  return (
    <section className='text-button'>
      <div className='text-wrapper'>
        <h1 className='textOne'>
          {text1}
        </h1>
        <h3 className='textTwo'>
          {text2}
        </h3>
        <h3 className='textThree'>
          {text3}
        </h3>
        
      </div>

    </section>
  )
}

export default HeroData
