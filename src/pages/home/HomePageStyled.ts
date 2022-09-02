import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  color: #3fb87b;

  img {
    padding: 20px 20px 60px 20px;
    margin: 0;
  }

  h2 {
    text-align: center;
    font-size: 30px;

    @media screen and (min-width: 601px) {
      font-size: 40px;
    }
  }

  p {
    text-align: center;
    font-size: 18px;
    max-width: 500px;
    padding: 30px;
    margin: 0;

    @media screen and (min-width: 601px) {
      font-size: 25px;
    }
  }
`;

export default HomePageStyled;
