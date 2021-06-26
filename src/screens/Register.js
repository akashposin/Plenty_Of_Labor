import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, TextInputComponent} from '../components';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import isEmail from 'validator/lib/isEmail';

const Register = ({route, navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  const passwordInputHandler = inputText => {
    setPassword(inputText);
  };

  const confirmPasswordInputHandler = inputText => {
    setConfirmPassword(inputText);
  };

  const submit = () => {
    Keyboard.dismiss();
  };
  //   inputs
  const renderTextInputs = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 5,
        }}>
        <TextInputComponent
          style={{
            borderRadius: theme.Sizes.radius / 5,
            paddingLeft: theme.Sizes.S14 / 2,
            letterSpacing: moderateScale(0.5),
          }}
          value={email}
          onChangeText={emailInputHandler}
          placeholder="please enter email"
          placeholderTextColor={theme.Colors.gray}
        />

        <TextInputComponent
          style={{
            borderRadius: theme.Sizes.radius / 5,
            paddingLeft: theme.Sizes.S14 / 2,
            letterSpacing: moderateScale(0.5),
          }}
          value={password}
          onChangeText={passwordInputHandler}
          placeholder="please enter password"
          placeholderTextColor={theme.Colors.gray}
          secureTextEntry
        />

        <TextInputComponent
          style={{
            borderRadius: theme.Sizes.radius / 5,
            paddingLeft: theme.Sizes.S14 / 2,
            letterSpacing: moderateScale(0.5),
          }}
          value={confirmPassword}
          onChangeText={confirmPasswordInputHandler}
          placeholder="please enter confirm password"
          placeholderTextColor={theme.Colors.gray}
          onSubmitEditing={submit}
          secureTextEntry
        />
      </Container>
    );
  };

  const registerUser = async () => {
    try {
      const data = {email: email, password: password};
      if (isEmail(email)) {
        if (password.trim().length === 0) {
          Toast.show({
            topOffset: moderateScale(100),
            type: 'error',
            text1: 'Please enter a valid password',
            text2: 'Hint: password can not contain empty spaces',
            visibilityTime: 1000,
          });
        }
        if (password !== confirmPassword) {
          Toast.show({
            topOffset: moderateScale(100),
            type: 'error',
            text1: 'Error',
            text2: "password didn't matched please enter correct password",
            visibilityTime: 1000,
          });
        }
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const result = await axios.post(
          'https://pol.aisoftwares.co.in/save-user',
          data,
          config,
        );

        if (result.data.success === 'true') {
          Toast.show({
            topOffset: moderateScale(100),
            type: 'success',
            text1: 'User created successfully',
            text2: 'Please login',
            visibilityTime: 300,
          });
          navigation.replace('Login');
        } else {
          Toast.show({
            topOffset: moderateScale(100),
            type: 'error',
            text1: 'User already exists with this email',
            text2: 'Please login instead',
            visibilityTime: 300,
          });
        }
      } else {
        Toast.show({
          topOffset: moderateScale(100),
          type: 'error',
          text1: 'Invalid email',
          text2: 'Please enter a valid email',
          visibilityTime: 1000,
        });
      }
    } catch (error) {
      Toast.show({
        topOffset: moderateScale(60),
        type: 'error',
        text1: 'Error',
        text2: 'Network error please again later',
        visibilityTime: 1000,
      });
    }
  };

  //   Button
  const renderButton = () => {
    return (
      <Container flex={false} style={{marginHorizontal: theme.Sizes.S14 * 5}}>
        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            borderRadius: theme.Sizes.radius / 5,
            marginTop: theme.Sizes.S14,
          }}>
          <ButtonComponent
            style={{height: theme.Sizes.height / 14}}
            onPress={registerUser}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
              Register
            </Text>
          </ButtonComponent>
        </Container>
      </Container>
    );
  };

  // Login Button
  const renderLoginButton = () => {
    return (
      <Container
        flex={false}
        row
        style={{
          marginTop: theme.Sizes.S14,
          marginHorizontal: theme.Sizes.S14 * 6,
        }}>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            color: theme.Colors.black,
          }}>
          Already have an account?{' '}
        </Text>
        <ButtonComponent
          style={{
            backgroundColor: theme.Colors.white,
            marginRight: theme.Sizes.S14 * 3,
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              color: theme.Colors.blue,
              letterSpacing: moderateScale(0.5),
              fontSize: theme.Sizes.F14,
            }}>
            Login
          </Text>
        </ButtonComponent>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderTextInputs()}
      {renderButton()}
      {renderLoginButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
    justifyContent: 'center',
  },
});

export default Register;
