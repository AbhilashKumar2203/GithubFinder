import React ,{useReducer} from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';
import {

    SEARCH_USERS,
    SET_LOADING,
    GET_REPOS,
    GET_USER,
    CLEAR_USERS
} from '../types';


//Initialize initial state

const GithubState = props =>{
    const initialState={
        users:[],
        user:{},
        loading:false,
        repos:[]
    }


    //Use this to dispatch action and update state. Basically state will be modified by reducers and this is initial reducer configuration
    const [state,dispatch] = useReducer(GithubReducer,initialState);

    //Search Users
    const searchGithubUsers = async (text) => {
        setLoading();
        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} 
          & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    
        dispatch({
            type:'SEARCH_USERS',
            payload:response.data.items
        });
        
      };

    //Get User

    //Search a single user from gthub api

  const getUser = async (username) => {
    setLoading();
    const response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} 
      & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);

    // console.log('user details fetched are'+response);

    dispatch({type:GET_USER,payload:response.data});
  };

    //Get Repos
    
  const getUserRepos = async (username) => {
    setLoading();
    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} 
      & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);

    // console.log('user details fetched are'+response);

   dispatch({
       type:GET_REPOS,
       payload:response.data
   })
  };


    //Clear Users
     //Clear all users after clicking clear button
  const clearUsers = () => dispatch({type:CLEAR_USERS});
    

    //Set Loading
    const setLoading = ()=>dispatch({type:SET_LOADING})
    

    return <GithubContext.Provider
    value={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        searchGithubUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}

    </GithubContext.Provider>
}

export default GithubState;
