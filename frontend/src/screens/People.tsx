

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import People from '../components/people';
const PeopleIndex: React.FC = () => {
  return (
    <HomeStyles>
      <People />
    </HomeStyles>
  )
}


const HomeStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export default PeopleIndex