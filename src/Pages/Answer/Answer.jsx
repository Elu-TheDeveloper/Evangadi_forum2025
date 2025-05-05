import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Appcontext } from '../../App';
import style from "../Login/login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function AnswersPage() {
  const { questionid } = useParams();
  const { questions, user } = useContext(Appcontext);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  

  useEffect(() => {
    if (questions && questionid) {
      const foundQuestion = questions.find(q => q.questionid === questionid);
      setQuestion(foundQuestion);
    }

    const fetchAnswers = async () => {
      try {
        const res = await fetch(`http://localhost:7700/api/answers/${questionid}`);
        if (!res.ok) {
          console.error('Server error:', res.status);
          return;
        }
        const data = await res.json();
        setAnswers(data);
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    };

    fetchAnswers();
  }, [questions, questionid]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newAnswer.trim()) {
      return alert('Answer cannot be empty');
    }

    try {
      const res = await fetch(`http://localhost:7700/api/answers/${questionid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token_id')}`,
        },
        body: JSON.stringify({ answer: newAnswer }),
      });
if (res.ok){
  setSuccessMsg('Your answer is posted')
  setAnswers('')
}
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.msg || 'Failed to post answer');
      }

      const saved = await res.json();
      setAnswers(prev => [...prev, saved]);
      setNewAnswer('');
    } catch (error) {
      alert('Could not post your answer');
      console.error(error.message);
    }
    setTimeout(()=>setSuccessMsg(''),3000
    )
  };

  return (
    <div className={style.answers_page}>
      {question && (
        <>
          <h2>{question.title}</h2>
          <p>{question.description}</p>
        </>
      )}

      <h3>Answers</h3>
      {answers.length > 0 ? (
        answers.map((answer, index) => (
          <div key={index} className={style.answer_card}>
             <div className="good">
             <FontAwesomeIcon icon={faCircleUser} size="2x" />
             </div>
            <p><strong>{answer.username}</strong> :</p>
            <p>{answer.answer}</p>
          </div>
        ))
      ) : (
        <p>No answers yet.</p>
      )}

      <form onSubmit={handleSubmit} className={style.answer_form}>
        <input type='text' className={style.answer_box}
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="Write your answer..."
        />
        <button type="submit">Post Answer</button>
      </form>
      
{successMsg && (
  <p style={{ color: successMsg.includes('') ? 'green' : 'red', fontWeight: 'bold' }}>
    {successMsg}
  </p>
)}
    </div>
  );
}

export default AnswersPage;
