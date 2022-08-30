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

export const RegisterContainer = styled.form`
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

  .image-button {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 10px;

    span {
      padding: 10px;
    }

    &__icon-camera {
      font-size: 40px;
    }
  }

  .buttons-container {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    > :first-child {
      flex-grow: 1;
      padding: 20px;
      background-color: #3fb87b;
      color: #fff;
      border: 1px solid #3fb87b;
      font-size: 1.2em;
    }

    > :nth-child(2) {
      flex-grow: 1;
      padding: 20px;
      background-color: #fff;
      color: #3fb87b;
      border: 1px solid #3fb87b;
      font-size: 1.2em;
    }
  }
`;
