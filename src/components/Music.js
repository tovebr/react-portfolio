import React from "react";
import Container from "./Container";


const Music = ({data}) => {
    return (
        <Container id={data.title} data={data}/>
    )
}

export default Music;