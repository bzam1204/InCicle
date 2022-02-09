import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { buscaQuadros } from "../../api/data";
import Quadro from "../Quadro";

const QuadrosPainel = styled.section`
  align-items: center;
  background: #fdfdfd;
  border-radius: 8px;
  display: flex;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  flex-direction: column;
  grid-area: quadros;
  height: 24.38vw;
  justify-content: space-around;
  margin: 0 0 0 0;
  margin-left: 2.27vw;
  padding: 0;
  width: 20.42vw;

  @media (max-width: 900px) {
    width: 44.02vw;
    height: 50.73vw;
    padding: 0;
    margin: 1.95vw 0 3.9vw 3.41vw;
    justify-content: flex-start;
  }

  @media (max-width: 600px) {
    width: 92.52vw;
    height: 107.01vw;
    padding: 1.87vw;
    margin: 1.87vw 0 7vw 0;
    justify-content: flex-start;
  }
`;

const Titulo = styled.h3`
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.17vw;
  line-height: 1.39vw;
  color: #707070;
  text-align: left;
  width: 19.19vw;
  margin: 0 0 0 0;

  @media (max-width: 900px) {
    width: 42.31vw;
    height: 2.46vw;
    font-size: 2.44vw;
    line-height: 2.8vw;
    margin-top: 0.86vw;
  }

  @media (max-width: 600px) {
    font-size: 4.67vw;
    line-height: 5.37vw;
    width: 92.52vw;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [quadros, setQuadros] = useState([]);
  useEffect(() => {
    buscaQuadros(setQuadros);
  }, []);

  return (
    <QuadrosPainel>
      <Titulo>Quadros de Gestão à Vista</Titulo>
      {quadros.map((quadro, index) => {
        return <Quadro key={index} quadro={quadro} />;
      })}
    </QuadrosPainel>
  );
};
