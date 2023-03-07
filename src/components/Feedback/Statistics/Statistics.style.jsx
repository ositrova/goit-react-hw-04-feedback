import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  gap: 60px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid black;
`;

export const StatisticsItem = styled.li`
  padding: 0 20px;
  color: white;
  background-color: ${({ review }) => {
    switch (review) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'grey';
      case 'bad':
        return 'orangered';
      default:
        return 'red';
    }
  }};
  border-radius: 10px;
  box-shadow: 3px 2px 2px #727171;
  cursor: pointer;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StatisticsSum = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 20px;
  color: white;
  background-color: #4d7be6;
  border-radius: 10px;
  box-shadow: 3px 2px 2px #727171;

  cursor: pointer;
`;
