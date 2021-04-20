import React, { useReducer } from "react";
import PRCommentsContext from "./prCommentsContext";
import PRCommentsReducer from "./prCommentsReducer";
import {
  GET_PROJECTS,
  SET_LOADING,
  GET_REPOSITORIES,
  SET_PROJECT,
} from "../types";
import axios from "axios";

//Initialize initial state

const PRCommentsState = (props) => {
  const initialState = {
    projects: [],
    repositories: [],
    loading: false,
  };

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Use this to dispatch action and update state. Basically state will be modified by reducers and this is initial reducer configuration
  const [state, dispatch] = useReducer(PRCommentsReducer, initialState);

  //Fetch Projects list from API
  const getProjects = async () => {
    setLoading();
    const response = await axios.get(
      `http://localhost:8082/bbPullRequest/product/getProjectList`
    );
    console.log("project list is " + response);

    // console.log('user details fetched are'+response);

    dispatch({
      type: GET_PROJECTS,
      payload: response.data.values,
    });
  };

  //Fetch Repositories list from API
  const getRepositories = async (project) => {
    setLoading();
    console.log("selected project is" + project);
    const response = await axios.get(
      `http://localhost:8082/bbPullRequest/product/getRepoList?project=${project}`
    );

    // console.log('user details fetched are'+response);

    dispatch({
      type: GET_REPOSITORIES,
      payload: response.data.values,
    });
  };

  return (
    <PRCommentsContext.Provider
      value={{
        projects: state.projects,
        repositories: state.repositories,
        getProjects,
        getRepositories,
      }}
    >
      {props.children}
    </PRCommentsContext.Provider>
  );
};

export default PRCommentsState;
