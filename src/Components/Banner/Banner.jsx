import React from 'react'
import "./Banner.css"


function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae culpa minima hic doloribus perferendis recusandae quae, magnam nisi, est fugiat quibusdam amet ipsum veritatis fugit, modi repellat error illum!</h1>

        </div>

    </div>
  )
}

export default Banner