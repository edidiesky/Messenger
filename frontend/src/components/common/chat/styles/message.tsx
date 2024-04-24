import styled from "styled-components";

export const MessageStyles = styled.div`
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.65);
     backdrop-filter: blur(12px);
     padding: 0 1rem;
     min-height: 55px;
    .icon:hover {
    background-color: var(--grey-2);
    
    }
  .icon {
    
  }
  .icon svg {
    color: var(--primary);
  }
   form {
   
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    gap: 0.5rem;
       @media (max-width:680px) {
    padding: 2rem 0;
    padding-bottom: 3rem;

       }
    /* .form_left{
      flex: 1;
    } */

    .input {
      height: 40px;
      background-color: var(--light-grey);
      border-radius: 40px;
      position: sticky;
      top: 0;
      z-index: 3000;
      padding: 0 2rem;
    }
  }
`