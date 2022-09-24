import styled from "styled-components";

const ComplaintsListStyled = styled.div`
  .buttons-container {
    display: flex;
    justify-content: space-between;
    margin: 20px;

    &__filter-buttons {
      align-items: center;
      display: flex;
      margin-right: 20px;
    }

    & .button {
      margin-right: 20px;
    }

    & .button.complaint {
      margin-right: 0;
    }

    &__icon {
      border-radius: 50%;
      background-color: #3fb87b;
      color: #fff;
      width: 30px;
      height: 30px;
      padding: 10px;
      cursor: pointer;

      @media screen and (min-width: 601px) {
        margin: 0 20px;
        width: 44px;
        height: 44px;
      }
    }
  }

  .complaints-container {
    margin: 0 auto;
    padding: 20px;
    text-align: center;

    &__complaint {
      list-style: none;
      margin: 15px 0;
      box-shadow: 5px 5px 10px #999;
      border-radius: 10px;

      @media screen and (min-width: 601px) {
        width: 300px;
        height: 400px;
        display: inline-block;
        margin-right: 15px;
        box-shadow: 0 5px 5px #999;
      }
    }
  }
`;

export default ComplaintsListStyled;
