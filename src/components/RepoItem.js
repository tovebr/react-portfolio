import React from "react";
import "./RepoItem.css";

const RepoItem = ({ repo, formatTitle }) => {
  return (
    <div className='repo-item'>
      <a href={repo.html_url} target={"_blank"} rel='noreferrer'>
        {formatTitle(repo.name)}
      </a>
      <small className='repo-language'>{repo.language}</small>
    </div>
  );
};

export default RepoItem;
