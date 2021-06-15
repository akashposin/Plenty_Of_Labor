import React from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Container from './Container';
import { theme } from '../constants';

const HorizontalLine = (props) => {
  const { style } = props;

  const hLineStyles = [styles.container, style];
  return (
    <Container
      flex={false}
      style={hLineStyles}
      color='gray3'
      {...props.props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(1),
    marginVertical: theme.Sizes.S14,
  },
});

export default HorizontalLine;
