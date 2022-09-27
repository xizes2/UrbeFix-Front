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
    bottom: 0;
    height: 64px;
    width: 100%;
    position: absolute;

    @media screen and (min-width: 601px) {
      align-self: center;
      justify-content: space-between;
      position: unset;
      width: 400px;
    }

    &__return-container {
      width: 100%;

      @media screen and (min-width: 601px) {
        width: unset;
      }
    }
  }
`;
