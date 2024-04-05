//import { Container,Row,Col,Card, Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import  { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

const StudentUpdateDetails = () => {
    const[name, setName]=useState('')
    const[username,setUName]=useState('')
    const[password,setPassword]=useState('')
    const {id}=useParams();
    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:5001/api/users/'+id,{name,username,password})
        .then(res=>{
            console.log(res);
            navigate('/profile')
        }).catch(err=>console.log(err));
    }

   return(
    <>
    {/* <Container bg='white' style={{marginLeft:'350px'}}>
        <Row>
            <Col >
            <br/><br/>
                <Card style={{margin:'100px', backgroundColor: '#EBF8FC',width:'300px',height:"350px",borderRadius:'10px',border:'3px solid #286575' }}>
                    <Card.Body style={{margin:"7px",paddingTop:'10px'}}>
                <h3 style={{color: '#286575',}}><b>Student</b> </h3>
                
                
                <Form  className="fa fa-align-left"style={{color:'#286575'}} onSubmit={handleSubmit}>
                                <Form.Group >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" onChange={e=>setName(e.target.value)} style={{width: '100%',height:'33px',padding: '8px',border:'1px solid #286575',borderRadius: '4px',boxSizing: 'border-box'}} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" onChange={e=>setUName(e.target.value)} style={{width: '100%',height:'33px',padding: '8px',border:'1px solid #286575',borderRadius: '4px',boxSizing: 'border-box'}} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="pass" onChange={e=>setPassword(e.target.value) } style={{width: '100%',height:'33px',padding: '8px',border:'1px solid #286575',borderRadius: '4px',boxSizing: 'border-box'}} />
                                </Form.Group>
                                
                                <center>
                                <Button style={{margin:'15px',paddingTop:'5px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', backgroundColor: '#286575' }} >Register</Button>
                                <br/><br/>
                                <p><u><Link to='/studentlist'style={{ textDecoration: 'none', color: '#286575',}}>Back To List</Link> </u></p>
                                </center>
                            </Form>
                            </Card.Body>
                
                </Card>
           
            </Col>
        </Row>
    </Container>
     */}
      <div className='justify-content-center' style={{margin:'100px',marginLeft:'450px', backgroundColor: '#EBF8FC',width:'300px',height:"350px",borderRadius:'10px',border:'3px solid #286575' }}>
            <div className='  rounded p-3'style={{backgroundColor: '#EBF8FC'}}>
             <form className="fa fa-align-left"style={{color:'#286575' ,margin:"7px",paddingTop:'10px'}} onSubmit={handleSubmit}>
             <h3 style={{color: '#286575',}}><b>Student</b> </h3>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type="text" placeholder='Enter name' className='form-control'
                    onChange={e=>setName(e.target.value)}
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Username</label>
                    <input type="text" placeholder='Enter Username' className='form-control'
                     onChange={e=>setUName(e.target.value)}
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Password</label>
                    <input type="password" placeholder='Enter password' className='form-control'
                     onChange={e=>setPassword(e.target.value)}
                    ></input>
                </div>
                <center>
                <button className='btn justify-content-center ' style={{margin:'12px',paddingTop:'5px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', backgroundColor: '#286575' }} >Update</button>
                </center>
             </form>
             
            </div>
            <center>
                                
                                <br/><br/>
                                <p><u><Link to='/profile'style={{ textDecoration: 'none', color: '#286575',}}>Back To List</Link> </u></p>
                                </center>
        </div>
        
    </>
  );
};

export default StudentUpdateDetails;
