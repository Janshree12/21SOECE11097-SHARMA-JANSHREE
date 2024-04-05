//import { useState } from 'react'

import './App.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import App1 from './register';
import RegisterPage from './Component/Home/SigninandRegister/register';

import Home from './page/home';
import Navheader from './Component/Home/Navbar/navbar';
import AdminSignIn from './Component/Home/SigninandRegister/adminsignin';
import AdminPanel from './page/AdminPanel/Adminpanel';
import AdminPanel_Student from './page/AdminPanel/student';
import AdminPanel_User from './page/AdminPanel/user';
import GroupCreate from './Component/Admin/Group/Group_Create';
import StudentCreate from './Component/Admin/Student/Student_Create';
import UserCreate from './Component/Admin/User/User_Create';
import StudentUpdate from './Component/Admin/Student/studentUpdate';
import TeacherUpdate from './Component/Admin/User/teacherUpdate';
import TeacherSignIn from './Component/Home/SigninandRegister/teachersigin';
import StudentSignIn from './Component/Home/SigninandRegister/studentsigin';

//import TeacherPanel from './page/AdminPanel/user';
import StudentPanelAttenExam from './page/StudentPanel/AttenExam';
import TeacherPanelExam from './page/TeacherPanel/Exam';
import TeacherPanelQnA from './page/TeacherPanel/QnA';
import TeacherQNA from './Component/Teacher/QuestionNAnswer';
import TeacherCreateExam from './Component/Teacher/CreateExam';
import StudentPanelResult from './page/StudentPanel/Result';
import StudentPanelProfile from './page/StudentPanel/Profile';
import StudentUpdateDetails from './Component/Student/Update';
import AdminAddStudent from './Component/Admin/Group/AddStudent';
//import Navheaderlogout from './Component/Home/Navbar/logout';
//import Logout from './page/logout';







function App() {
  
  return (
    <html>
      <head></head>
      <body className='body'>
        <BrowserRouter>
        <Navheader/>
      
        <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/student' element={<StudentPanelAttenExam/>}/>
        <Route path='/teacher' element={<TeacherPanelExam/>}/>
        <Route path="/about" element={<h1>about</h1>}/>
        <Route path="/adminsignin" element={<AdminSignIn/>}/>
        <Route path="/studentlist" element={<AdminPanel_Student/>}/>
        <Route path="/teacherlist" element={<AdminPanel_User/>}/>
        <Route path="/createuser" element={<UserCreate/>}/>
        <Route path="/createstudent" element={<StudentCreate/>}/>
        <Route path="/creategroup" element={<GroupCreate/>}/>
        <Route path="/addstudent/:id" element={<AdminAddStudent/>}/>
        <Route path="/updatestudent/:id" element={<StudentUpdate/>}/>
        <Route path="/updateteacher/:id" element={<TeacherUpdate/>}/>
        <Route path="/teachersignin" element={<TeacherSignIn/>}/>
        <Route path="/studentsignin" element={<StudentSignIn/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/qna" element={<TeacherPanelQnA/>}/>
        <Route path="/createqna" element={<TeacherQNA/>}/>
        <Route path="/createexam" element={<TeacherCreateExam/>}/>
        <Route path="/result" element={<StudentPanelResult/>}/> 
        <Route path="/profile" element={<StudentPanelProfile/>}/>
        <Route path="/updatestd/:id" element={<StudentUpdateDetails/>}/>
        <Route path="/logout" element={<Home/>}/>

        </Routes>
        
        </BrowserRouter>
        
        
      </body>
    </html>

  )
}

export default App
