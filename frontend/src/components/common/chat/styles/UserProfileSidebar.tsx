import styled from "styled-components";
import { motion } from 'framer-motion'
export const UserProfileSidebarStyles = styled(motion.div)`
  width:500px;
  height:100%;
  position:relative;
border-left: 1px solid rgba(0, 0, 0, 0.08);
  padding: 3rem 1rem;
    img {
       width: 8rem;
    height: 8rem;
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
  .list {
    padding:.8rem 1rem;
    border-radius: 10px;
    &:hover {
      background:#fafafa;
    }
  }
`