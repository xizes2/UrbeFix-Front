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
  .complaint {
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

    .field-title {
      color: #6d6d6d;
      font-size: 1em;
    }

    .field-text {
      word-break: break-all;
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

    .delete-icon {
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

    .edit-icon {
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
    bottom: 0;
    background-color: #3fb87b;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    @media screen and (min-width: 1000px) {
      width: fit-content;
      border-radius: 10px;
      font-size: 0.9em;
      align-self: center;
      margin-bottom: 30px;
    }

    &__nav-link {
      display: inherit;
      justify-content: inherit;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
  }
`;

export default ComplaintDetailsStyled;
