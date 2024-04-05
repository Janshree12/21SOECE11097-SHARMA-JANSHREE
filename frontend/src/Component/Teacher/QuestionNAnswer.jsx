import { Container,Row,Col,Card, } from "react-bootstrap";

import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TeacherQNA = () => {
    const[sname,setName]=useState([])
    //const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5001/exams')
        .then(res=>setName(res.data))
        .catch(err=>console.log(err))

    },[])
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState({
        
      question_text: '',
      options: [],
      correct_answer: '',
      examname: ''
    });
    const navigate=useNavigate();
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
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewQuestion({
        ...newQuestion,
        [name]: value
      });
    };
  
    const handleAddOption = () => {
      setNewQuestion({
        ...newQuestion,
        options: [...newQuestion.options, '']
      });
    };
  
    const handleOptionChange = (index, value) => {
      const newOptions = [...newQuestion.options];
      newOptions[index] = value;
      setNewQuestion({
        ...newQuestion,
        options: newOptions
      });
    };
  
    const handleSaveQuestion = async () => {
      try {
        await axios.post('http://localhost:5001/api/questions', newQuestion);
        setNewQuestion({
          question_text: '',
          options: [],
          correct_answer: '',
          examname:''
        });
        navigate('/qna')
         // Refresh the list of questions
      } catch (error) {
        console.error('Error saving question:', error);
      }
    };
  

  return (
    <>
    <Container>
        <br/><br/>
        <Row>
            <Col md={4}>
                
                    
                    <Card style={{ width:'800px', backgroundColor: '#EBF8FC', height: '650px' }}>
                        
                        <Card.Body>
                        <Card.Title>
                        <h5  style={{ padding: '10px',paddingTop:'10px',paddingBottom:'0px', color: '#286575', fontWeight: 'bold' ,fontSize:'24px'}}>Question N Answer</h5>
                        </Card.Title>
                        

{/* <div className='justify-content-center' style={{color:'#286575',margin:'10px',padding:'5px', paddingBottom:'5px'}}>
            <div className='  rounded p-3'style={{backgroundColor: '#EBF8FC'}}>
             <form className="fa fa-align-left"style={{color:'#286575' ,margin:"7px",paddingTop:'10px'}} 
             //onSubmit={handleSubmit}
             >
            
                <div className='mb-2'>
                    <label htmlFor=''>Select Exam</label>
                    <select style={{ width: '100%', height: '30px', padding: '8px', border: '0px solid #286575', borderRadius: '4px', boxSizing: 'border-box' }}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Question</label>
                    <input
          type="text"
          name="question_text"
          value={newQuestion.question_text}
          onChange={handleInputChange}
        />
        <h3>Options:</h3>
      {newQuestion.options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleAddOption} >Add Option</button>
      <br/>
      <label>
        Correct Answer:
        <input
          type="text"
          name="correct_answer"
          value={newQuestion.correct_answer}
          onChange={handleInputChange}
        />
      </label>
                 </div>
                {/*<div className='mb-2'>
                    <label htmlFor=''>option1</label>
                    <input type="text" placeholder='Enter option1' className='form-control'
                    
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>option2</label>
                    <input type="text" placeholder='Enter option2' className='form-control'
                  
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>option3</label>
                    <input type="text" placeholder='Enter option3' className='form-control'
                  
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>option4</label>
                    <input type="text" placeholder='Enter option4' className='form-control'
                    
                    ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Answer</label>
                    <input type="text" placeholder='Enter Answer' className='form-control'
                   
                    ></input>
                </div> 


                
                <center>
                <button className='btn justify-content-center 'onClick={handleSaveQuestion} style={{margin:'12px',paddingTop:'5px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', backgroundColor: '#286575' }} >Submit</button>
                </center>
             </form>
             
            </div>
            <center>
                                
                                <br/><br/>
                                <p><u><Link to='/qna'style={{ textDecoration: 'none', color: '#286575',}}>Back To List</Link> </u></p>
                                </center>
        </div>*/}


<div>
      {/* <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.question_text}
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
            Correct Answer: {question.correct_answer}
          </li>
        ))}
      </ul> */}
      <h2>Add New Question</h2>
      <lable>
       Select Exam 
      <select value={newQuestion.examname}
          onChange={handleInputChange}   style={{ width: '100%', height: '40px', padding: '8px', border: '0px solid #286575', borderRadius: '4px', boxSizing: 'border-box' }}>
                    {
                            sname.map((data, i)=>(
                                
                                    <option key={i}>{data.exam_name}</option>
  

                                
                            ))
                        }
                        </select>
      </lable>
      <label>
        Question Text:
        <input
          type="text"
          name="question_text"
          value={newQuestion.question_text}
          onChange={handleInputChange}
          style={{color:'#286575' ,margin:"7px",paddingTop:'10px'}}
        />
      </label>
      <h3>Options:</h3>
      {newQuestion.options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </div>
      ))}
      <button  style={{margin:'12px',paddingTop:'5px', border: 'none', color: '#ffffff', width: '120px', backgroundColor: '#286575' }} onClick={handleAddOption}>Add Option</button>
      <br/>
      <label>
        Correct Answer:
        <input
          type="text"
          name="correct_answer"
          value={newQuestion.correct_answer}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <button style={{margin:'12px',paddingTop:'5px', border: 'none', borderRadius: '14px', color: '#ffffff', width: '120px', backgroundColor: '#286575' }} onClick={handleSaveQuestion}>Save </button>
    </div>
                        </Card.Body> 
                        </Card>


                
            </Col>
        </Row>
    </Container>
    </>
  );
};

export default TeacherQNA;
