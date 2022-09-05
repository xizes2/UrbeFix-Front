import styled from "styled-components";

const ComplaintStyled = styled.div`
  display: flex;

  .complaint-card {
    box-shadow: 10px 10px 10px black;
    background-color: red;

    &__image {
      border-radius: 10px 0 0 10px;
    }

    &__delete-container {
      border: 1px solid red;
      border-radius: 0 10px 10px 0;
      cursor: pointer;

      .add-complaint__delete-icon {
        color: red;
      }
    }
  }
`;

export default ComplaintStyled;
