import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Signup/Register';
import { useEffect, useState, createContext } from 'react';
import axios from './Pages/Axiosconfig';
import Appcontext from "./Appcontext"
import AnswersPage from './Pages/Answer/Answer';
import Question from './Pages/Question/Question';




function App() {
  const [user, setuser] = useState({});
  const [questions, setQuestions] = useState([]);

  const token = localStorage.getItem('token_id');
  const navigate = useNavigate();

  async function validUser() {
    try {
      const { data } = await axios.get('/users/check', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setuser(data);
    } catch (error) {
      console.log(error.response);
      navigate('/login');
    }
  }

  async function getAllQuestions() {
    try {
      const { data } = await axios.get('/questions/all-questions', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setQuestions(data);
    } catch (error) {
      console.log('Error fetching questions:', error.response);
    }
  }

  useEffect(() => {
    validUser();
    getAllQuestions();
  }, []);

  return (
    <Appcontext.Provider value={{ user, setuser, questions }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/answers/:questionid" element={<AnswersPage />} />
        <Route path="/question/" element = {<Question/>}/>
      </Routes>
    </Appcontext.Provider>
  );
}

export { Appcontext }; 
export default App;
