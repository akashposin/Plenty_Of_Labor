import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, TextInputComponent} from '../components';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';

const Register = ({route, navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  const passwordInputHandler = inputText => {
    setPassword(inputText);
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
      </Container>
    );
  };

  const registerUser = async () => {
    const data = {email: email, password: password};
    const result = await axios.post(
      'https://pol.aisoftwares.co.in/save-user',
      data,
    );
    if (result.data.success === 'true') {
      navigation.navigate('Login');
    } else {
      console.log('invalid email');
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
