import * as PostActions from './post.actions';
import {Post} from './post.model';
// @ts-ignore
import {Action} from "rxjs/dist/types/internal/scheduler/Action";

// export type Action = PostActions.All;

const defaultState: Post = {
  text: 'Hello I am the default post',
  likes: 0
}

const newState = (state: any, newData: any) => {
  return Object.assign({}, state, newData)
}

export function postReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state);
  switch (action.type) {
    case "EDIT_TEXT":
      return newState(state, {text: action.payload});
    case "UPVOTE":
      return newState(state, {likes: state.likes + 1});
    case "DOWNVOTE":
      return newState(state, {likes: state.likes - 1});
    case "RESET":
      return defaultState;
    default:
      return state;
  }
}
