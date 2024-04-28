import styled from "styled-components";

export const FeedbarStyles = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: #fff;
  color: var(--dark-1);
  max-height: 100vh;
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
  .span {
    font-size: 12.5px;
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
  }
  .chatlistWrapper {
    .listCard {
      padding: 0.8rem 1.5rem;
      border-radius: 10px;
      @media (max-width: 1080px) {
        padding: 1.2rem 1.6rem;
        flex-direction: column;
        align-items: flex-start;
      }
      .cardRight {
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


export const SmallSidebarStyles = styled.div`
  z-index: 400000;
  overflow: hidden;
  .sidebar_icons{
      z-index: 400000;
    position: relative;
    min-height: 40px;
    width: 70%;
    border-radius: 8px;
    transition: all .4s;
   
   &:hover {
     background-color: var(--light-grey);
   }
   &.active {
     background-color: var(--light-grey);
    color: var(--dark-1);

   }
 
 }
`

export const SearchStyles = styled.div``