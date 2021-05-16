import React from 'react';
import {Header} from '../Header/Header.component';
import {Container} from './Layout.styles';

export const Layout = ({
  navigation,
  title,
  showHeader,
  headerLeftContent,
  headerCenterContent,
  headerRightContent,
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      {showHeader && (
        <Header
          title={title}
          navigation={navigation}
          leftContent={headerLeftContent}
          centerContent={headerCenterContent}
          rightContent={headerRightContent}
        />
      )}
      {children}
    </Container>
  );
};
