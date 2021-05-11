import React from 'react';
import {Header} from '../Header/Header.component';
import {Container} from './Layout.styles';

export const Layout = ({
  navigation,
  title,
  headerLeftContent,
  headerCenterContent,
  headerRightContent,
  children,
}) => {
  return (
    <Container>
      <Header
        title={title}
        navigation={navigation}
        leftContent={headerLeftContent}
        centerContent={headerCenterContent}
        rightContent={headerRightContent}
      />
      {children}
    </Container>
  );
};
