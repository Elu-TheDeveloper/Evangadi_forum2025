import React from 'react'
import { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from '../Axiosconfig'
import styles from '../Login/login.module.css';

function Question() {
  const navigate = useNavigate();
  const titledom = useRef();
  const descdom = useRef();
  const tagdom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const titleValue = titledom.current.value;
    const descValue = descdom.current.value;
    const tagValue = tagdom.current.value;
  
    if (!titleValue || !descValue || !tagValue) {
      return alert('Please fill all required information');
    }
  
    try {
      await axios.post('/questions/ask', {
        title: titleValue,
        description: descValue,
        tag: tagValue,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token_id')}`,
        },
      });
  
      alert('Question posted successfully.');
      navigate('/');
    } catch (error) {
      alert('Question could not be posted');
      console.log(error.response || error.message);
    }
  }
  

  return (
    <div>
      <form className={styles.loginX1} onSubmit={handleSubmit}>
        <input ref={titledom} type="text" placeholder="Title" />
        <input ref={descdom} type="text" placeholder="Description" />
        <input ref={tagdom} type="text" placeholder="Tag (e.g. React, SQL)" />
        <button type="submit">Post Question</button>
      
      </form>
    </div>
  );
}

export default Question;
