import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../Repo/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({  match }) => {
   
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user,repos, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    html_url,
    avatar_url,
    login,
    bio,
    blog,
    location,
    company,
    following,
    followers,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable :{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "200px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
              <a href={html_url} className="btn btn-dark my-1">
                {" "}
                Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username:</strong>
                      {name}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company:</strong>
                      {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website:</strong>
                      {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </Fragment>
          )}
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-light">Following:{following}</div>
        <div className="badge badge-dark">Public Repos:{public_repos}</div>
        <div className="badge badge-success">Public Gists:{public_gists}</div>
      </div>
      <div>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};



export default User;
