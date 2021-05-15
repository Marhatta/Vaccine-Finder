import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const TweetUpdatesContainer = styled.ScrollView``;

export const TweetContainer = styled.View`
  margin-right: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[2]};
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.secondary};
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
