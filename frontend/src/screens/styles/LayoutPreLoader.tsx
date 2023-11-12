import styled from "styled-components";

export const LayoutPreLoaderStyles = styled.div`
    height: 100vh;
    overflow: auto;
    display: grid;
    background-color: var(--light-grey);
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
     @media (max-width:480px) {
    grid-template-columns: 120px 1fr;
        
    }
    .left, .right {
        height: 100%;
        border-right: 1px solid rgba(0,0,0,.1);
        overflow: auto;
    }
    .left {
        display: grid;
        background-color: #Fff;
        grid-template-columns: 60px 1fr;
         @media (max-width:480px) {
    grid-template-columns: 50px 1fr;
        
    }
        /* place-items: start; */
        overflow: auto;
        .left_small_sidebar {
        border-right: 1px solid rgba(0,0,0,.1);
        height: 100%;
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