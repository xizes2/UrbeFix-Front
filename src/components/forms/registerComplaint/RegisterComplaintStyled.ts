import styled from "styled-components";

const RegisterComplaintStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  color: #6d6d6d;
  min-height: 600px;

  .category-selection {
    background-color: #3fb87b;
    width: fit-content;
    margin: 20px;
    border: none;
    padding: 10px;
    font-size: 1.2em;
    color: #fff;
    border-radius: 10px;

    * {
      background-color: #3fb87b;
    }
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

  .image-container {
    display: flex;
    justify-content: center;

    .image-button {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      padding: 10px;
      width: fit-content;

      span {
        padding: 10px;
      }

      .icon-container {
        border: 1px solid #3fb87b;
        width: fit-content;
        align-self: center;
        border-radius: 10px;
        box-shadow: 2px 2px 2px #6d6d6d;
        cursor: pointer;
      }

      &__icon-camera {
        font-size: 40px;
        color: #3fb87b;
        padding: 5px;
      }
    }
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

export default RegisterComplaintStyled;
