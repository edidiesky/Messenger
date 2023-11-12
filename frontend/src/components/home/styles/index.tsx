import { motion } from "framer-motion";
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
    &.icons {
      background-color: transparent;
    transition: all .4s;
    cursor: pointer;
    &:hover {
      background-color: var(--grey-2);
    }
  }

     &.icons_1 {
      width:2.4rem !important;
      height:2.4rem !important;
      border-radius: 50%;
      background-color: transparent;
    transition: all .4s;
    cursor: pointer;
    svg {
      font-size: 13px !important;
    }
    &:hover {
      background-color: rgba(0,0,0,.3);
    }
  }
  }



   
  .top_icon{
     @media (max-width: 980px) {
display:none;
      }
  }
  .icon svg {
    color: var(--dark-1);
    cursor: pointer;
  }
  .avatar {
    width: 5.5rem !important;
    height: 5.5rem !important;
     @media (max-width:980px) {
    grid-template-columns: 18% 1fr;
        
    }
     @media (max-width:480px) {
     width: 4.6rem !important;
    height: 4.6rem !important;
        
    }
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
    padding: 0 1.4rem;

    left: 0;
    @media (max-width: 920px) {
      gap: 0.6rem;
      height: 4.5rem;
    /* padding: 0 1rem; */
    width: 70%;
    justify-items: center;

    }
    svg {
      font-size: 24px;
      @media (max-width: 780px) {
        font-size: 20px;
      }
    }
    .input {
      font-size: 15px;
      /* font-family: inherit; */
      @media (max-width: 980px) {
       display:none;
      }
    }
  }
`;

// friend styles
export const FriendListStyles = styled(motion.div)`
  /* height: 100vh; */
  position: sticky;
  top: 0;
  background-color: #fff;
  color: var(--dark-1);
  height: 80%;
  overflow: auto;
   @media (max-width: 780px) {
  height: 90%;

   }

     .search_tab{
    padding:1.5rem;
    transition: all .4s;
    cursor: pointer;
    border-radius:7px;
    &:hover {
      background-color: var(--grey-2);
    }
  }
  .cardRight {
    @media (max-width: 780px) {
      justify-content: center;
    }
    .avatar {
      @media (max-width: 780px) {
        width: 45px;
        height: 45px;
      }
    }
    h5 {
      @media (max-width: 780px) {
        display: none;
      }
    }
  }
    .avatar {
    width: 50px !important;
    object-fit: cover;
    height: 50px !important;
  }

   .avatar_2 {
    width: 40px !important;
    object-fit: cover;
    border-radius:50%;
    height: 40px !important;
  }
  .span {
    font-size: 13px;
  }

  h5 {
    text-transform: capitalize;
    font-size: 15px;
    color: #000;
  }
  .fs-17 {
    font-size:17px;
  }
  .user_search_list{
      padding:.7rem 1rem;
      border-radius: 10px;
      transition: all .2s ease;
      position: relative;
      .list_nav {
       width: 3.9rem !important;
       height: 3.9rem !important;
       border-radius: 50%;
       border: 1px solid rgba(0,0,0,.1);
       box-shadow: 0 1px 2px rgba(0,0,0,.2);
       background-color: #fff;
       position: absolute;
       right: 7%;
       top: 50%;
       transform: translateY(-50%);
      scale: .8;
       opacity: 0;
       visibility: hidden;
       transition: all .3s;
       cursor: pointer;
       &:hover {
        background-color: var(--light-grey);
      }
      }
      &:hover {
        background-color: var(--light-grey);
        .list_nav {
          opacity: 1;
          scale: 1;
       visibility: visible;

        }
      }
      @media (max-width: 1080px) {
        padding: 1.2rem 1.6rem;
        flex-direction: column;
        align-items: flex-start;
      }
  }
  
  .chatlistWrapper {
    .listCard {
      padding: 1rem 1rem;
      border-radius: 10px;
      transition: all .2s ease;
      position: relative;
      .list_nav {
       width: 3.9rem !important;
       height: 3.9rem !important;
       border-radius: 50%;
       border: 1px solid rgba(0,0,0,.1);
       box-shadow: 0 1px 2px rgba(0,0,0,.2);
       background-color: #fff;
       position: absolute;
       right: 7%;
       top: 50%;
       transform: translateY(-50%);
      scale: .8;
       opacity: 0;
       visibility: hidden;
       transition: all .3s;
       cursor: pointer;
       &:hover {
        background-color: var(--light-grey);
      }
      }
      &:hover {
        background-color: var(--light-grey);
        .list_nav {
          opacity: 1;
          scale: 1;
       visibility: visible;

        }
      }
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
