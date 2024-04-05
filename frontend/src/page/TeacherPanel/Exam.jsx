import { Container,Row,Col,Card, } from "react-bootstrap";
import { Link } from "react-router-dom";
import  { useEffect, useState } from 'react'
import axios from "axios";

const TeacherPanelExam = () => {
    const[sname,setName]=useState([])
    //const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5001/exams')
        .then(res=>setName(res.data))
        .catch(err=>console.log(err))

    },[])
  return (
    <>
    
<Container>
        <br/><br/><br/><br/>
        <Row>
            <br/>
            <br/>
            <Col md={4}>
            
                    
                    <Card style={{ width:'1100px', backgroundColor: '#EBF8FC', height: '500px' }}>
                        
                        <Card.Body>
                        <Card.Title>
                        <h5  style={{ padding: '0px',paddingRight:'5px', paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'20px'}}>Teacher Panel</h5>
                        </Card.Title>
                        <Row>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                             <li style={{ display: 'inline-block', marginRight: '10px', marginLeft: '30px' }}>
                                <Link to='/teacher' className="card-link" style={{ color: '#286575', fontWeight: 'bolder' }}>Exam</Link>
                            </li>
                         <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/qna' className="card-link" style={{ textDecoration: 'none', color: '#286575', fontWeight: 'bolder' }}>QnA</Link>
                        </li>
                        <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/logout' className="card-link" style={{ textDecoration: 'none', color: '#286575', fontWeight: 'bolder' }}>logout</Link>
                        </li>
                         
                        </ul>  
                        </Row>
                        <Card style={{ width: '1000px', marginLeft: '35px', marginTop: '30px', height: '360px', backgroundColor: '#FFFFFF' }}>
                            
                        <Link to='/createexam' className="btn" style={{margin:'10px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', fontSize: 'larger', fontWeight: '650', backgroundColor: '#286575' }}>Create</Link>
                            <Card style={{ margin:'10px',width: '950px', backgroundColor: '#EBF8FC', marginLeft: '20px', marginTop: '30px', height: '250px' }}>
                            <table className='table'>
                            <thead className="thead-dark">
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Start Date</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
                    <tbody>
                        {
                            sname.map((data, i)=>(
                                <tr key={i}>
                                    
                                    <td>{data.exam_name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.start_date}</td>
                                    <td>{data.start_time}</td>
                                    
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

                            </Card>
                        </Card>
                        </Card.Body>
                        </Card>


                
            </Col>
        </Row>
    </Container>
    </>
  );
};

export default TeacherPanelExam;
