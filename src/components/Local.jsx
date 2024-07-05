import React from 'react'
import "../styles/local.css"

const Local = () => {
  return (
    <div className='local-session'>
        <div className='local-title'>
            <h1>Helping a local <br /><span> business reinvent itself</span></h1>
            <h5>We reached here with our hard work and dedication</h5>
        </div>

        <div className='locals'>
        <div className='local-detail'>
            <img className='local-img' src="./assets/icon (4).png" alt="" />
            <div>
                <p>2,245,341 <br />Members</p>
            </div>
        </div>
        <div className='local-detail'>
            <img className='local-img' src="./assets/icon (5).png" alt="" />
            <p>46,328 <br />Clubs</p>
        </div>
        <div className='local-detail'>
            <img className='local-img' src="./assets/icon (6).png" alt="" />
            <p>828,867 <br />Event Bookings</p>
        </div>
        <div className='local-detail'>
            <img className='local-img' src="./assets/icon (7).png" alt="" />
            <p>1,926,436 <br />Payments</p>
        </div>
        </div>
      
    </div>
  )
}

export default Local
