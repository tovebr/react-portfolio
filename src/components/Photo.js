import React from "react";
import Container from "./Container";

const Photo = ({data}) => {
    return (
        <Container id={data.title} data={data}/>
    )
}

export default Photo;