import React from "react";
import ProjectList from "./ProjectList";
import "./Container.css";
import ContactLinks from "./ContactLinks";
import RepoList from "./RepoList";

const Container = ({ id, data, repos }) => {
  const formatTitle = (title) => {
    if (title.includes(" ")) {
      let titleCased = [];
      title
        .split(" ")
        .forEach((word) =>
          titleCased.push(word.slice(0, 1).toUpperCase() + word.slice(1))
        );
      return titleCased.join(" ");
    }
    return title.slice(0, 1).toUpperCase() + title.slice(1);
  };
  return (
    <div className='container' id={id}>
      <div className='project-info'>
        <h2 className='project-header'>{data.about.header}</h2>
        <p className='project-text'>{data.about.text}</p>
      </div>
      <ProjectList
        className='project-list'
        data={data}
        formatTitle={formatTitle}
      />
      {repos ? (
        <RepoList
          className='repo-list'
          repos={repos}
          formatTitle={formatTitle}
        />
      ) : (
        ""
      )}
      <ContactLinks />
    </div>
  );
};

export default Container;
