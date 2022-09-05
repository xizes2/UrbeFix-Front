import styled from "styled-components";

const ComplaintsListStyled = styled.div`
  .buttons-container {
    display: flex;
    justify-content: space-between;
    padding: 30px;

    &__filter-buttons {
      display: flex;
      margin-right: 20px;
    }

    &__category {
      padding: 10px;
      background-color: #3fb87b;
      color: #fff;
      border: 1px solid #3fb87b;
      border-radius: 10px;
      margin-right: 20px;
      font-size: 1.1em;
      cursor: pointer;

      @media screen and (min-width: 601px) {
        font-size: 1.2em;
        padding: 20px;
      }
    }

    &__icon {
      border-radius: 50%;
      background-color: #3fb87b;
      color: #fff;
      width: 34px;
      height: 34px;
      padding: 10px;
      cursor: pointer;

      @media screen and (min-width: 601px) {
        margin: 0 20px;
        width: 44px;
        height: 44px;
      }
    }

    &__create-complaint {
      padding: 10px;
      background-color: #3fb87b;
      color: #fff;
      border: 1px solid #3fb87b;
      border-radius: 10px;
      font-size: 1.1em;
      cursor: pointer;

      @media screen and (min-width: 601px) {
        font-size: 1.2em;
        padding: 20px;
      }
    }
  }

  .complaints-container {
    display: table;
    margin: 0 auto;
    padding: 0;

    &__complaint {
      list-style: none;
      margin: 10px;
      box-shadow: 5px 5px 10px #999;
      border-radius: 10px;
    }
  }
`;

export default ComplaintsListStyled;
