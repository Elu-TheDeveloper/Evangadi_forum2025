import React, { useContext } from 'react';
import { Appcontext } from '../../App';
import "../Home/home.style.css";
import style from '../Login/login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { user, questions } = useContext(Appcontext);
  const navigate = useNavigate();

  const handleNavigate = (questionid) => {
    navigate(`/answers/${questionid}`);
  }
  return (

    <div className={style.question}>
      {user && <h2 className={style.welcome}>Welcome,<br />{user.username}!</h2>}

      <h2>All Questions</h2>

      {questions && questions.length > 0 ? (
        questions.map((q, index) => (
          <div key={index} className={style.question_card}>
            <div className={style.card_top}>
              <FontAwesomeIcon icon={faCircleUser} size="3x" />
              <small className={style.asked_by}>Asked by: {q.username}</small>
            </div>

            <div className={style.title_with_icon}>
              <h3>{q.title}</h3>

            </div>
              <p className={style.description}>{q.description} </p> 
              <p>< FontAwesomeIcon icon={faArrowRight} className={style.arrow_icon} onClick={() => handleNavigate(q.questionid)}
                style={{ cursor: 'pointer' }}/></p> 
          </div>
        ))
      ) : (
        <p>No questions found.</p>
      )}
    </div>
  );
}

export default Home;
