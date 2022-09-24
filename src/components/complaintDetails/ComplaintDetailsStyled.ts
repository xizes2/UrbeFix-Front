import styled from "styled-components";

const ComplaintDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 1000px) {
    height: 100%;
    max-width: 1000px;
    flex-direction: column;
    margin: auto;
  }
  .complaint-card {
    display: flex;
    flex-direction: column;

    iframe {
      @media screen and (min-width: 1000px) {
        height: 300px;
      }
    }

    &__detail-container {
      margin: 10px;
    }

    &__detail-container:first-of-type {
      align-self: center;
      font-size: 1.3em;
      text-align: center;
    }

    &__detail-container:not(:first-child) {
      @media screen and (min-width: 1000px) {
        max-width: 400px;
      }
    }

    &__title {
      color: #6d6d6d;
      font-size: 1em;
    }

    &__complaint-count {
      margin: 10px;

      @media screen and (min-width: 1000px) {
        max-width: 400px;
      }

      span {
        color: #3fb87b;
        font-size: 1.1em;
      }
    }
  }

  .button-round--delete {
    position: sticky;
    right: 20px;
    bottom: 320px;
    align-self: flex-end;

    @media screen and (min-width: 1000px) {
      top: 415px;
      right: 30px;
      position: absolute;
      height: 70px;
      width: 70px;
    }

    .delete-complaint__trashcan-icon {
      font-size: 30px;
    }
  }

  .button-round {
    position: sticky;
    right: 20px;
    bottom: 250px;
    align-self: flex-end;

    @media screen and (min-width: 1000px) {
      top: 530px;
      right: 30px;
      cursor: pointer;
      position: absolute;
      height: 70px;
      width: 70px;
    }

    .edit-complaint__edit-icon {
      font-size: 30px;

      @media screen and (min-width: 1000px) {
        font-size: 40px;
      }
    }
  }

  .image-container {
    height: 150px;
    margin: 10px;
    display: flex;
    justify-content: space-around;

    @media screen and (min-width: 1000px) {
      height: 250px;
      width: 400px;
      position: absolute;
      top: 400px;
      right: 130px;
    }

    &__image {
      height: inherit;
      width: inherit;
      object-fit: contain;
      border-radius: 10px;

      @media screen and (min-width: 1000px) {
        height: fit-content;
      }
    }
  }

  .return-button-container {
    position: sticky;
    bottom: 0;
    background-color: #3fb87b;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1000px) {
      width: fit-content;
      border-radius: 10px;
      font-size: 0.9em;
      align-self: center;
      position: fixed;
      margin-bottom: 2%;
    }

    &__nav-link {
      display: inherit;
      justify-content: inherit;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }

    & .button {
      font-size: 1.2em;
    }
  }
`;

export default ComplaintDetailsStyled;
