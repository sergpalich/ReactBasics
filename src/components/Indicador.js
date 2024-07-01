import React from "react"
import styled from 'styled-components';

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.span`
  width: 20px;
  height: 5px;
  background-color: ${props => props.active ? 'black' : 'grey'};
  border-radius: 50%;
  transition: background-color 0.3s;
`;

const Indicator = ({ tutorialData, step }) => {
  return (
    <IndicatorWrapper>
      {Array.from({ length: tutorialData }).map((_, index) => (
        <Dot key={index} active={index === step} />
      ))}
    </IndicatorWrapper>
  );
};

export default Indicator;