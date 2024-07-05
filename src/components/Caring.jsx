import React from 'react'
import "../styles/caring.css"

const Caring = () => {
  return (
   <>
   <div className='caring'>
        <h1>Caring is the new marketing</h1>
        <h5 className='caring-idea'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</h5>
    </div>

    <div className='caring-list'>
        <div className='caring-type'>
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <button className='caring-control'>Read more</button>
            <img src="./assets/vector2.png" alt="" />
        </div>
        <div className='caring-type'>
            <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
            <button className='caring-control'>Read more</button>
            <img src="./assets/vector2.png" alt="" />
        </div>
        <div className='caring-type'>
            <h3>Revamping the Membership Model with Triathlon Australia</h3>
            <button className='caring-control'>Read more</button>
            <img src="./assets/vector2.png" alt="" />
        </div>
    </div>
   </>
  )
}

export default Caring
