import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({post, first=false, numberOfImg}) => {
  return (
    <Link to={`/post/${post.id}`}  className={first?'first-post-item':'post-item'}>
    <div>
      <div className="img-container">
        <img src={`assets/images/${numberOfImg}.jpg`} alt="" />
      </div>
      <p className="post-title">{post.title}</p>
      {first?(<p className="post-text">{post.text}</p>):null}
      <p className="post-date">{post.formatted_timestamp}</p>
    </div>
    </Link>
  )
}

export default PostItem