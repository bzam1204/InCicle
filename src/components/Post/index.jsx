import React from "react";
import styled from "styled-components";
import ListaDeConvidados from "../ListaDeConvidados";
import Tipo from "../Tipo";

const Post = styled.article`
  margin-bottom: 0.74vw;
  height: 6.8vw;
  display: flex;
  align-items: center;
  background: #ffffff;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;

const Imagem = styled.img`
  width: 5.34vw;
  height: 5.34vw;
  background-size: cover;
  background-image: url(${(props) => props.imagem});
  margin: 0.8vw 1.17vw auto 0.8vw;
`;

const InfoPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`;

const Titulo = styled.h3`
  color: #707070;
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.17vw;
  height: 1.39vw;
  line-height: 1.39vw;
  margin: 0 0 0.36vw 0;
`;

const MetaContainer = styled.div`
  display: flex;
  margin: 0;
`;

const Place = styled.p`
  height: 0.8vw;
  font-family: var(--Open);
  font-weight: 300;
  font-size: 0.65vw;
  text-transform: uppercase;
  line-height: 0.8vw;
  color: #707070;
  margin: 0;
`;

const Date = styled.p`
  height: 0.8vw;
  font-family: var(--Open);
  font-weight: 300;
  font-size: 0.65vw;
  text-transform: uppercase;
  line-height: 0.8vw;
  color: #707070;
  margin: 0;
`;

const Description = styled.p`
  height: 1.31vw;
  font-family: var(--Open);
  font-weight: 300;
  font-size: 0.95vw;
  line-height: 1.31vw;
  color: #707070;
  margin: 0.36vw 0 0;
`;

function verificaEvento(post) {
  if (post.type === "event") {
    return <Date>{`| ${post.info.date} |`}</Date>;
  } else {
    return <Date>{post.info.date}</Date>;
  }
}

export default ({ post }) => {
  function verificaListaConvidados(post) {
    if (post.invited_people) {
      return <ListaDeConvidados post={post} />;
    }
  }
  return (
    <Post>
      <Imagem imagem={post.file.url} />
      <InfoPostContainer>
        <Titulo>{post.title}</Titulo>
        <MetaContainer>
          <Tipo post={post} />
          <Place>{post.info.place}</Place>
          {verificaEvento(post)}
          {verificaListaConvidados(post)}{" "}
        </MetaContainer>
        <Description>{post.description}</Description>
      </InfoPostContainer>
    </Post>
  );
};
