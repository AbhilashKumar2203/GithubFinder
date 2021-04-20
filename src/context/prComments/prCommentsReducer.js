import { GET_PROJECTS,SET_LOADING,GET_REPOSITORIES,SET_PROJECT} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
      case GET_REPOSITORIES:
        return {
          ...state,
          repositories: action.payload,
          loading: false,
        };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
      case SET_PROJECT:
      return {
        ...state,
        selectedProject: action.payload
      };
    default:
      return state;
  }
};
