import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {theme} from '../constants';

const TextInputComponent = ({
  refs,
  onChangeText,
  value,
  keyboardType,
  placeholder,
  placeholderTextColor,
  onSubmitEditing,
  secureTextEntry,
  editable,
  autoCapitalize,
  style,
  children,
  multiline,
}) => {
  const inputStyles = [styles.input, style];

  return (
    <TextInput
      autoCapitalize={'none' || autoCapitalize}
      ref={refs}
      blurOnSubmit={false}
      style={inputStyles}
      underlineColorAndroid="transparent"
      onChangeText={onChangeText}
      editable={editable}
      value={value}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={secureTextEntry}
      multiline={multiline}>
      {children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    ...theme.Fonts.fontRegular,
    height: theme.Sizes.S14 * 3,
    borderWidth: moderateScale(1),
    borderColor: theme.Colors.black,
    marginVertical: theme.Sizes.S10,
    fontSize: theme.Sizes.F12,
    backgroundColor: theme.Colors.white,
    paddingLeft: theme.Sizes.S10,
  },
});

export default TextInputComponent;
