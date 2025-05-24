import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../Axiosconfig';
import styles from '../Login/login.module.css';

function Question() {
  const navigate = useNavigate();
  const titledom = useRef();
  const descdom = useRef();
  const tagdom = useRef();
  const [successMsg, setSuccessMsg] = useState('');

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

      setSuccessMsg('Question is posted');
      setTimeout(() => {
        setSuccessMsg('');
        navigate('/');
      }, 2000);

    } catch (error) {
      setSuccessMsg('Question could not be posted');
      console.log(error.response || error.message);
      setTimeout(() => setSuccessMsg(''), 2000);
    }
  }

  return (
    <div className="login">
      <form className={styles.login1} onSubmit={handleSubmit}>
        <textarea ref={titledom} placeholder="Title" />
        <textarea ref={descdom} placeholder="Description" />
        <textarea ref={tagdom} placeholder="Tag (e.g. React, SQL)" />
        <button type="submit">Post Question</button>
      </form>
      {successMsg && (
        <p style={{ color: successMsg === 'Question is posted' ? 'green' : 'red', fontWeight: 'bold' }}>
          {successMsg}
        </p>
      )}
    </div>
  );
}

export default Question;
