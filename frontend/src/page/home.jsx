import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


 const Home = () => {
  return (
    <>
    
    <br>
    </br>
    <br/>
    <br/>
    <div className="container text-center">
      <div className="row">
        <div className="col order-last">
          <img src="assets/study.jpg" alt="Home" height={400} width={500}/>
        </div>
        <div className="col order-first" style={{ backgroundColor: '#AFD7E3', border: 'solid' }}>
          <br />
          <br/>
          <h2 style={{ color: 'white' }}>ONLINE EXAMINATION</h2>
          <br />
          <p style={{ fontSize: '20px' }}>
            Embrace convenience, empower learning, excel online. Explore knowledge, transcend boundaries, master your path.
            Online examinations: where ambition meets opportunity, and success knows no limits.
          </p>
          <div>
            <br />
          
            <Link to="/register"className='btn'  style={{ border: 'none', borderRadius: '18px', width: '120px', fontSize: 'larger', fontWeight: '650', background:'white', color:'#286575'}}>Register</Link>
            
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="col">
        <h2>Online Examination</h2>
        <p>
          Experience the ease of learning and assessing with our user-friendly online examination platform. Simplify the
          testing process, enhance engagement, and empower both educators and learners with seamless navigation and
          intuitive design. With our system, education becomes accessible, enjoyable, and effective, ensuring a smooth
          journey towards academic success.
        </p>
      </div>
      <br />
      <br />

      <div className="col" style={{ backgroundColor: '#EBF8FC' }}>
        <br />
        <h3 style={{ color: '#286575' }}>Why use our online examination tool?</h3>
        <p style={{ color: '#286575' }}>
          Choose our online examination tool for unparalleled convenience, reliability, and efficiency. With seamless
          access anytime, anywhere, you can streamline assessment processes, save valuable time, and ensure fair and
          accurate evaluations. Our platform offers robust features, an intuitive interface, and comprehensive support,
          empowering educators to focus on teaching while students excel with confidence. Join us in revolutionizing
          education with simplicity and effectiveness.
        </p>
      </div>
      <br />
      <Container>
      <Row>
        <Col>
        <div className="col" style={{ border: 'solid', borderColor: '#286575', backgroundColor: '#EBF8FC' }}>
        <div className="col order-last" style={{margin:'10px'}}>
          {/* <img src="assets/heart.png" alt="Home" height={40} width={50}/> */}
          <h3  style={{ padding: '10px',paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'24px'}}>Easy to Use</h3>
        </div>
            <p>
              Simplify assessment with our user-friendly online examination platform.Intuitive design and seamless
              navigation empower both educators and learners 
            </p>
          </div>
        </Col>
        <Col>
        <div >
        <div className="col" style={{ border: 'solid', borderColor: '#286575', backgroundColor: '#EBF8FC' }}>
          
            <div className="col order-last" style={{margin:'8px'}}>
             
              {/* <img src="~/Images/look_great.png" alt="Look great" /> */}
              <h3  style={{ padding: '10px',paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'24px'}}>Look Great </h3>
            </div>
            <p>
              It doesnot matter if you are on a phone, tablet, or PC: your online exam will look beautiful. Our online
              examination system is fully responsive, so you can engage your audience on any platform.
            </p>
          </div>
        </div>
        </Col>
        <Col>
        <div >
        <div className="col" style={{ border: 'solid', borderColor: '#286575', backgroundColor: '#EBF8FC' }}>
          <center>
          <div className="col order-last" style={{margin:'8px'}}>
          {/* <img src="assets/admin.png" alt="Home" height={40} width={50} style={{margin:'10px'}}/> */}
          {/* <FontAwesomeIcon icon="fa-regular fa-users" /> */}
          <h3  style={{ padding: '10px',paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'24px'}}>Awesome support</h3>
        </div>
          </center>
            
            <p>
              Do you have any questions about our online examination software? Our support is always by your side and
              provides you with the best possible support!
            </p>
          </div>
        </div>
        </Col>
      </Row>

    </Container>

      
      </div>
    
  



    </>
  )
}
export default Home;