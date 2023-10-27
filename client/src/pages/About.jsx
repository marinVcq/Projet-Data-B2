import React from 'react'

// Import assets
import OldFactory from '../assets/about/factory.jpg'

const About = () => {
  return (
    <div className='about-container'>
        <h1 className='page-title'>About Fortunato Pharmaceuticals</h1>

        <section className='page-section'>
          <div className='paragraphe-container'>
            <h2>Our Story</h2>
            <p>
              At Fortunato Pharmaceuticals, we are driven by a singular mission: to empower individuals to lead lives filled with vitality and vigor. 
              Our commitment to this mission is unwavering, and it fuels every aspect of our work, from research and development to the delivery of life-changing solutions.
            </p>
            <p>
              The spirit of innovation that fueled our inception in the '70s continues to be the driving force behind Fortunato Pharmaceuticals, it traces its roots back to the vibrant era of the 1970s, a time of cultural transformation and groundbreaking discoveries.
              In the midst of this dynamic landscape, a group of visionary pioneers laid the foundation for what would become a beacon of well-being <span>– Fortunato Pharmaceuticals.</span>
            </p>
          </div>
          <img className='section-image' src={OldFactory} alt='section image'></img>
        </section>


        <section className='page-section'>
          <div className='paragraphe-container'>
            <h2>The Visionaries of the '70s</h2>
            <p>
              In an age defined by a quest for knowledge and a fervent spirit of exploration, a diverse group of scientists, researchers, and wellness enthusiasts converged with a shared dream. Their vision was simple yet profound: 
              to revolutionize the way we approach health and wellness, placing science and innovation at the forefront. The 1970s were a crucible of ideas and experimentation. 
              Fortunato Pharmaceuticals emerged as a response to the growing need for a holistic approach to well-being. Our founders were inspired by the belief that true health goes beyond 
              treating symptoms; it involves understanding the intricate balance between mind, body, and spirit.
            </p>
          </div>
          <div className='paragraphe-container'>
            <h2>Guided by the Spirit of Innovation</h2>
            <p>
              We honor the legacy of our founders by pushing the boundaries of wellness, embracing the latest scientific advancements, and staying true to our commitment to 
              empowering lives through innovation.
              As we reflect on our humble beginnings, we remain dedicated to the principles that defined us in the '70s – a dedication to science, a passion for holistic well-being, and a 
              vision that transcends time. Fortunato Pharmaceuticals is not just a company; it's a legacy of care, discovery, and the enduring pursuit of radiant health. 
              Join us as we continue to redefine balance, push the limits of wellness, and celebrate the timeless journey that began in the revolutionary decade of the 1970s.
            </p>
          </div>
        </section>
    </div>
  )
}

export default About