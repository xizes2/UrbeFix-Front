import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(
    270deg,
    rgba(137, 227, 255, 1) 0%,
    rgba(63, 184, 123, 1) 71%
  );

  .urbefix-logo {
    padding: 20px;
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

    @media screen and (min-width: 601px) {
      font-size: 1.2em;
      padding: 20px;
      margin: 20px;
    }
  }

  .main-header__location {
    color: #fff;
    text-align: center;
  }
`;

export default HeaderStyled;
