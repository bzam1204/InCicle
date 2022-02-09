import React from "react";
import styled from "styled-components";

const ListaDeConvidados = styled.p`
  height: 0.87vw;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 0.65vw;
  line-height: 0.87vw;
  color: #3489b1;
  margin: 0;
  padding: 0;
  text-decoration: underline;
  @media (max-width: 900px) {
    font-size: 1.1vw;
    line-height: 1.71vw;
    margin-left: 0.98vw;
  }
  @media (max-width: 600px) {
    margin-left: 1.87vw;
    font-size: 9px;
    line-height: 12px;
    display: flex;
  }

  
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ post }) => {
  function numeroDeConvidados(post) {
    return post.invited_people.length;
  }

  function confirmados(post) {
    let confirmados = 0;
    post.invited_people.map((convidado) => {
      if (convidado.confirmed_presence) confirmados++;
    });
    return confirmados;
  }

  return (
    <ListaDeConvidados>{`${confirmados(
      post
    )} CONFIRMAÇÕES DE ${numeroDeConvidados(post)}`}</ListaDeConvidados>
  );
};
