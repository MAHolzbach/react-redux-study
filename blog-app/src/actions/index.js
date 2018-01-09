import axios from "axios";

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?herpaderp123";

export const fetchPosts = () =>  {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
};
