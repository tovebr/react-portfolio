import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "./Container";

const Code = ({ data }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/tovebr/repos"
      );
      setRepos(data);
    };
    getRepos();
  }, [repos]);

  return <Container id={"code"} data={data} repos={repos}></Container>;
};

export default Code;
