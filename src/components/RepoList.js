import React from "react";
import RepoItem from "./RepoItem";
import "./RepoList.css";

const RepoList = ({ repos, formatTitle }) => {
  const renderedRepos = repos.map((repo) => (
    <RepoItem key={repo.id} repo={repo} formatTitle={formatTitle} />
  ));
  return (
    <div id='repo-list'>
      <p className='repo-list-header'>All Github-repos</p>
      {renderedRepos}
    </div>
  );
};
export default RepoList;
