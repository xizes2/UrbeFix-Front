import styled from "styled-components";

const RegisterComplaintStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 30px;
  color: #6d6d6d;

  .category-selection {
    background-color: #3fb87b;
    width: inherit;
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

  .button-geolocation {
    background-color: #3fb87b;
    width: inherit;
    margin: 20px;
    border: none;
    padding: 10px;
    font-size: 1.2em;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }

  .address-container {
    text-align: center;
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
    height: 64px;
    width: 100%;

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

export default RegisterComplaintStyled;
