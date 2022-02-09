import styled from "styled-components";
import logo from "./img/logo.svg";

export const Header = styled.header`
  background-color: #fff;
  display: flex;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.051));
  height: 4.02vw;
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 900px) {
    height: 8.36vw;
    height: 7.8vw;
  }

  @media (max-width: 600px) {
    height: 15.45vw;
  }
`;

const Logo = styled.img`
  height: 2.65vw;
  margin: 0.65vw 0 0 3vw;

  @media (max-width: 900px) {
    width: 17.97vw;
    height: 4.72vw;
    margin: 1.59vw 0 0 1.95vw;
  }

  @media (max-width: 600px) {
    height: 8.94vw;
    width: 34.07vw;
    margin-top: 2.27vw;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Header>
      <Logo src={logo} alt="logo da InCicle" />
    </Header>
  );
};
