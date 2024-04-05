import { Container, Row, Col, Card,  } from "react-bootstrap";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const AdminAddStudent = () => {
    const [students, setStudents] = useState([]);
    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/users');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleCheckboxChange = async (studentId, checked) => {
        try {
            if (checked) {
                // Add student to the group
                await axios.post('http://localhost:5001/api/group/addStudent'+id, { studentId });
                navigate('/admin')
            } else {
                // Remove student from the group
                await axios.post('http://localhost:5001/api/group/removeStudent', { studentId });
            }
            // Fetch updated students after the change
            fetchStudents();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <br /><br />
            <Container>
                <br /><br />
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '800px', backgroundColor: '#EBF8FC', height: '500px' }}>
                            <Card.Body>
                                <Card.Title>
                                    <h5 style={{ padding: '10px', paddingTop: '10px', paddingBottom: '0px', color: '#286575', fontWeight: 'bold', fontSize: '24px' }}>First Year</h5>
                                </Card.Title>
                                <Card.Subtitle>
                                    <h5 style={{ padding: '10px', paddingTop: '10px', paddingBottom: '0px', color: '#286575', fontWeight: 'bold', fontSize: '18px' }}>Student</h5>
                                </Card.Subtitle>
                                <ul>
                                    {students.map((student, i) => (
                                        <li key={i}>
                                            <input
                                                type="checkbox"
                                                
                                            />
                                            {student.name}
                                        </li>
                                        
                                        
                                    ))}
                                </ul>
                                < Link to='/admin' className="btn" style={{ margin: '10px', border: 'none', borderRadius: '10px', color: '#ffffff', width: '100px', fontSize: '17px', fontWeight: '550', backgroundColor: '#286575' }}>Update</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AdminAddStudent;
