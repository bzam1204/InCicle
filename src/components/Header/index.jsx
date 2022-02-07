import styled from "styled-components";
import logo from "./img/logo.svg";

export const Header = styled.header`
  background-color: #fff;
  display: flex;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.051));
  height: 4.02vw;
  width: 100vw;

  @media (max-width: 900px) {
    height: 8.36vw;
  }

  @media (max-width: 600px) {
    height: 15.45vw;
  }
`;

const Logo = styled.img`
  height: 2.65vw;
  margin: 0.65vw 0 0 3vw;

  @media (max-width: 900px) {
    height: 6.01vw;
    margin-top: 1.17vw;
  }

  @media (max-width: 600px) {
    height: 9.66vw;
    margin-top: 2.27vw;
  }
`;

export default () => {
  return (
    <Header>
      <Logo src={logo} alt="logo da InCicle" />
    </Header>
  );
};
