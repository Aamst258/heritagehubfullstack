import React from 'react'
import NavbarAuth from '../components/NavbarAuth'
import Footer from '../components/Footer'

function FooterContent() {
  return (
    <>   
    <NavbarAuth />

    <div className="container " style={{textAlign:'justify', margin:'auto',paddingLeft:'10px',paddingRight:'10px'}}>  
    <div className="row">
        <div className="col ">
            <h1 className='fw-bold'> About Us</h1>
            <p> Welcome to Heritage Hub, your ultimate destination for exploring the rich tapestry of cultural heritage from around the India. At Heritage Hub, we are passionate about preserving and celebrating the diverse cultural legacies that shape our societies. Through engaging content, insightful articles, and captivating visuals, we aim to connect people with their heritage and foster a deeper appreciation for the traditions, artifacts, and stories that define our collective identity.
Our platform serves as a digital repository of cultural knowledge, offering a curated selection of articles, images, and interactive experiences that highlight the beauty and significance of heritage sites, historical events, traditional practices, and more. Whether you're an avid history enthusiast, a curious traveller, or simply someone who values the importance of preserving cultural heritage, Heritage Hub is your go-to resource for immersive exploration and discovery.
Join us on a journey through time and across states as we delve into the wonders of our shared heritage and uncover the fascinating stories that unite us as a global community.
 </p>
        </div>
     </div>
     <div className="row">
        <div className="col">
            <h1 className='fw-bold'> Privacy Policy:</h1>
            <p>At Heritage Hub, we take your privacy seriously and are committed to protecting the personal information you entrust to us. Our Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website. We adhere to strict privacy standards and comply with relevant regulations to ensure transparency and accountability in our data practices. By using Heritage Hub, you consent to the terms outlined in our Privacy Policy.</p>
        </div>
     </div>  
      
     <div className="row">
        <div className="col">
            <h1 className='fw-bold'> Contact Us </h1>
            <p>
      <strong>Address:</strong><br />
      RV Vidyanikethan Post, 8th Mile, Mysore Rd,<br />
      Mailasandra, Bengaluru, Karnataka 560059
    </p>
    <p>
      <strong>Phone:</strong> +91 99800 99578
    </p>
    <p>
      <strong>Email ID:</strong> <a href="mailto:heritagehub73@gmail.com">heritagehub73@gmail.com</a>
    </p>
        </div>
     </div> 
     <div className="row">
        <div className="col">
            <h1 className='fw-bold'> Help</h1>
            <p>Need assistance navigating our website or have a query about our content? Our comprehensive Help section is here to provide you with answers and guidance. From troubleshooting technical issues to understanding how to use our features effectively, you'll find valuable information and resources to enhance your experience on Heritage Hub. If you can't find what you're looking for, don't hesitate to reach out to our support team for personalized assistance.</p> 
            <p>
    <strong>Reach out:</strong> <a href="mailto:support@heritagehub@gmail.com">support@heritagehub@gmail.com</a>
  </p>
  <p>
    <strong>Phone:</strong> +91 9481253026
  </p>
        </div>
     </div>
     <div className="row">
        <div className="col">
            <h1 className='fw-bold'> Disclaimer:</h1>
            <p>While we strive to provide accurate and reliable information, Heritage Hub cannot guarantee the completeness, accuracy, or reliability of the content published on our website. Our articles, images, and other materials are intended for informational purposes only and should not be construed as professional advice or authoritative sources for decision-making. Users are encouraged to verify information independently and consult relevant experts or authorities for specific inquiries or concerns. Heritage Hub shall not be liable for any errors, omissions, or damages arising from the use of or reliance on the content provided herein.</p>
        </div>
     </div>   

    </div>
    
    
    <Footer />
    
    </>
  )
}

export default FooterContent
