import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, TextInputComponent} from '../components';
import {moderateScale} from 'react-native-size-matters';
import {storeUserId} from '../shared/LocalStorage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import isEmail from 'validator/lib/isEmail';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  const passwordInputHandler = inputText => {
    setPassword(inputText);
  };

  const submit = () => {
    Keyboard.dismiss();
  };

  const renderTextInput = () => {
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
          onSubmitEditing={submit}
          secureTextEntry
        />
      </Container>
    );
  };

  const loginUser = async () => {
    try {
      const data = {email: email, password: password};
      if (isEmail(email)) {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const result = await axios.post(
          'https://pol.aisoftwares.co.in/user-logged-in',
          data,
          config,
        );
        if (result.data.success === 'true') {
          Toast.show({
            topOffset: moderateScale(100),
            type: 'success',
            text1: 'Success',
            text2: 'logged in successfully',
            visibilityTime: 300,
          });
          const user_id = result.data.user_data.id;
          storeUserId(JSON.stringify(user_id));
          navigation.replace('Home');
        } else {
          Toast.show({
            topOffset: moderateScale(60),
            type: 'error',
            text1: 'Error',
            text2: 'Invalid Credentials, please try again',
            visibilityTime: 500,
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

  const renderButton = () => {
    return (
      <Container
        flex={false}
        style={{
          overflow: 'hidden',
          marginHorizontal: theme.Sizes.S14 * 5,
          borderRadius: theme.Sizes.radius / 5,
          marginTop: theme.Sizes.S14,
        }}>
        <ButtonComponent
          style={{height: theme.Sizes.height / 14}}
          onPress={loginUser}>
          <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
            Login
          </Text>
        </ButtonComponent>
      </Container>
    );
  };

  const renderRegisterForgotPasswordButtons = () => {
    return (
      <Container
        flex={false}
        row
        center
        style={{
          marginTop: theme.Sizes.S14,
          marginHorizontal: theme.Sizes.S14 * 5,
        }}>
        <ButtonComponent
          style={{
            backgroundColor: theme.Colors.white,
          }}
          onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              color: theme.Colors.blue,
              letterSpacing: moderateScale(0.5),
              fontSize: theme.Sizes.F14,
            }}>
            Register
          </Text>
        </ButtonComponent>

        <Container />
        <ButtonComponent
          style={{backgroundColor: theme.Colors.white}}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              color: theme.Colors.blue,
              letterSpacing: moderateScale(0.5),
              fontSize: theme.Sizes.F14,
            }}>
            Forgot Password?
          </Text>
        </ButtonComponent>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderTextInput()}
      {renderButton()}
      {renderRegisterForgotPasswordButtons()}
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

export default Login;
