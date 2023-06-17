import React, { useState } from 'react'
import { setComment } from '../apiCaller';

const CommentForm = ({postid}) => {

  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try{
      const response = await setComment({
        username,
        text,
        postid
      });
      if (response.hasOwnProperty('errors')) {
        setErrors(response['errors']);
      } else {
        window.location.reload();
      }
    } catch(err) {
      console.log('error');
    }
  }

  return (
    <div className='comment-form-container'>
      <h2>Share Your Opinion</h2>
      <form action="" className='comment-form' onSubmit={submitForm} >
        <label htmlFor="">Username: </label>
        <input type="text" id="username" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} required />
        <label htmlFor="comment-text">Comment: </label>
        <textarea type="textarea" id="comment-text" name="text" value={text} onChange={(e)=>{setText(e.target.value)}} required />
        <div className="errors">
          {errors?errors.map((err,i) => {
            return (
              <p key={i}>{err.msg}</p>
            )
          }):null}
        </div>
        <button type="submit">Send</button>
      </form>

    </div>
  )
}

export default CommentForm