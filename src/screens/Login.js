import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Container,
  KeyBoardAvoidingViewComponent,
  TextInputComponent,
} from '../components';
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
    const data = {email: email, password: password};
    console.log(data);
    const result = await axios.post(
      'https://pol.aisoftwares.co.in/user-logged-in',
      data,
    );
    console.log(result);
  };

  const renderButton = () => {
    return (
      <Container>
        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            marginHorizontal: theme.Sizes.S14 * 5,
            borderRadius: theme.Sizes.radius,
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

        <Container row center middle style={{marginTop: theme.Sizes.S14}}>
          {/* <TouchableOpacity
            activeOpacity={0.6}
            style={{marginRight: theme.Sizes.S14 * 2}}>
            <Text
              style={{
                ...theme.Fonts.fontBold,
                color: theme.Colors.blue,
                letterSpacing: moderateScale(0.5),
                fontSize: theme.Sizes.F14,
              }}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <Text
              style={{
                ...theme.Fonts.fontBold,
                color: theme.Colors.blue,
                letterSpacing: moderateScale(0.5),
                fontSize: theme.Sizes.F14,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity> */}
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
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyBoardAvoidingViewComponent>
          {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
          {/* <View> */}
          {renderHeader()}
          {renderTextInput()}
          {renderButton()}
          {/* </View> */}
          {/* </TouchableWithoutFeedback> */}
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

export default Login;
