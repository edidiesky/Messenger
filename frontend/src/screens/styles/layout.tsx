import styled from "styled-components";
export const MainLayoutStyles = styled.div`
  .large_container_layout {
    display: block;
 @media (max-width:580px) {
    display: none;
 }
  }

  .small_container_layout {
     display: none;
 @media (max-width:580px) {
    display: flex;
 }
  }
`
export const LayoutStyles = styled.div`
    height: 100vh;
    overflow: auto;
    display: grid;
    grid-template-columns: 32% 1fr;
    @media (min-width:2000px) {
    grid-template-columns: 18% 1fr;
        
    }
    @media (max-width:1084px) {
    grid-template-columns: 40% 1fr;
        
    }
     @media (max-width:780px) {
    grid-template-columns: 170px 1fr;
        
    }
     @media (max-width:580px) {
    grid-template-columns: 120px 1fr;
        
    }
    .left, .right {
        height: 100%;
        border-right: 1px solid rgba(0,0,0,.1);
        overflow: auto;
    }
    .left {
        display: grid;
        grid-template-columns: 60px 1fr;
         @media (max-width:580px) {
    grid-template-columns: 50px 1fr;
        
    }
        /* place-items: start; */
        overflow: auto;
        .left_small_sidebar {
        border-right: 1px solid rgba(0,0,0,.1);
        height: 100%;
         @media (max-width:580px){
            display: none;
         }
        }
        .left_small_sidebar{
            height: 100%;
            overflow: auto;
        }
        .left_big_sidebar {
            height: 100%;
            overflow: hidden;
        }
    }
`