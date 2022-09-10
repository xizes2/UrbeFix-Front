import styled from "styled-components";

const ComplaintStyled = styled.div`
  display: flex;

  @media screen and (min-width: 601px) {
    height: 100%;
    flex-direction: column;
    position: relative;
  }

  .complaint-card {
    box-shadow: 10px 10px 10px black;

    &__date {
      padding: 10px;
    }

    &__add-complaint-container {
      display: flex;
      position: absolute;
      bottom: 0;

      @media screen and (min-width: 601px) {
        position: relative;
      }
    }

    &__text-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 10px;
      position: relative;
      text-decoration: none;

      @media screen and (min-width: 601px) {
        padding: 0;
        height: 100%;
      }

      a {
        text-decoration: none;
        color: #000;
      }
    }

    &__title {
      @media screen and (min-width: 601px) {
        text-align: center;
        padding: 10px;
      }
    }

    &__text {
      @media screen and (min-width: 601px) {
        padding: 10px;
      }
    }

    &__delete-container {
      border: 1px solid red;
      border-radius: 0 10px 10px 0;
      cursor: pointer;

      .add-complaint__delete-icon {
        color: red;
        font-size: 20px;

        @media screen and (min-width: 601px) {
          font-size: 25px;
        }
      }

      @media screen and (min-width: 601px) {
        border-radius: 50%;
        width: fit-content;
        padding: 15px;
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }

  .icon-container {
    padding-left: 10px;

    @media screen and (min-width: 601px) {
      display: flex;
      align-items: center;
    }

    &__add-icon {
      color: #3fb87b;
      font-size: 25px;
    }
  }

  .image-container {
    height: 100px;
    width: 100px;

    @media screen and (min-width: 601px) {
      height: 150px;
      width: 100%;
    }

    &__image {
      border-radius: 10px 0 0 10px;
      height: inherit;
      width: inherit;
      object-fit: fill;

      @media screen and (min-width: 601px) {
        border-radius: 10px 10px 0 0;
        object-fit: cover;
      }
    }
  }
`;

export default ComplaintStyled;
