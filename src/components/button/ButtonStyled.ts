import styled from "styled-components";

const ButtonStyled = styled.button`
  &.button {
    text-align: center;
    background-color: #3fb87b;
    cursor: pointer;
    border: 0;
    color: #fff;
    border-radius: 10px;
    padding: 10px;
    font-size: 1.2em;
    height: 50px;
    align-self: center;

    &.form {
      border-radius: unset;
      width: 100%;
      height: 100%;

      @media screen and (min-width: 601px) {
        border-radius: 10px;
        width: 130px;
        height: 50px;
      }

      &.white {
        background-color: #fff;
        color: #3fb87b;
        border: 1px solid #3fb87b;
      }
    }

    &-white {
      background-color: #fff;
      color: #3fb87b;
      border-radius: 10px;
      border: 1px solid #3fb87b;
      padding: 10px;
      font-size: 1.1em;
      cursor: pointer;
      height: 50px;
    }

    &-round {
      text-align: center;
      background-color: #3fb87b;
      cursor: pointer;
      border: 0;
      border-radius: 50%;
      z-index: 1;
      height: 50px;
      width: 50px;
      color: #fff;
    }

    &-round--delete {
      border-radius: 50%;
      z-index: 1;
      height: 50px;
      width: 50px;
      border: 1px solid red;
      color: red;
    }
  }
`;

export default ButtonStyled;
