import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #3fb87b;
  padding: 20px;
  max-width: 400px;

  @media screen and (min-width: 601px) {
    margin: 0 auto;
  }

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
    margin-top: 30px;
    bottom: 0;
    height: 64px;
    width: 100%;
    position: absolute;

    @media screen and (min-width: 601px) {
      align-self: center;
      justify-content: space-between;
      width: 100%;
      position: unset;
    }

    &__link {
      flex-grow: 1;
      width: 100%;

      @media screen and (min-width: 601px) {
        flex-grow: unset;
        width: unset;
      }
    }

    &__login {
      padding: 20px;
      background-color: #3fb87b;
      color: #fff;
      border: 1px solid #3fb87b;
      font-size: 1.2em;
      cursor: pointer;
      width: 100%;

      @media screen and (min-width: 601px) {
        width: 150px;
        border-radius: 10px;
      }
    }

    &__register {
      padding: 20px;
      background-color: #fff;
      color: #3fb87b;
      border: 1px solid #3fb87b;
      font-size: 1.2em;
      cursor: pointer;
      width: 100%;

      @media screen and (min-width: 601px) {
        width: 150px;
        border-radius: 10px;
      }
    }
  }
`;

export default HomePageStyled;
