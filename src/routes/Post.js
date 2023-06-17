import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getPost } from '../apiCaller';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';
import Loading from '../components/Loading';

const Post = () => {

  const {postid} = useParams();

  const [postInfo, setPostInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getPost(postid).then(response=>{
      if(response) {
        console.log(response);
        setPostInfo(response);
      } else {
        console.log('failed to download');
      }
      setLoading(false);
    })
  }, [postid]);

  return (
    <>
      {loading
      ?<Loading />
      :postInfo
      ?<div className="post-container">
        <div className="post-up-image"> </div>
        <div className="post-content">
          <h1>{postInfo.post.title}</h1>
          <p className="post-content-text">
            {postInfo.post.text}
          </p>
        </div>
        <div className="comment-section">
          <h2>Comments</h2>
          {postInfo.comments.map((comment, i)=>{
            return(
              <Comment createdAt={comment.formatted_timestamp} username={comment.username} text={comment.text} key={i} />
            )
          })}
          <CommentForm postid={postid} />
        </div>
      </div>
      :'No Post'}
    </>
  )
}

export default Post