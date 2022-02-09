import React from "react";
import styled from "styled-components";
import worldIcon from "./img/worldIcon.svg";
import optionIcon from "./img/optionIcon.svg";
import { Imagem } from "../Post";

const Quadro = styled.div`
  background: rgba(52, 137, 177, 0.1);
  display: flex;
  flex-direction: column;
  height: 6.32vw;
  align-items: center;
  margin: 0 0 0 0;
  padding: 0 0 0;
  width: 19.19vw;

  @media (max-width: 900px) {
    width: 42.31vw;
    height: 14.66vw;
    margin-top: 0.86vw;
  }

  @media (max-width: 600px) {
    width: 88.87vw;
    height: 32.01vw;
    padding: 1.87vw;
    margin: 1.87vw 0 0 0;
  }
`;

const ContainerControl = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 0;
  width: 18.45vw;

  @media (max-width: 900px) {
    width: 40.56vw;
    height: 2.58vw;
    margin-top: 0.86vw;
  }

  @media (max-width: 600px) {
    width: 88.68vw;
  }
`;

const Titulo = styled.h4`
  color: #707070;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 0.95vw;
  line-height: 1.1vw;
  margin: 0.07vw 0 0 0;

  @media (max-width: 900px) {
    font-size: 1.59vw;
    height: 2.58vw;
    line-height: 2.58vw;
  }

  @media (max-width: 600px) {
    margin: 0;
    line-height: 5.61vw;
    font-size: 3.04vw;
  }
`;

const ContainerIcons = styled.div`
  margin: 0.15vw 0 0 0;

  @media (max-width: 900px) {
    margin: 0;
    height: 2.58vw;
  }

  @media (max-width: 600px) {
    margin: 0;
    height: 5.64vw;
  }
`;
const WorldIcon = styled.img`
  border: none;
  height: 1.17vw;
  margin: 0 0.22vw 0 0;
  width: 1.17vw;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 2.57vw;
    height: 2.58vw;
    margin-right: 0.48vw;
  }

  @media (max-width: 600px) {
    width: 5.61vw;
    height: 5.64vw;
    margin-right: 1.05vw;
  }
`;
const OptionIcon = styled.img`
  width: 1.17vw;
  height: 1.17vw;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 2.57vw;
    height: 2.58vw;
  }

  @media (max-width: 600px) {
    width: 5.61vw;
    height: 5.64vw;
  }
`;

const ContainerImages = styled.div`
  display: flex;
  width: 18.45vw;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    width: 40.6vw;
    height: 9.47vw;
    margin-top: 0.86vw;
  }

  @media (max-width: 600px) {
    width: 88.79vw;
    margin-top: 1.87vw;
  }
`;

const ImagemQuadro = styled(Imagem)`
  width: 4.39vw;
  height: 4.39vw;
  margin: 0;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 900px) {
    width: 9.67vw;
    height: 9.47vw;
  }

  @media (max-width: 600px) {
    width: 20.79vw;
    height: 20.67vw;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ quadro }) => {
  return (
    <Quadro>
      <ContainerControl>
        <Titulo>{quadro.title}</Titulo>
        <ContainerIcons>
          <WorldIcon src={worldIcon} alt="ícone de mundo" />
          <OptionIcon src={optionIcon} alt="opções" />
        </ContainerIcons>
      </ContainerControl>
      <ContainerImages>
        {quadro.resume_files.map((img, index) => {
          return <ImagemQuadro key={index} src={img.file} alt="imagem" />;
        })}
      </ContainerImages>
    </Quadro>
  );
};
