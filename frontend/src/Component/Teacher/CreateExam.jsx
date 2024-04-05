import { Container,Row,Col,Card,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import  { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TeacherCreateExam = () => {
    const [exam_name, setEName] = useState('');
    const [description, setDescription] = useState('');
    const [start_date, setstartdate] = useState('');
    const [start_time, setstarttime] = useState('');
    const [group_id, setgroupid] = useState();
    const navigate=useNavigate();
    
      const[sname,setName]=useState([])
    //const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5001/api/group')
        .then(res=>setName(res.data))
        .catch(err=>console.log(err))

    },[])
    
     
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5001/exams', {exam_name,description,start_date,start_time,group_id});
          
          navigate('/teacher')
          // Optionally, you can redirect the user to another page after successful creation
        } catch (error) {
          console.error('Error creating exam:', error);
          
        }
      };
    


  return (
    <>
    <Container>
        <br/><br/><br/><br/>
        <Row>
            <Col md={4}>
                
                    
                    <Card style={{ width:'900px', backgroundColor: '#EBF8FC', height: '640px' }}>
                        
                        <Card.Body>
                        <Card.Title>
                        <h5  style={{ padding: '10px',paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'24px'}}>Create Exam</h5>
                        </Card.Title>
                       
                             <div className='justify-content-center' style={{color:'#286575',margin:'10px',padding:'5px', paddingBottom:'5px'}}>
            <div className='  rounded p-3'style={{backgroundColor: '#EBF8FC'}}>
             <form onSubmit={handleSubmit}  className="fa fa-align-left"style={{color:'#286575' ,margin:"7px",paddingTop:'10px'}} 
            
             >
            
                <div className='mb-2'>
                    <label htmlFor=''>Exam Name</label>
                    <input type="text" placeholder='Enter Exam Name' className='form-control'
                  onChange={e=>setEName(e.target.value)}
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Description</label>
                    <input type="text" placeholder='Enter Description' className='form-control'
                 onChange={e=>setDescription(e.target.value)}
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Start Date</label>
                    <input type="date" placeholder='Enter password' className='form-control'
                    onChange={e=>setstartdate(e.target.value)}
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Time</label>
                    <input type="time" placeholder='Enter time' className='form-control'
                   onChange={e=>setstarttime(e.target.value)}
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Group</label><br/>
                    <select onChange={e=>setgroupid(e.target.value)}   style={{ width: '100%', height: '40px', padding: '8px', border: '0px solid #286575', borderRadius: '4px', boxSizing: 'border-box' }}>
                    {
                            sname.map((data, i)=>(
                                
                                    <option key={i}>{data.group_id}</option>
  

                                // <tr key={i}>
                                //     <td>{data.group_name}</td>
                                //     <td>{data.group_description}</td>
                                    
                                //     <td>
                                //         <Link to={'/addstudent/'+data.group_id} className='btn btn-primary'>Student</Link>
                                       
                                //         <button className='btn btn-danger ms-2' onClick={()=>handleDelete(data.group_id)}>Delete</button>
                                //     </td>
                                // </tr>
                            ))
                        }
                        </select>
                    {/* <select   style={{ width: '100%', height: '40px', padding: '8px', border: '0px solid #286575', borderRadius: '4px', boxSizing: 'border-box' }}>
  
</select> */}
                </div>
                <center>
                <button className='btn justify-content-center ' style={{margin:'12px',paddingTop:'5px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', backgroundColor: '#286575' }} >Submit</button>
                </center>
             </form>
             
            </div>
            <center>
                                
                                <br/><br/>
                                <p><u><Link to='/teacher'style={{ textDecoration: 'none', color: '#286575',}}>Back To List</Link> </u></p>
                                </center>
        </div>
                        
                        </Card.Body>
                        </Card>


                
            </Col>
        </Row>
    </Container>
    </>
  );
};

export default TeacherCreateExam;
