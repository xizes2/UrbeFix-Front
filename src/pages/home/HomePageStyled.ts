import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #3fb87b;
  padding: 20px;

  img {
    padding: 20px 20px 60px 20px;
    margin: 0;
    max-width: 150px;
  }

  h2 {
    text-align: center;
    font-size: 30px;

    @media screen and (min-width: 601px) {
      font-size: 35px;
    }
  }

  p {
    text-align: center;
    font-size: 18px;
    max-width: 500px;
    padding: 20px;
    margin: 0;

    @media screen and (min-width: 601px) {
      font-size: 20px;
    }
  }
`;

export default HomePageStyled;
