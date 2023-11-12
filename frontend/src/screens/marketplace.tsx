

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MarketPlace from '../components/marketplace';
const MarketPlaceIndex: React.FC = () => {
  return (
    <HomeStyles>
      <MarketPlace />
    </HomeStyles>
  )
}


const HomeStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export default MarketPlaceIndex