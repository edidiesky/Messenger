

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Home from '../components/home';
const Chats: React.FC = () => {
    return (
        <HomeStyles>
            <Home />
        </HomeStyles>
    )
}


const HomeStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export default Chats