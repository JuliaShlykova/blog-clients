  import axios from "axios";
  
  const url = 'http://localhost:5000';

  export const getPosts = async() => {
    try {
      const response = await axios.get(`${url}/post`);
      console.log('response: ', response);
      if (response.status===200) {
        return response.data;
      } else {
        throw new Error(response.statusText);
      }
    } catch(err) {
      console.log(err.message);
      return false;
    }
  }

  export const getPost = async(postid) => {
    try{
      const response = await axios.get(`${url}/post/${postid}`);
      if (response.status===200) {
        return response.data;
      } else {
        throw new Error(response.statusText);
      }
    } catch(err) {
      console.log(err.message);
      return false;
    }
  }

  export const setComment = async(data) => {
     try {
      const response = await axios.post(`${url}/comment/create`, data);
      return response.data;
     } catch(err) {
      console.log('err: ', err);
      console.log(err.message);
      if (err.response.status===400) {
        return {errors: err.response.data.errors};
      }
      return false;
    }
  }