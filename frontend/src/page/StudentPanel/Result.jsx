import { Container,Row,Col,Card,} from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentPanelResult = () => {
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
                        <h5  style={{ padding: '0px',paddingRight:'5px', paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'20px'}}>Student Panel</h5>
                        </Card.Title>
                        <Row>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                             <li style={{ display: 'inline-block', marginRight: '10px', marginLeft: '30px' }}>
                                <Link to='/student' className="card-link" style={{ color: '#286575',textDecoration: 'none', fontWeight: 'bolder' }}>Atten Exam</Link>
                            </li>
                         {/* <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/result' className="card-link" style={{  color: '#286575', fontWeight: 'bolder' }}>Result</Link>
                        </li> */}
                         <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/profile' className="card-link" style={{ color: '#286575', textDecoration: 'none', fontWeight: 'bolder' }}>Profile</Link>
                        </li>
                        <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/logout' className="card-link" style={{ textDecoration: 'none', color: '#286575', fontWeight: 'bolder' }}>logout</Link>
                        </li>
                        </ul>  
                        </Row>
                        <Card style={{ width: '1000px', marginLeft: '35px', marginTop: '30px', height: '360px', backgroundColor: '#FFFFFF' }}>
                            
                       
                            <Card style={{ margin:'10px',width: '950px', backgroundColor: '#EBF8FC', marginLeft: '20px', marginTop: '30px', height: '350px' }}>
                            
                            <table className='table'>
                    <thead>
                    <tr>
      <th scope="col">Exam Name</th>
      <th scope="col">Total Question</th>
      <th scope="col">Correct</th>
      
    </tr>


                    </thead>
                    <tbody>
                         {/* {
                            sname.map((data, i)=>(
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.password}</td>
                                    <td>
                                        <Link to={'/updatestudent/'+data.id} className='btn btn-primary'>Update</Link>
                                       
                                        <button className='btn btn-danger ms-2' onClick={()=>handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }  */}

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

export default StudentPanelResult;
