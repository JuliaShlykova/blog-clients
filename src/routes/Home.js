import React, { useEffect, useState } from 'react'
import { getPosts } from '../apiCaller';
import PostItem from '../components/PostItem';
import Loading from '../components/Loading';

const Home = () => {

  const [posts, setposts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getPosts().then(response=>{
      if(response){
        setposts(response);
      } else{
        console.log('failed to download');
      }
      setLoading(false);
    })
  }, []);

  return (
    <>
      {loading
      ?<Loading />
      :posts
        ?<>
          <PostItem post={posts[0]} first={true} numberOfImg={1} />
          <div className='older-post-items'>
            {posts.map((post,i) => {
              if(i>0){
              return (
                <PostItem post={post} first={i===0?true:false} numberOfImg={i%4+1} key={i} />
              )
              } else {
                return null;
              }
            })}
          </div>
        </>
        :'No Posts'}
    </>
  )
}

export default Home