import styled from "styled-components";

const ComplaintDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 601px) {
    height: 100%;
    flex-direction: column;
  }
  .complaint-card {
    .leaflet-container {
      position: relative;
      height: 150px;
    }

    &__detail-container {
      margin: 10px;
    }

    &__title {
      color: #6d6d6d;
      font-size: 1em;
    }

    &__complaint-count {
      margin: 10px;

      span {
        color: #3fb87b;
        font-size: 1.1em;
      }
    }

    &__delete-container {
      border: 1px solid red;
      border-radius: 50%;
      height: 50px;
      width: 50px;
      position: absolute;
      right: 20px;
      top: 160px;

      @media screen and (min-width: 601px) {
        top: 160px;
        cursor: pointer;
      }

      .delete-complaint__delete-icon {
        color: red;
        font-size: 30px;
      }
    }

    &__edit-container {
      background-color: #3fb87b;
      border: 0;
      border-radius: 50%;
      height: 50px;
      width: 50px;
      position: absolute;
      right: 20px;
      top: 230px;

      @media screen and (min-width: 601px) {
        top: 160px;
        right: 100px;
        cursor: pointer;
      }

      .edit-complaint__edit-icon {
        color: #fff;
        font-size: 30px;
      }
    }
  }

  .image-container {
    height: 100px;
    margin: 10px;
    display: flex;
    justify-content: space-around;

    @media screen and (min-width: 601px) {
      height: 150px;
      width: 100%;
    }

    &__image {
      height: inherit;
      width: inherit;
      object-fit: contain;

      @media screen and (min-width: 601px) {
        border-radius: 10px 10px 0 0;
        height: 100%;
      }
    }
  }

  .return-button-container {
    text-align: center;
    position: sticky;
    bottom: 0;
    background-color: #3fb87b;

    @media screen and (min-width: 601px) {
      position: absolute;
      top: 240px;
      right: 20px;
      width: fit-content;
      bottom: initial;
      border-radius: 10px;
      font-size: 0.9em;
    }

    &__return {
      padding: 15px;
      font-size: 1.2em;
      cursor: pointer;
      border: none;
      background-color: inherit;
      color: #fff;

      @media screen and (min-width: 601px) {
        padding: 15px;
      }
    }
  }
`;

export default ComplaintDetailsStyled;
