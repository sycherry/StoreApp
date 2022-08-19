import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from './actions';

const intialState = {
  likeCount: 0,
  isFetching: true,
  items: [],
  error: null,
};

let useReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {...state, isFetching: true, items: action.posts};

    case GET_POSTS_SUCCESS:
      return {...state, isFetching: false};

    case GET_POSTS_FAILURE:
      return {isFetching: false, error: action.error};

    // It handles the actions of the 'like' button updates
    case 'TOGGLE_LIKE': {
      let likes;
      if (action.payload.action === 'add') {
        // This happens when like button was toggled on
        likes = action.payload.likeCount + 1;
      } else if (action.payload.action === 'remove') {
        // This happens when like button was toggled off
        likes = action.payload.likeCount;
      } else {
        // This is initial state
        likes = action.payload.likeCount;
      }
      return {...state, likeCount: likes};
    }
    default:
      return state;
  }
};
export default useReducer;
