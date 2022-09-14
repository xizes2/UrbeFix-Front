import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 110px;
  position: sticky;
  top: 0;
  z-index: 2;

  background: linear-gradient(
    270deg,
    rgba(137, 227, 255, 1) 0%,
    rgba(63, 184, 123, 1) 71%
  );

  .main-title {
    height: 100%;
  }

  .urbefix-logo {
    padding: 10px 10px 0;
  }

  .main-header__logout-button {
    padding: 10px;
    background-color: #fff;
    color: #3fb87b;
    border: 1px solid #3fb87b;
    border-radius: 10px;
    font-size: 1.1em;
    cursor: pointer;
    height: fit-content;
    margin: 20px;
    height: 54px;

    @media screen and (min-width: 601px) {
      font-size: 1.3rem;
      padding: 10px 20px;
      margin: 20px;
      height: 64px;
    }
  }

  .main-header__location {
    color: #fff;
    text-align: center;
    font-size: 1.2em;

    @media screen and (min-width: 601px) {
      font-size: 1.5rem;
    }
  }
`;

export default HeaderStyled;
