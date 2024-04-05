import { Container,Row,Col,Card, } from "react-bootstrap";
import {Link} from 'react-router-dom';
import  { useEffect, useState } from 'react'
import axios from 'axios';


const TeacherPanel = () => {
    const[sname,setName]=useState([])
    //const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5001/api/teacher')
        .then(res=>setName(res.data))
        .catch(err=>console.log(err))

    },[])

    const handleDelete=async(id)=>{
        try{
            await axios.delete('http://localhost:5001/api/teacher/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }


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
                        <h5  style={{ padding: '0px',paddingRight:'5px', paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'20px'}}>Admin Panel</h5>
                        </Card.Title>
                        <Row>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                             <li style={{ display: 'inline-block', marginRight: '10px', marginLeft: '30px' }}>
                                <Link to='/admin' className="card-link" style={{ color: '#286575',textDecoration: 'none', fontWeight: 'bolder' }}>Group</Link>
                            </li>
                         <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/teacherlist' className="card-link" style={{  color: '#286575', fontWeight: 'bolder' }}>Users</Link>
                        </li>
                        <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/studentlist' className="card-link" style={{ textDecoration: 'none', color: '#286575', fontWeight: 'bolder' }}>Students</Link>
                        </li>
                        <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/logout' className="card-link" style={{ textDecoration: 'none', color: '#286575', fontWeight: 'bolder' }}>logout</Link>
                        </li>
                        </ul>  
                        </Row>
                        <Card style={{ width: '1000px', marginLeft: '35px', marginTop: '30px', height: '360px', backgroundColor: '#FFFFFF' }}>
                            
                        <Link to='/createuser' className="btn" style={{margin:'10px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', fontSize: 'larger', fontWeight: '650', backgroundColor: '#286575' }}>Create</Link>
                            <Card style={{ margin:'10px',width: '950px', backgroundColor: '#EBF8FC', marginLeft: '20px', marginTop: '30px', height: '250px' }}>
                            <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            sname.map((data, i)=>(
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.password}</td>
                                    <td>
                                        <Link to={'/updateteacher/'+data.id} className='btn btn-primary'>Update</Link>
                                       
                                        <button className='btn btn-danger ms-2' onClick={()=>handleDelete(data.id)}>Delete</button>
                                    </td>
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

export default TeacherPanel;
