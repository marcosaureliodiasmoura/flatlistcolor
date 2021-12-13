import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface DataProps {
  id: number,
  title: string;
}

interface Props extends RectButtonProps {
  data: DataProps;
  isActive: boolean;
};

export function RenderPlanet({
  data,
  isActive,
  ...rest
}: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{data.title}</Title>
    </Container>
  )
};