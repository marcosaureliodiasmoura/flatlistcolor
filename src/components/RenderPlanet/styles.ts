import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  border-radius: 80px;
  width: 170px;
  height: 170px;
  background-color: #8257E6;

  justify-content: center;
  align-items: center;

  margin-left: 20px;
  margin-top: 20px;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: red;
    `}
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #FAF5FF;
`;