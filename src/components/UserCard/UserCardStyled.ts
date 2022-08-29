import styled from "styled-components";

const UserCardStyled = styled.div`
  background-color: #fff4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;

  .user-card__name {
    text-align: center;
  }

  .user-card__image {
    object-fit: contain;
  }
`;

export default UserCardStyled;
