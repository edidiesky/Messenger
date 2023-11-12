

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Home from '../components/home';
import Chat from '../components/chats';
const HomeIndex: React.FC = () => {
    return (
        <HomeStyles>
            <div className="larger_screen">
                <Home/>
            </div>
            <div className="smaller_screen">
                <Chat/>
            </div>
        </HomeStyles>
    )
}


const HomeStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .larger_screen {
      width: 100%;
  height: 100%;
          display: block;
 @media (max-width:580px) {
    display: none;
 }
  }

    .smaller_screen {
          width: 100%;
  height: 100%;
          display: none;
 @media (max-width:580px) {
    display: block;
 }
  }
`

export default HomeIndex