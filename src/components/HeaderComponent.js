import React from 'react';
import {theme} from '../constants';
import Container from './Container';

const HeaderComponent = props => {
  return (
    <Container
      flex={false}
      color="blue2"
      style={{
        height: theme.Sizes.height / 13,
      }}
      {...props}>
      {props.children}
    </Container>
  );
};

export default HeaderComponent;
