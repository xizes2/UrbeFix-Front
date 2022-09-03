import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #3fb87b;
  padding: 20px;

  img {
    padding: 20px 20px 40px 20px;
    margin: 0;
  }

  h2 {
    text-align: center;
    font-size: 30px;

    @media screen and (min-width: 601px) {
      font-size: 35px;
    }
  }

  p {
    text-align: center;
    font-size: 18px;
    max-width: 500px;
    padding: 20px;
    padding-bottom: 40px;
    margin: 0;

    @media screen and (min-width: 601px) {
      font-size: 20px;
    }
  }

  .buttons-container {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    width: 100%;

    @media screen and (min-width: 601px) {
      width: 540px;
    }

    &__login {
      padding: 20px;
      background-color: #3fb87b;
      color: #fff;
      border: 1px solid #3fb87b;
      font-size: 1.2em;
      border-radius: 10px;
      width: 140px;
    }

    &__register {
      padding: 20px;
      background-color: #fff;
      color: #3fb87b;
      border: 1px solid #3fb87b;
      font-size: 1.2em;
      border-radius: 10px;
      width: 140px;
    }
  }
`;

export default HomePageStyled;
