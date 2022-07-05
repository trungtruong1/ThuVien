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

const Blobby = () => (
  <Blob>
    <p>/-(_)-\</p>
    <p>+-^U_U^-+</p>
    <p> \|/\|/ </p>
  </Blob>
);

export default Blobby;
