

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Home from '../components/home';
import Requests from '../components/requests';
const RequestsIndex: React.FC = () => {
  return (
    <HomeStyles>
      <Requests />
    </HomeStyles>
  )
}


const HomeStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export default RequestsIndex