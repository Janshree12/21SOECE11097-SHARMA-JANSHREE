import { Container,Row,Col,Card, } from "react-bootstrap";
import { Link } from "react-router-dom";

import  { useState, useEffect } from 'react';
import axios from 'axios';

const StudentPanelAttenExam = () => {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [results, setResults] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
    useEffect(() => {
      fetchQuestions();
    }, []);
  
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/questions');
        setQuestions(response.data);
        setAnswers(new Array(response.data.length).fill('')); // Initialize answers array
        setResults(null);
        setCurrentQuestionIndex(0);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
  
    const handleAnswerChange = (e) => {
      const { value } = e.target;
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = value;
      setAnswers(newAnswers);
    };
  
    const handleSubmitAnswer = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // All questions answered, calculate results
        calculateResults();
      }
    };
  
    const calculateResults = () => {
      // Submit the answers to the backend to calculate results
      // For simplicity, let's assume the backend returns the results
      const results = { correct: 0, total: questions.length };
      answers.forEach((answer, index) => {
        if (answer === questions[index].correct_answer) {
          results.correct++;
        }
      });
      setResults(results);
    };
  
    const handleRestartQuiz = () => {
      fetchQuestions();
    };
  
    if (questions.length === 0) {
      return <div>Loading...</div>;
    }
  
    if (results) {
      return (
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
                                <Link to='/student' className="card-link" style={{ color: '#286575', fontWeight: 'bolder' }}>Atten Exam</Link>
                            </li>
                         
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
                            <Card.Title>
                        <h5  style={{ padding: '10px',paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'20px'}}>ExamName</h5>
                        </Card.Title>
                        <hr style={{color: '#286575',}}/>
                        <div>
          <h2>Results</h2>
          <p>Correct Answers: {results.correct}</p>
          <p>Total Questions: {results.total}</p>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>

                            </Card>
                        </Card>
                        </Card.Body>
                        </Card>


                
            </Col>
        </Row>
    </Container>
        
      );
    }
  
    const currentQuestion = questions[currentQuestionIndex];
  

  return (
    <>
    {/* <Container>
        <Row>
            <Col md={4}>
                <Card style={{ backgroundColor: '#EBF8FC' }}>
                    
                    <Card style={{ width:'800px', backgroundColor: '#EBF8FC', height: '500px' }}>
                        
                        <Card.Body>
                        <Card.Title>
                        <h5  style={{ padding: '10px',paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'20px'}}>Student Panel</h5>
                        </Card.Title>
                        <Row>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                             <li style={{ display: 'inline-block', marginRight: '10px', marginLeft: '30px' }}>
                                <a href="#" className="card-link" style={{ color: '#286575', fontWeight: 'bolder' }}>Atten Exam</a>
                            </li>
                         <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <a href="#" className="card-link" style={{ textDecoration: 'none', color: '#286575', fontWeight: 'bolder' }}>Result</a>
                        </li>
                        <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <a href="#" className="card-link" style={{ textDecoration: 'none', color: '#286575', fontWeight: 'bolder' }}>Profile</a>
                        </li>
                         
                        </ul>  
                        </Row>
                        <Card style={{ width: '1000px', marginLeft: '35px', marginTop: '30px', height: '360px', backgroundColor: '#FFFFFF' }}>
                            
                            <Button style={{margin:'10px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', fontSize: 'larger', fontWeight: '650', backgroundColor: '#286575' }}>Create</Button>
                            <Card style={{ margin:'10px',width: '950px', backgroundColor: '#EBF8FC', marginLeft: '20px', marginTop: '30px', height: '250px' }}>
                            <Card.Title>
                        <h5  style={{ padding: '10px',paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'20px'}}>ExamName</h5>
                        </Card.Title>
                        <hr style={{color: '#286575',}}/>
                            </Card>
                        </Card>
                        </Card.Body>
                        </Card>


                </Card>
            </Col>
        </Row>
    </Container> */}

<Container>
        <br/><br/><br/><br/>
        <Row>
            <br/>
            <br/>
            <Col md={4}>
            
                    
                    <Card style={{ width:'1100px', backgroundColor: '#EBF8FC', height: '700px' }}>
                        
                        <Card.Body>
                        <Card.Title>
                        <h5  style={{ padding: '0px',paddingRight:'5px', paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'20px'}}>Student Panel</h5>
                        </Card.Title>
                        <Row>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                             <li style={{ display: 'inline-block', marginRight: '10px', marginLeft: '30px' }}>
                                <Link to='/student' className="card-link" style={{ color: '#286575', fontWeight: 'bolder' }}>Atten Exam</Link>
                            </li>
                         
                         <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/profile' className="card-link" style={{ color: '#286575', textDecoration: 'none', fontWeight: 'bolder' }}>Profile</Link>
                        </li>
                        <li style={{ display: 'inline-block', marginRight: '10px' }}>
                            <Link to='/logout' className="card-link" style={{ textDecoration: 'none', color: '#286575', fontWeight: 'bolder' }}>logout</Link>
                        </li>
                        </ul>  
                        </Row>
                        <Card style={{ width: '1000px', marginLeft: '35px', marginTop: '30px', height: '480px', backgroundColor: '#FFFFFF' }}>
                            
                       
                            <Card style={{ margin:'10px',width: '950px', backgroundColor: '#EBF8FC', marginLeft: '20px', marginTop: '30px', height: '380px' }}>
                            <Card.Title>
                        <h5  style={{ padding: '10px',paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'20px'}}>Asp.net</h5>
                        </Card.Title>
                        <hr style={{color: '#286575',}}/>
                        <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question_text}</p>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={answers[currentQuestionIndex] === option}
                onChange={handleAnswerChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmitAnswer}>
        {currentQuestionIndex === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
      </button>
    </div>
                            {/* <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Actions</th>
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
                        } 

                    </tbody>
                </table> */}

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

export default StudentPanelAttenExam;
