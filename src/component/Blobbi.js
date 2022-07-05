import React from "react";
import styled from "styled-components";

const Blob = styled.div`
  border-radius: 50px;
  background-color: #72a0c1;
  color: #e52b50;
  position: relative;
  height: 100px;
  width: 100px;
  text-align: center;
`;

const Blobby = (props) => (
  <Blob>
    <p>OK</p>
    <p>OK</p>
    <h3>{props.name}</h3>
  </Blob>
);

export default Blobby;
