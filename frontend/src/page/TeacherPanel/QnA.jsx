import { Container,Row,Col,Card, } from "react-bootstrap";
import { Link } from "react-router-dom";
import  { useState, useEffect } from 'react';
import axios from "axios";


const TeacherPanelQnA = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // Fetch all questions when the component mounts
        fetchQuestions();
      }, []);
    
      const fetchQuestions = async () => {
        try {
          const response = await axios.get('http://localhost:5001/api/questions');
          setQuestions(response.data);
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
      };

  return (
    <>
    
<Container>
        <br/><br/><br/><br/>
        <Row>
            <br/>
            <br/>
            <Col md={4}>
            
                    
                    <Card style={{ width:'1100px', backgroundColor: '#EBF8FC', height: '550px' }}>
                        
                        <Card.Body>
                        <Card.Title>
                        <h5  style={{ padding: '0px',paddingRight:'5px', paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'20px'}}>Teacher Panel</h5>
                        </Card.Title>
                        <Row>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                             <li style={{ display: 'inline-block', marginRight: '10px', marginLeft: '30px' }}>
                                <Link to='/teacher' className="card-link" style={{ color: '#286575',textDecoration: 'none', fontWeight: 'bolder' }}>Exam</Link>
                            </li>
                         <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/qna' className="card-link" style={{  color: '#286575', fontWeight: 'bolder' }}>QnA</Link>
                        </li>
                        <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/logout' className="card-link" style={{ textDecoration: 'none', color: '#286575', fontWeight: 'bolder' }}>logout</Link>
                        </li>
                        </ul>  
                        </Row>
                        <Card style={{ width: '1000px', marginLeft: '35px', marginTop: '30px', height: '390px', backgroundColor: '#FFFFFF' }}>
                            
                        <Link to='/createqna' className="btn" style={{margin:'10px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', fontSize: 'larger', fontWeight: '650', backgroundColor: '#286575' }}>Create</Link>
                            <Card style={{ margin:'10px',width: '950px', backgroundColor: '#EBF8FC', marginLeft: '20px', marginTop: '30px', height: '250px' }}>
                            <table className='table'>
                            <thead className="thead-dark">
    <tr>
      <th scope="col">Question</th>
      <th scope="col">Option1</th>
      <th scope="col">Option2</th>
      <th scope="col">Option3</th>
      <th scope="col">Option4</th>
      <th scope="col">Answer</th>
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
                        } */}
                         {questions.map((question) => (
          <tr key={question.id}>
            <td>{question.question_text}</td>
            
              {question.options.map((option, index) => (
                <td key={index}>{option}</td>
              ))}
            
            <td> {question.correct_answer}</td>
          </tr>
        ))}

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

export default TeacherPanelQnA;
