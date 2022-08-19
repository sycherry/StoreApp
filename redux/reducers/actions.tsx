import data from '../../data.json';

// const API_URL =
//   '';

export const getPosts = () => {
  return async (dispatch: any) => {
    let json;
    try {
      // getting posts from Api
      // const result = await fetch(API_URL);
      // json = await result.json();

      json = [...data];
      // return post results
      dispatch(getPostsRequest(json));
    } catch (error) {
      // return failure response error
      dispatch(getPostsFailure(error));
    } finally {
      // This code is for testing of loading indicator
      // await wait(2)
      // loading complete
      dispatch(getPostsSuccess());
    }
  };
};

// This code is for testing of loading indicator
// function wait(seconds:number) {
//     return new Promise(resolve => {
//         setTimeout(() => { resolve('') }, seconds * 1000);
//     })
// }

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
const getPostsRequest = (json: any) => {
  return {
    type: GET_POSTS_REQUEST,
    posts: json,
  };
};

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const getPostsSuccess = () => {
  return {
    type: GET_POSTS_SUCCESS,
  };
};

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
const getPostsFailure = (error: any) => {
  return {
    type: GET_POSTS_FAILURE,
    error: error,
  };
};
