import * as ActionTypes from './constants';

const ideasReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.START_ADD_IDEA:
      return {
        ideas: {
          pending: true,
          data: state.ideas.data
        }
      };

    case ActionTypes.ADD_IDEA:
      return {
        ideas: {
          pending: false,
          data: [
            { title: action.title },
            ...state.ideas
          ]
        }
      };

    case ActionTypes.START_ADD_IDEAS:
      return {
        ideas: {
          pending: true,
          data: state.ideas.data
        }
      }

    case ActionTypes.ADD_IDEAS:
      return {
        ideas: {
          pending: false,
          data: action.ideas
        }
      };

    default:
      return state;

  };
};

export default ideasReducer;
