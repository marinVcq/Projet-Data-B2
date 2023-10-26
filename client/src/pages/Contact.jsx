import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
        <h2 className='page-title'>Contact Us</h2>

        <section className='page-section'>
          <div className='paragraphe-container'>
            <h2>Get in Touch</h2>
            <p>
              We value your inquiries and feedback. Whether you have questions about Ligodone, want to explore partnership opportunities,
               or simply wish to connect with us, we're here to listen. For general inquiries, please reach out to our dedicated team. We're ready 
               to assist you with any information you may need.
            </p>
            <p><span>Email:</span> info@fortunatopharma.com</p>
            <p><span>Phone:</span> +1 (555) 123-4567</p>
          </div>
        </section>

        <section className='page-section'>
          <div className='paragraphe-container'>
            <h2>Customer Support</h2>
            <p>
              If you're a customer with questions about Ligodone, its usage, or any other related concerns, our customer support team is here to help.
            </p>
            <p><span>Email:</span> support@fortunatopharma.com</p>
            <p><span>Phone:</span> +1 (555) 987-6543</p>
          </div>
        </section>

        <section className='page-section'>
          <div className='paragraphe-container'>
            <h2>Visit Us</h2>
            <p>
              We love meeting our community! If you're in the neighborhood, feel free to drop by our headquarters.
            </p>
            <p>Fortunato Pharmaceuticals Headquarters:</p>
            <p>123 Wellness Lane</p>
            <p>Cityville, State, Zip Code</p>
          </div>
        </section>


    </div>
  )
}

export default Contact