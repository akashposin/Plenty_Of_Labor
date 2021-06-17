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

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
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
      </Container>
    );
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
            onPress={() => {}}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
              Reset Password
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
          {renderHeader()}
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

export default ForgotPassword;
