import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, TextInputComponent} from '../components';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  const passwordInputHandler = inputText => {
    setPassword(inputText);
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
          secureTextEntry
        />
      </Container>
    );
  };

  const loginUser = async () => {
    try {
      const data = {email: email, password: password};
      const result = await axios.post(
        'https://pol.aisoftwares.co.in/user-logged-in',
        data,
      );
      if (result.data.success === 'true') {
        navigation.navigate('Home');
      } else {
        console.log('invalid credentials');
      }
    } catch (error) {
      console.log(error);
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
        middle
        style={{marginTop: theme.Sizes.S14}}>
        <ButtonComponent
          style={{
            backgroundColor: theme.Colors.white,
            marginRight: theme.Sizes.S14 * 3,
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
