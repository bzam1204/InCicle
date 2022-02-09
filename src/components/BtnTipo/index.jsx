import React, { useEffect, useState } from "react";
import iconeSeta from "./setaBaixo.svg";
import styled from "styled-components";
import { buscaPosts } from "../../api/data";

const Select = styled.button`
  background-color: #fff;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  color: #707070;
  font-size: 1.02vw;
  height: 2.71vw;
  padding: 0 0.22vw;
  text-transform: uppercase;
  width: 6.88vw;

  @media (max-width: 900px) {
    width: 14.39vw;
    height: 5.65vw;
    font-size: 2.2vw;
  }

  @media (max-width: 600px) {
    width: 14.49vw;
    height: 5.84vw;
    font-size: 2.56vw;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  return <Select>Tipo</Select>;
};
