import React, { useState,useContext } from "react";
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const {setAlert} = alertContext;


  const [text, setText] = useState("");

  const onChange = (event) => setText(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchGithubUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search here..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        {githubContext.users.length >0 && (
          <button className="btn btn-block btn-light" onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};



export default Search;
