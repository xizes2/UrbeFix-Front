import styled from "styled-components";

const UsersListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .users-list__title {
    text-align: center;
  }

  .users-list__list {
    padding: 20px;
  }

  li {
    list-style-type: none;
  }
`;

export default UsersListStyled;
