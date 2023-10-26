import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

// Import assets
import HomeHeroImage from '../assets/home/hero-image.jpg'
import COOImage from '../assets/home/bruce.jpg'
import LigodoneImage from '../assets/home/pill-bottle.png'
import TestimonyImage from '../assets/home/testimony.jpg'
import Heart from '../assets/home/heart.png'

const Home = () => {

  return (
      <div className='home-container'>

        <header className='header'>

          <div className='header-overlay'></div>

          <div className='header-text-container'>
            <h1 className='header-text-title'>Empowering Lives, Enhancing Futures</h1>
            <p className='header-text-description'>
              At Fortunato, we are committed to the relentless pursuit of scientific innovation and the betterment of human health. 
              With a legacy rooted in cutting-edge research and an unwavering dedication to the well-being of 
              communities worldwide, Fortunato Pharmaceuticals stands as a beacon of hope and progress.
            </p>
            <Link className="header-link" to='/contact'>Contact Us</Link>
          </div>

          <img className='hero-image' src={HomeHeroImage}></img>

        </header>

        <section className='product-preview-container'>
          <img className='product-image' alt='ligodone bottle' src={LigodoneImage}></img>

          <div className='product-detail-container'>
            <h1 className='product-title'><span>Ligodone:</span> Unleashing the Power of Wellness</h1>
            <p className='product-description'>
              At Fortunato Pharmaceuticals, we understand that true well-being is not just the absence of illness but the presence of vitality and vigor. 
              That's why we are thrilled to present our crown jewel – <span>Ligodone: Your Passport to Radiant Health!</span>
            </p>

            <ul className='product-features'>
              <li className='product-feature'>Cutting-Edge Science: Backed by rigorous scientific research, Ligodone is the culmination of years of innovation and a commitment to pushing the boundaries of wellness.</li>
              <li className='product-feature'>Balance Redefined: Say goodbye to the chaos of modern living. Ligodone is your guide to reclaiming equilibrium, allowing you to thrive in the face of life's challenges.</li>
            </ul>

            <p className='leitmotiv'>Fortunato Pharmaceuticals – Pioneering Wellness, Inspiring Lives.</p>
          </div>
        </section>


        <section className='product-preview-container'>

          <div className='product-detail-container'>
            <h1 className='product-title'><span>Revolutionizing Healthcare:</span> The Internal Defibrillator</h1>
            <p className='product-description'>
            The automatic internal defibrillator is designed to be implanted within the body, providing continuous monitoring of the heart's rhythm. 
            In the event of a life-threatening arrhythmia or cardiac arrest, the device is programmed to deliver a precise electric shock, 
            restoring the heart to its normal rhythm. This innovative approach aims to reduce response times and enhance the chances of survival.
            </p>

            <ul className='product-features'>
              <li className='product-feature'>Research-Driven Development: The defibrillator is a result of rigorous research, adhering to the highest standards of development, testing, and clinical trials.</li>
              <li className='product-feature'>Comprehensive Safety Features: Incorporates fail-safes and safety protocols to prevent unintended shocks and ensure the well-being of the patient.</li>
            </ul>

            <p className='leitmotiv'>Fortuna Pharmaceuticals — Where Innovation Meets Compassionate Care.</p>
          </div>

          <img className='product-image' alt='ligodone bottle' src={Heart}></img>

        </section>

        <section className='testimonials-container'>
          <div>
            <h2 className='testimonial-title'>Testimonial</h2>
            <p className='testimonial-description'>
              "Thanks to Fortunato for creating this groundbreaking product. Ligodone has not only improved my mental health but has also given me the 
              strength to face each day with renewed energy and positivity.
              I highly recommend Ligodone to anyone seeking a genuine and effective solution for their mental well-being."
            </p>
            <p className='signature'>Peter M.</p>      
          </div>
          <img className='testimonial-image' src={TestimonyImage} alt='COO Image'></img>
        </section>

        <section className='testimonials-container coo'>
          {/* <img className='testimonial-image' src={COOImage} alt='COO Image'></img> */}

          <div>
            <h2 className='testimonial-title'>Message from the COO</h2>
            <p className='testimonial-description'>
              Dear Valued Partners, Esteemed Colleagues, and Dedicated Team Members,
              As the Chief Operating Officer of Fortunato Pharmaceuticals, it is both an honor and a privilege to welcome you to our digital hub. Fortunato, in its pursuit of excellence, 
              has always been driven by a shared commitment to progress, innovation, and, above all, the well-being of those we serve.
            </p>
            <p className='signature'>Rodrigue Usher <span>COO of Fortunato Pharmaceuticals</span></p>
          </div>

        </section>

      </div>
  )
}

export default Home