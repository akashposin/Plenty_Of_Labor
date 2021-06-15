import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {theme} from '../constants';

const TextInputComponent = props => {
  const {style, refs} = props;

  const inputStyles = [styles.input, style];

  return (
    <TextInput
      {...props}
      ref={refs}
      blurOnSubmit={false}
      style={inputStyles}
      underlineColorAndroid="transparent">
      {props.children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    ...theme.Fonts.fontRegular,
    height: theme.Sizes.height / 38,
    borderWidth: moderateScale(1),
    borderColor: theme.Colors.black,
    marginVertical: theme.Sizes.S10,
    fontSize: theme.Sizes.F12,
    backgroundColor: theme.Colors.white,
  },
});

export default TextInputComponent;
