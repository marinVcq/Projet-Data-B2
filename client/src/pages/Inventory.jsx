import React from 'react'
import {Link} from 'react-router-dom'

const Inventory = () => {
  return (
    <div className='inventory-page'>
      <div className='inventory-page-title'>Inventory</div>

      <section className='dashboard-navigation'>
        <Link to='/dashboard' className='navbar-link'>Database request</Link>
        <Link to='/ressources' className='navbar-link'>Global Ressources</Link>
        <Link to='/projects' className='navbar-link'>Projects</Link>
        <Link to='/inventory' className='navbar-link'>Inventory</Link>
        <Link to='/reservation' className='navbar-link'>Reservation</Link>
      </section>


    </div>
  )
}

export default Inventory