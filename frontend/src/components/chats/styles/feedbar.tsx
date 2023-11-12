import styled from "styled-components";

export const SmallSidebarStyles = styled.div`
position:fixed;
width:100%;
bottom:0;
left:0;
    height: 60px;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  z-index: 30;
  .sidebar_icons{
    /* height: 30px; */
    flex:1;
    height: 100%;
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