import React from 'react';
import styled from 'styled-components';

const ComplexTitle = ({ title }) => {
  return (
    <div>
      <StyledComplexTitle>
        <h1>{title}</h1>
        <div className='underline'></div>
      </StyledComplexTitle>
    </div>
  );
};

const StyledComplexTitle = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 0 auto;
  }
`;

export default ComplexTitle;
