import React from 'react'

const Comment = ({username, createdAt, text}) => {
  return (
    <div className='comment-item'>
      <p className="comment-username">{username}</p>
      <p className="comment-text">{text}</p>
      <p className="comment-createdAt">{createdAt}</p>
    </div>
  )
}

export default Comment