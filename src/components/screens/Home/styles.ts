import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: #322659;
`;

export const Content = styled.View`
  margin-top: 120px;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
  },
  showsHorizontalScrollIndicator: false,
  horizontal: false,
})``;