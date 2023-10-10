import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  
  return (
    <div className='d-flex justify-content-center align-items-center flex-column ' style={{ width: '100%', height: '300px' }}>
      <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website" style={{ width: '300px' }}>
          <h4><i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>{' '}Media Player</h4>
          <p>Designed and built with all the love in the world by the Luminar  team with the help of our contributors.
            Code licensed Luminar, docs CC BY 3.0.
          </p>
        </div>

        <div className="links d-flex justify-content-center  flex-colum ">
          <div >
            <div>
              <h4>Links</h4>
              <div>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                  Landing Page
                </Link>
              </div>
              <div><Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></div>
              <div> <Link to={'/watching-history'} style={{ textDecoration: 'none', color: 'white' }}>Watching History</Link></div>

            </div>
          </div>
        </div>


        <div className="guide d-flex justify-content-center  flex-colum ">
          <div >
            <div>
              <h4>Guide</h4>
              <div>
                <Link to={'https://react-bootstrap.netlify.app/docs/getting-started/introduction/'} style={{ textDecoration: 'none', color: 'white' }}>
                  Bootstrap
                </Link>
              </div>
              <div><Link to={'https://fontawesome.com/'} style={{ textDecoration: 'none', color: 'white' }}>Font Awsome</Link></div>
              <div> <Link to={'https://fonts.google.com/'} style={{ textDecoration: 'none', color: 'white' }}>Google Fonts</Link></div>

            </div>
          </div>
        </div>




        <div className="contact d-flex justify-content-center  flex-colum ">
          <div >
            <div>
              <h4>Contact Us</h4>
              <div>
              <input  type="text" className='mb-3' placeholder='Enter Youre Email...' style={{width:'200px',height:'40px',borderRadius:'10px'}}/>
              <button className="bg-info"  style={{width:'100px',height:'40px',borderRadius:'10px',margin:'10px'}}>Submit</button>
              </div>
          <div className='d-flex justify-content-between align-items-center '>
                
                  <Link style={{fontSize:'30px',color:'white'}}><i className="fa-brands fa-facebook-f"></i></Link>
                 
                  <Link style={{fontSize:'30px',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
                  <Link style={{fontSize:'30px',color:'white'}}><i className="fa-brands fa-linkedin-in"></i></Link>
                  <Link style={{fontSize:'30px',color:'white'}}><i className="fa-brands fa-instagram"></i></Link>
                 <Link style={{fontSize:'30px',color:'white'}}> <i className="fa-brands fa-whatsapp"></i></Link>
             
  
          </div>

            </div>
          </div>
        </div>
       
      </div>
     <div> <p>Copyright © 2023 Media Player. Built with Docusaurus.</p></div>


    </div>
    
  )
}

export default Footer