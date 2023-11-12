import styled from "styled-components";

export const HomeStyles = styled.div`
  width: 100%;
`

// top
export const TopStyles = styled.div`
  color: #fff;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  z-index: 30;
  padding: 1rem 0;

  padding-top: 1rem;

  .icon {
    background-color: var(--grey-2);
  }
  .icon svg {
    color: var(--dark-1);
    cursor: pointer;
  }
  .avatar {
    width: 5.5rem !important;
    height: 5.5rem !important;
  }
  h4 {
    font-weight: 700;
    @media (max-width: 920px) {
      display: none;
    }
  }
  form {
    height: 4rem;
    background-color: var(--grey-2);
    border-radius: 40px;
    position: sticky;
    top: 0;
    z-index: 3000;
    padding: 0 2rem;

    left: 0;
    @media (max-width: 920px) {
      gap: 0.6rem;
      height: 4.5rem;
    }
    svg {
      font-size: 20px;
      @media (max-width: 900px) {
        font-size: 28px;
      }
    }
    .input {
    }
  }
`;

// friend styles
export const FriendListStyles = styled.div`
  /* height: 100vh; */
  position: sticky;
  top: 0;
  background-color: #fff;
  color: var(--dark-1);
  height: 80%;
  overflow: auto;
  .cardRight {
    @media (max-width: 900px) {
      justify-content: center;
    }
    .avatar {
      @media (max-width: 900px) {
        width: 7rem;
        height: 7rem;
      }
    }
    h5 {
      @media (max-width: 900px) {
        display: none;
      }
    }
  }
    .avatar {
    width: 4.3rem !important;
    height: 4.3rem !important;
  }
  .span {
    font-size: 13px;
  }
  &::-webkit-scrollbar {
  }
  &::-webkit-scrollbar-thumb {
    &:hover {
      background: #333;
    }
  }
  .notification {
    padding: 0.2rem 1rem;
    border-radius: 10px;
    background-color: #fff;
    color: var(--dark-1);
    font-size: 10px;
    display: block;
    font-weight: 700;
  }
  h5 {
    text-transform: capitalize;
    font-size: 16px;
  }
  .fs-17 {
    font-size:17px;
  }
  .chatlistWrapper {
     .listCard {
      padding: 1rem 1rem;
      border-radius: 10px;
      transition: all .2s ease;
      margin-left: 10px;
      &:hover {
        background-color: var(--light-grey);
      }
      @media (max-width: 1080px) {
        padding: 1.2rem 1.6rem;
        flex-direction: column;
        align-items: flex-start;
      }
      .cardRight {
        .image_wrapper{
          position: relative;
          .active_tab{
            background-color:#5AD539;
            width: 1.2rem !important;
            height: 1.2rem !important;
            border: 2px solid #fff;
            border-radius: 50%;
            position: absolute;
            bottom: 4%;
            right: 2%;
          }
        }
      }
      .cardleft {
        display: flex;
        align-items: flex-end;
      }
      &.active {
        background-color: var(--grey-1);
        .cardRight {
        }
        .cardleft {
          color: #fff;
        }
      }
    }
  }
`;
