import React from 'react';
import {Image, Keyboard, ScrollView, StyleSheet, Text} from 'react-native';
import {images, theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Container,
  HeaderComponent,
  KeyBoardAvoidingViewComponent,
  TextInputComponent,
} from '../components';
import auth from '@react-native-firebase/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';

const VerifyOTP = ({route, navigation}) => {
  const {phoneNumber, verificationID} = route.params;

  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');
  const [text3, setText3] = React.useState('');
  const [text4, setText4] = React.useState('');
  const [text5, setText5] = React.useState('');
  const [text6, setText6] = React.useState('');

  const textRefs = React.useRef();
  const text2Refs = React.useRef();
  const text3Refs = React.useRef();
  const text4Refs = React.useRef();
  const text5Refs = React.useRef();
  const text6Refs = React.useRef();

  const textInputHandler = inputText => {
    setText(inputText.replace(/[^0-9]/g, ''));
    if (inputText !== '') {
      text2Refs.current.focus();
    }
  };

  const textInputHandler2 = inputText => {
    setText2(inputText.replace(/[^0-9]/g, ''));
    if (inputText !== '') {
      text3Refs.current.focus();
    }
  };

  const textInputHandler3 = inputText => {
    setText3(inputText.replace(/[^0-9]/g, ''));
    if (inputText !== '') {
      text4Refs.current.focus();
    }
  };

  const textInputHandler4 = inputText => {
    setText4(inputText.replace(/[^0-9]/g, ''));
    if (inputText !== '') {
      text5Refs.current.focus();
    }
  };

  const textInputHandler5 = inputText => {
    setText5(inputText.replace(/[^0-9]/g, ''));
    if (inputText !== '') {
      text6Refs.current.focus();
    }
  };

  const textInputHandler6 = inputText => {
    setText6(inputText.replace(/[^0-9]/g, ''));
  };

  const keyPressHandler = ({nativeEvent: {key: keyValue}}) => {
    if (keyValue === 'Backspace') {
      textRefs.current.focus();
    }
  };

  const keyPressHandler2 = ({nativeEvent: {key: keyValue}}) => {
    if (keyValue === 'Backspace') {
      text2Refs.current.focus();
    }
  };

  const keyPressHandler3 = ({nativeEvent: {key: keyValue}}) => {
    if (keyValue === 'Backspace') {
      text3Refs.current.focus();
    }
  };

  const keyPressHandler4 = ({nativeEvent: {key: keyValue}}) => {
    if (keyValue === 'Backspace') {
      text4Refs.current.focus();
    }
  };

  const keyPressHandler5 = ({nativeEvent: {key: keyValue}}) => {
    if (keyValue === 'Backspace') {
      text5Refs.current.focus();
    }
  };

  // header
  const renderHeader = () => {
    return (
      <HeaderComponent row center>
        <ButtonComponent
          style={{
            height: theme.Sizes.height / 22,
            width: theme.Sizes.width / 14,
            marginHorizontal: theme.Sizes.S14,
          }}
          // onPress
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={moderateScale(24)}
            color={theme.Colors.white}
          />
        </ButtonComponent>

        <Text
          style={{
            ...theme.Fonts.fontSemiBold,
            fontSize: theme.Sizes.F14,
            color: theme.Colors.white,
          }}>
          Verify OTP
        </Text>
      </HeaderComponent>
    );
  };

  //   lock image
  const renderLock = () => {
    return (
      <Container
        flex={false}
        center
        middle
        style={{marginTop: theme.Sizes.S14 * 6}}>
        <Image
          source={images.lock}
          style={{
            width: theme.Sizes.S14 * 5,
            height: theme.Sizes.S14 * 6,
            marginBottom: theme.Sizes.S14,
          }}
        />
        <Text
          style={{
            ...theme.Fonts.fontBold,
            color: theme.Colors.orange,
            fontSize: moderateScale(20),
          }}>
          Verify OTP
        </Text>
      </Container>
    );
  };

  //   OTP code inputs
  const renderTextInputs = () => {
    return (
      <Container
        flex={false}
        center
        middle
        style={{marginTop: theme.Sizes.S14 * 2}}>
        <Container flex={false} style={{marginHorizontal: theme.Sizes.S14 * 2}}>
          <Text
            style={{
              ...theme.Fonts.fontRegular,
              fontSize: theme.Sizes.F14,
              textAlign: 'center',
            }}>
            We have sent an SMS on{' '}
            <Text
              style={{
                ...theme.Fonts.fontBold,
                fontSize: theme.Sizes.F14,
              }}>{`+${phoneNumber}`}</Text>{' '}
            with 6 digit verification code.
          </Text>
        </Container>

        <Container flex={false} row style={{marginHorizontal: theme.Sizes.S14}}>
          <TextInputComponent
            style={{
              borderRadius: theme.Sizes.radius / 3,
              height: theme.Sizes.S14 * 3,
              width: theme.Sizes.width / 9,
              marginLeft: theme.Sizes.S10,
              textAlign: 'center',
            }}
            keyboardType="number-pad"
            maxLength={1}
            value={text}
            onChangeText={textInputHandler}
            refs={textRefs}
          />

          <TextInputComponent
            style={{
              borderRadius: theme.Sizes.radius / 3,
              height: theme.Sizes.S14 * 3,
              width: theme.Sizes.width / 9,
              marginHorizontal: theme.Sizes.S10,
              textAlign: 'center',
            }}
            keyboardType="number-pad"
            maxLength={1}
            value={text2}
            onChangeText={textInputHandler2}
            refs={text2Refs}
            onKeyPress={keyPressHandler}
          />

          <TextInputComponent
            style={{
              borderRadius: theme.Sizes.radius / 3,
              height: theme.Sizes.S14 * 3,
              width: theme.Sizes.width / 9,
              textAlign: 'center',
            }}
            keyboardType="number-pad"
            maxLength={1}
            value={text3}
            onChangeText={textInputHandler3}
            refs={text3Refs}
            onKeyPress={keyPressHandler2}
          />

          <TextInputComponent
            style={{
              borderRadius: theme.Sizes.radius / 3,
              height: theme.Sizes.S14 * 3,
              width: theme.Sizes.width / 9,
              marginHorizontal: theme.Sizes.S10,
              textAlign: 'center',
            }}
            keyboardType="number-pad"
            maxLength={1}
            value={text4}
            onChangeText={textInputHandler4}
            refs={text4Refs}
            onKeyPress={keyPressHandler3}
          />

          <TextInputComponent
            style={{
              borderRadius: theme.Sizes.radius / 3,
              height: theme.Sizes.S14 * 3,
              width: theme.Sizes.width / 9,
              textAlign: 'center',
            }}
            keyboardType="number-pad"
            maxLength={1}
            value={text5}
            onChangeText={textInputHandler5}
            refs={text5Refs}
            onKeyPress={keyPressHandler4}
          />

          <TextInputComponent
            style={{
              borderRadius: theme.Sizes.radius / 3,
              height: theme.Sizes.S14 * 3,
              width: theme.Sizes.width / 9,
              marginHorizontal: theme.Sizes.S10,
              textAlign: 'center',
            }}
            keyboardType="number-pad"
            maxLength={1}
            value={text6}
            refs={text6Refs}
            onChangeText={textInputHandler6}
            onKeyPress={keyPressHandler5}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </Container>
      </Container>
    );
  };

  // verify OTP code
  const verifyOTPCode = async () => {
    try {
      if (text === '') {
        return;
      }
      const code = `${text}${text2}${text3}${text4}${text5}${text6}`;

      const credential = auth.PhoneAuthProvider.credential(
        verificationID,
        code,
      );
      const result = await auth().signInWithCredential(credential);

      if (result !== null) {
        navigation.navigate('Looking');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   Button
  const renderButton = () => {
    return (
      <Container
        flex={false}
        style={{
          overflow: 'hidden',
          marginHorizontal: theme.Sizes.S14 * 4,
          borderRadius: theme.Sizes.radius,
          marginTop: theme.Sizes.S14,
        }}>
        <ButtonComponent
          style={{
            height: theme.Sizes.height / 14,
          }}
          onPress={() => verifyOTPCode()}>
          Verify OTP
        </ButtonComponent>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>
        <KeyBoardAvoidingViewComponent>
          {renderLock()}
          {renderTextInputs()}
          {renderButton()}
        </KeyBoardAvoidingViewComponent>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default VerifyOTP;
