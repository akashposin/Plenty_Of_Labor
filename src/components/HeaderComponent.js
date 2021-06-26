import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../constants';
import Container from './Container';

const HeaderComponent = props => {
  const {style} = props;

  const containerStyles = [styles.container, style];
  return (
    <Container flex={false} color="blue2" style={containerStyles} {...props}>
      {props.children}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: theme.Sizes.height / 13,
  },
});

export default HeaderComponent;
