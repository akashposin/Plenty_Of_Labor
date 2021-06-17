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

  // header
  const renderHeader = () => {
    return (
      <Container
        flex={false}
        middle
        center
        style={{
          marginVertical: theme.Sizes.S14 * 5,
        }}>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            fontSize: moderateScale(80),
            color: theme.Colors.gray,
          }}>
          POL
        </Text>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            fontSize: theme.Sizes.F16,
            color: theme.Colors.gray,
            marginTop: -theme.Sizes.S14,
          }}>
          PLENTY OF LABOR
        </Text>
      </Container>
    );
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
    console.log(data);
    // const result = await axios.post(
    //   'https://pol.aisoftwares.co.in/user-logged-in',
    //   data,
    // );
    // console.log(result);
  };

  //   Button
  const renderButton = () => {
    return (
      <Container style={{marginHorizontal: theme.Sizes.S14 * 5}}>
        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            borderRadius: theme.Sizes.radius,
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
      <ScrollView>
        <KeyBoardAvoidingViewComponent>
          {renderHeader()}
          {renderTextInputs()}
          {renderButton()}
          {renderLoginButton()}
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

export default Register;
