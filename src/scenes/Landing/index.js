import React from 'react';
import styled from 'styled-components';
import showcase from '@/assets/img/showcase.jpg';

const Wrapper = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${showcase});
`;


export default () => (
  <Wrapper>
    <h1>Landing</h1>
  </Wrapper>
);
