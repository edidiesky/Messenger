

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Chat from '../components/chats';
const Chats: React.FC = () => {
    return (
        <ChatStyles className='chat_container'>
            <Chat />
        </ChatStyles>
    )
}


const ChatStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

`

export default Chats