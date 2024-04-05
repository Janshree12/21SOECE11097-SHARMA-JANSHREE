
//import'./create.css'
//import {Container,Row,Col, Card,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState, } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const GroupCreate=()=>{
   
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate=useNavigate();
  
    

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5001/api/group',{name,description})
        .then(res=>{
            console.log(res);
            navigate('/admin')
        }).catch(err=>console.log(err));
      };

   return(
    <>
    {/* <Container bg='white' style={{marginLeft:'350px'}}>
        <Row>
            <Col >
            <br/>
            <br/>
                <Card style={{margin:'100px', backgroundColor: '#EBF8FC', width:'300px',height:"300px",borderRadius:'10px',border:'3px solid #286575' }}>
                    <Card.Body style={{margin:"7px",paddingTop:'10px'}}>
                <h3 style={{color: '#286575',}}><b>New Group</b> </h3>
                 <label ><left>Name</left></label>
                <input type='text'style={{width: '100%',height:'33px',padding: '8px',border:'1px solid #ccc',borderRadius: '4px',boxSizing: 'border-box'}}></input> 
                
                <Form  class="fa fa-align-left"style={{color:'#286575'}}>
                                <Form.Group >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" style={{width: '100%',height:'33px',padding: '8px',border:'1px solid #286575',borderRadius: '4px',boxSizing: 'border-box'}}  />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text"style={{width: '100%',height:'33px',padding: '8px',border:'1px solid #286575',borderRadius: '4px',boxSizing: 'border-box'}} />
                                </Form.Group>
                                
                                <center>
                                <Button style={{margin:'15px',paddingTop:'5px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', backgroundColor: '#286575' }} >Create </Button>
                                <br/>
                                <br/>
                                <p><u><Link to='/admin' style={{ textDecoration: 'none', color: '#286575',}}>Back To List</Link> </u></p>
                                </center>
                            </Form>
                            </Card.Body>
                
                </Card>
           
            </Col>
        </Row>
    </Container> */}
    {/* <body className='body1'>  
    <div className="register-form">
        <h2>Login</h2>
        <form>
            <div className="input-container">
                <label >Name</label>
                <input type="text"  required/>
            </div>
            <div className="input-container">
                <label >Description</label>
                <input type="text"  required/>
            </div>
            <center><button type="submit"><Link >Create</Link></button></center>
        </form>
    </div>
    </body> */}
<div className='justify-content-center' style={{margin:'100px',marginLeft:'450px', backgroundColor: '#EBF8FC',width:'300px',height:"300px",borderRadius:'10px',border:'3px solid #286575' }}>
            <div className='  rounded p-3'style={{backgroundColor: '#EBF8FC'}}>
             <form className="fa fa-align-left"style={{color:'#286575' ,margin:"7px",paddingTop:'10px'}} onSubmit={handleSubmit}>
             <h3 style={{color: '#286575',}}><b>Student</b> </h3>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input
          type="text"
          placeholder="Group Name"
          onChange={e=>setName(e.target.value)}
        />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Description</label>
                    <input
          type="text"
          placeholder="Group Description"
          onChange={e=>setDescription(e.target.value)}
        />
                </div>
                
                <center>
                <button type='Submit' className='btn justify-content-center ' style={{margin:'12px',paddingTop:'5px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', backgroundColor: '#286575' }} >Submit</button>
                </center>
             </form>
             
            </div>
            <center>
                                
                                <br/><br/>
                                <p><u><Link to='/admin'style={{ textDecoration: 'none', color: '#286575',}}>Back To List</Link> </u></p>
                                </center>
        </div>


    </>
   ) 

}
export default GroupCreate;