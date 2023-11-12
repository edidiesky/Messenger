import styled from "styled-components";

export const TopBarStyles = styled.div`
  color: #fff;
  position: sticky;
  top: 0;
  min-height: 55px;
  z-index: 3000;
  padding: 4px 0;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
  .icon:hover {
    background-color: var(--grey-2);
    
  }
  .topleft {
    transition: all .5s;
  padding:6px;
  border-radius: 5px;
  cursor: pointer;
    &:hover {
    background-color: var(--grey-2);

  }
  }
  h5 {
    @media (max-width:480px) {
      font-size: 15px;
      .span {
      font-size: 12px;

      }
    }
  }
  .top_bar_right{
    @media (max-width:480px) {
      display:none;
    }
  }
  .icon svg {
    color: var(--primary);
  }
  .avatar {
    width: 35px;
    object-fit: cover;
    height: 35px;
  }
`