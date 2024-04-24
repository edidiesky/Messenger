import styled from "styled-components";

export const ContentStyles = styled.div`
  /* height:; */
  /* max-height:100%; */
  /* min-height:100vh; */
  height:90%;
  padding: 4rem 0;
  overflow-y: auto;

  .content_top {
     img {
       width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
     }
     h4 {
      width:100%;
      span {
        width:70%;
        /* margin-top: 10px; */
      }
     }
  }
`