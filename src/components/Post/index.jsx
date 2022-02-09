import React from "react";
import styled from "styled-components";
import ListaDeConvidados from "../ListaDeConvidados";
import Tipo from "../Tipo";
import postOption from "./postOption.svg";

const Post = styled.article`
  margin-bottom: 0.74vw;
  height: 6.8vw;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 900px) {
    width: 92.68vw;
    height: 9.76vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 0 0.98vw;
  }

  @media (max-width: 600px) {
    width: 96.26vw;
    height: 133.88vw;
    border-radius: 5px;
    background: #fafafa;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    margin-bottom: 2vw;
  }
`;

export const Imagem = styled.img`
  width: 5.34vw;
  height: 5.34vw;
  background-size: cover;
  background-image: url(${(props) => props.imagem});
  margin: 0.8vw 1.17vw auto 0.8vw;
  @media (max-width: 900px) {
    width: 8.78vw;
    height: 8.78vw;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 0 0 0.49vw;
  }
  @media (max-width: 600px) {
    width: 92.52vw;
    height: 92.52vw;
    margin-top: 8px;
  }
`;

const InfoPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;

  @media (max-width: 900px) {
    width: 79.02vw;
    height: 9.76vw;
    margin: 0 0 0 0.98vw;
    justify-content: flex-start;
  }
  
  @media (max-width: 600px) {
    width: 92.52vw;
    height: 35.51vw;
  }
`;

const Titulo = styled.h3`
  color: #707070;
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.17vw;
  line-height: 1.39vw;
  margin: 0 0 0.36vw 0;

  @media (max-width: 900px) {
    height: 2.32vw;
    font-size: 1.95vw;
    line-height: 2.32vw;
    margin: 0.49vw 0 0;
  }
  @media (max-width: 600px) {
    width: 92.52vw;
    height: fit-content;
    font-size: 4.67vw;
    line-height: 5.37vw;
    margin-top: 1.87vw;
    text-align: left;
  }
`;

const MetaContainer = styled.div`
  display: flex;
  margin: 0;
  @media (max-width: 900px) {
    height: 1.71vw;
    margin-top: 0.49vw;
  }
  @media (max-width: 600px) {
    width: 92.52vw;
    height: 3.27vw;
    margin-top: 1.87vw;
  }
`;

const Place = styled.p`
  height: 0.8vw;
  font-family: var(--Open);
  font-weight: 300;
  font-size: 0.65vw;
  text-transform: uppercase;
  line-height: 0.8vw;
  color: #707070;
  margin: 0 0.29vw 0 0;

  @media (max-width: 900px) {
    font-size: 1.1vw;
    line-height: 1.71vw;
    margin-left: 0.98vw;
  }
  @media (max-width: 600px) {
    font-size: 2.1vw;
    line-height: 2.8vw;
    margin-left: 1.87vw;

    text-align: center;
    color: #707070;
  }
`;

const Date = styled.p`
  height: 0.8vw;
  font-family: var(--Open);
  font-weight: 300;
  font-size: 0.65vw;
  text-transform: uppercase;
  line-height: 0.8vw;
  color: #707070;
  margin: 0 0.29vw 0 0;

  @media (max-width: 900px) {
    font-size: 1.1vw;
    margin-left: 0.98vw;
    line-height: 1.71vw;
  }
  @media (max-width: 600px) {
    font-size: 2.1vw;
    line-height: 2.8vw;
    margin-left: 1.87vw;
    margin-left: 0.98vw;
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: var(--Open);
  font-weight: 300;
  font-size: 0.95vw;
  line-height: 1.31vw;
  color: #707070;
  margin: 0.36vw 0 0;

  @media (max-width: 900px) {
    font-size: 1.34vw;
    line-height: 1.83vw;
    margin-top: 0.49vw;
  }
  @media (max-width: 600px) {
    font-size: 3.04vw;
    line-height: 4.21vw;
    text-align: left;
    margin-top: 1.87vw;
  }
`;

const PostOptionContainer = styled.div`
  width: 28%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    width: auto;
    display: auto;
    padding: 0;
  }
  @media (max-width: 600px) {
    display: flex;
    width: 92.52vw;
    justify-content: flex-end;
    padding-bottom: 1.87vw;
  }
`;

const PostOption = styled.img`
  @media (max-width: 900px) {
    width: 2.44vw;
  }

  @media(max-width: 600px) {
    width: 5.61vw;
  }
`;

function verificaEvento(post) {
  if (post.type === "event") {
    return <Date>{`| ${post.info.date} |`}</Date>;
  } else if (post.info.place) {
    return <Date>{`| ${post.info.date}`}</Date>;
  } else {
    return <Date>{post.info.date}</Date>;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
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

      <PostOptionContainer>
        <PostOption src={postOption} />
      </PostOptionContainer>
    </Post>
  );
};
