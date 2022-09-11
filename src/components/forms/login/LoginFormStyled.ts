import styled from "styled-components";

export const MainHeader = styled.div`
  text-align: center;
  margin-top: 0;
  padding-top: 20px;
  color: #6d6d6d;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .main-header__icon {
    font-size: 100px;
    padding: 20px;
  }
`;

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  color: #6d6d6d;

  .form-fields {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input {
    padding: 10px;
    margin: 20px;
    font-size: 1.2em;
    border: 0;
    border-bottom: 1px solid #6d6d6d;
    font-family: inherit;
  }

  input:focus {
    outline: none;
    border-bottom: 2px solid #3fb87b;
  }

  .buttons-container {
    display: flex;
    margin-top: 30px;

    @media screen and (min-width: 601px) {
      align-self: center;
      width: 100%;
      justify-content: space-between;
    }

    &__return-container {
      flex-grow: 1;

      @media screen and (min-width: 601px) {
        flex-grow: 0;
      }
    }

    > :first-child {
      flex-grow: 1;
      padding: 20px;
      background-color: #3fb87b;
      color: #fff;
      border: 1px solid #3fb87b;
      font-size: 1.2em;
      cursor: pointer;

      @media screen and (min-width: 601px) {
        border-radius: 10px;
        max-width: 100px;
      }
    }

    &__nav-link {
      flex-grow: 1;

      @media screen and (min-width: 601px) {
        width: 100%;
      }
    }

    &__return {
      width: 100%;
      padding: 20px;
      background-color: #fff;
      color: #3fb87b;
      border: 1px solid #3fb87b;
      font-size: 1.2em;
      cursor: pointer;

      @media screen and (min-width: 601px) {
        border-radius: 10px;
        width: 100px;
      }
    }
  }
`;
