import React from 'react';
import {StyleSheet} from 'react-native';
import ButtonComponent from './ButtonComponent';
import {theme} from '../constants';

const FooterComponent = props => {
  const {style} = props;

  const buttonStyles = [styles.container, style];

  return (
    <ButtonComponent style={buttonStyles} {...props}>
      {props.children}
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    height: theme.Sizes.height / 14,
  },
});

export default FooterComponent;
