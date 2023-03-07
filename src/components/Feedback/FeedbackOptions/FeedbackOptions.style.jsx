import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
  
`;

export const FeedbackItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedbackBtn = styled.button`
  
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  outline: none;
  border: none;

  font-weight: 600;
  padding: 10px 20px;
  background: #aae6e8;
  border-radius: 10px;
  box-shadow: 3px 2px 2px #727171;
 
  :hover {
    background: #fbfd6f;
    transform: translate(0, 0.25em);
  }
`;
