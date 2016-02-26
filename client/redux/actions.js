import * as ActionTypes from './constants';
import config from '../../server/config';

const baseURL = `http://localhost:${(config.port)}`;

export function setIdea(idea) {
  return {
    type: ActionTypes.ADD_IDEA,
    title: idea.title
  };
}

export function startAddIdea() {
  return {
    type: ActionTypes.START_ADD_IDEA
  };
}

export function addIdeaRequest(idea) {
  return (dispatch) => {
    fetch(`${baseURL}/api/ideas`,
      {
        method: 'post',
        body: JSON.stringify({
          title: idea.title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => (res.json()))
      .then(res => (res.idea));
  };
}

export function addIdea(idea) {
  return (dispatch) => {
    dispatch(startAddIdea());
    addIdeaRequest(idea)
      .then(idea => {
        dispatch(setIdea(idea))
      });
  };
}

export function setIdeas(ideas) {
  return {
    type: ActionTypes.ADD_IDEAS,
    ideas,
  };
}

export function startAddIdeas() {
  return {
    type: ActionTypes.START_ADD_IDEAS
  };
}

export function fetchIdeas() {
  return fetch(`${baseURL}/api/ideas`)
    .then(res => (res.json()))
    .then(res => (res.ideas));
}

export function addIdeas() {
  return (dispatch) => {
    dispatch(startAddIdeas());
    fetchIdeas()
      .then(ideas => {
        dispatch(setIdeas(ideas))
      });
  }
}
