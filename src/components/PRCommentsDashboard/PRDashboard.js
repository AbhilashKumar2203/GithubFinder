import React, { Fragment, useEffect, useContext } from "react";
import PRCommentsContext from "../../context/prComments/prCommentsContext";
import Projects from "./Projects";
import Repositories from "./Repositories";

export const PRDashboard = () => {
  const prCommentsContext = useContext(PRCommentsContext);
  useEffect(() => {
    prCommentsContext.getProjects();
    prCommentsContext.getRepositories('AI');
  }, []);

  return (
    <Fragment>
      <form className="form">
        <div className="grid-4">
          <Projects />
          <Repositories />
                  
        </div>
        <div className="center" style={{marginTop:'100px'}}>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block center"
          style={{width:'200px'}}
        />
        </div>
      </form>
    </Fragment>
  );
};
