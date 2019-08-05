import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default () => (
  <Container>
    <h1>500</h1>
    <p>Something went wrong. Please come back later</p>
  </Container>
)
