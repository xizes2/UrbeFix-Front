import styled from "styled-components";

export const RegisterHeader = styled.h2`
  text-align: center;
  margin-top: 0;
  padding-top: 20px;
  color: #2c3641;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  color: #2c3641;

  input {
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    border: transparent;
    background-color: #fff4;
    font-size: 1.2em;

    ::placeholder {
      color: #2c3641;
    }
  }
`;
