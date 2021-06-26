import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {theme} from '../constants';

const ButtonComponent = props => {
  const {style} = props;

  const buttonStyles = [styles.button, style];

  let CustomButton = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    CustomButton = TouchableNativeFeedback;
  }

  return (
    <CustomButton activeOpacity={0.8} {...props}>
      <View style={buttonStyles}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </CustomButton>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.Colors.blue2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...theme.Fonts.fontBold,
    fontSize: theme.Sizes.F18,
    color: theme.Colors.white,
    letterSpacing: 1.5,
    marginBottom: theme.Sizes.S10 / 2.5,
  },
});

export default ButtonComponent;
