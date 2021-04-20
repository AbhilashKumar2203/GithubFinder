import React, { useContext,useEffect } from "react";
import PRCommentsContext from "../../context/prComments/prCommentsContext";

export const Repositories = () => {

  
  const prCommentsContext = useContext(PRCommentsContext);

  const repoList = prCommentsContext.repositories.map((repo, i) => {
    return (
      <option key={i} value={repo.id}>
        {repo.name}
      </option>
    );
  });

  const selectedRepo = (e) =>
    console.log(
      "selected value for dropdown is" +
        e.target.options[e.target.selectedIndex].text
    );

  return (
    <div className='grid-1'>
      
        <strong for="sel-options" className='lead'>Repositories</strong>
        <select id="sel-options" onChange={selectedRepo} style={{width:'300px',marginTop:'10px'}}>
          {repoList}
        </select>
        
      </div>
    
  );
};

export default Repositories;
