import React from 'react'
import "../styles/manage.css"

const Manage = () => {
  return (
    <>
    <div className='manage'>
        <h1>Manage your entire community <br /> in a single system</h1>
        <h5>Who is Nextcent suitable for?</h5>
    </div>

    <div className='manage-people'>
    <div className='people'>
    <img className='people-logo' src="./assets/icon (1).png" alt="" />
    <h1>Membership Organisations</h1>
    <h5 className='people-detail'>Our membership management software provides full automation of membership renewals and payments</h5>
    </div>

    <div className='people'>
    <img className='people-logo' src="./assets/icon (2).png" alt="" />
    <h1>National Associations</h1>
    <h5>Our membership management software provides full automation of membership renewals and payments</h5>
    </div>

    <div className='people'>
    <img className='people-logo' src="./assets/icon (3).png" alt="" />
    <h1>Clubs And <br /> Groups</h1>
    <h5>Our membership management software provides full automation of membership renewals and payments</h5>
    </div>
    </div>

    </>
  )
}

export default Manage
