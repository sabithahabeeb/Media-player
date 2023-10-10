import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function LandingPage() {
  const navigateByUrl=useNavigate()

  const navigate = ()=>{
    navigateByUrl('/home')
  }
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center'>
        <Col lg={4}>
          <h3>Welcome to <span className='text-danger'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia, qui iusto aliquam modi cumque deserunt unde, atque ex rerum, similique mollitia quibusdam dicta quae! Aperiam quaerat laborum deserunt voluptatibus.</p>
          <button onClick={navigate} className='btn btn-info mt-3 fw-border'>Get Started</button>
        </Col>
        <Col className='ps-5' lg={6}>
          <img className='img-fluid ms-5 ps-5' src="https://cdn.dribbble.com/users/1242979/screenshots/7099165/media/e521bd143bf1e795af3ec725a68e273f.gif" alt="" />
        </Col>
      </Row>

      <div className="container p-5 mt-5 mb-5 d-flex justify-content-center align-items-center flex-column">
        <h3 >Features</h3>
        <div className='cards mt-3 d-flex justify-content-between w-100 align-items-center'>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://phoneky.co.uk/thumbs/screensavers/down/music/animatedke_dxdcjfte.gif" />
            <Card.Body>
              <Card.Title>Managing Vedios</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/96/6e/ee/966eee3e84633a1b1257a342a6c21163.gif" />
            <Card.Body>
              <Card.Title>Managing Vedios</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://phoneky.co.uk/thumbs/screensavers/down/technology/graphicequ_482bf582.gif" />
            <Card.Body>
              <Card.Title>Managing Vedios</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>



      <div className="container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded">
        <div className="content">
          <h3 className="text-warning mb-5">Simple, Fast and Powerful</h3>
          <h6 ><span className='fs-5 fw-bolder'>Play Everything</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquam tempora, in dignissimos accusamus sequi.</h6>

          <h6 className='mt-4'><span className='fs-5 fw-bolder'>Catagory Vedios</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquam tempora, in dignissimos accusamus sequi.</h6>

          <h6 className='mt-4'><span className='fs-5 fw-bolder'>Managing History</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquam tempora, in dignissimos accusamus sequi.</h6>
        </div>
        <div className="vedio ms-5">
          <iframe width="689" height="387" src="https://www.youtube.com/embed/RLzC55ai0eo" title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </div>
      </div>

    </>
  )
}

export default LandingPage