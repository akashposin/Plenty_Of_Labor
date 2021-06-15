import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Container,
  KeyBoardAvoidingViewComponent,
  TextInputComponent,
} from '../components';
import auth from '@react-native-firebase/auth';
import {moderateScale} from 'react-native-size-matters';

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = React.useState('923458978186');

  const phoneNumberInputHandler = inputText => {
    setPhoneNumber(inputText.replace(/[^0-9]/g, ''));
  };

  const renderHeader = () => {
    return (
      <Container
        flex={false}
        middle
        center
        style={{
          marginVertical: theme.Sizes.S14 * 6,
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
        <Text
          style={{
            marginBottom: theme.Sizes.S10 / 2,
            ...theme.Fonts.fontRegular,
            fontSize: theme.Sizes.F12,
          }}>
          Enter your phone number
        </Text>
        <TextInputComponent
          style={{
            borderRadius: theme.Sizes.radius,
            textAlign: 'center',
            height: theme.Sizes.height / 16,
            letterSpacing: moderateScale(1),
          }}
          value={phoneNumber}
          keyboardType="phone-pad"
          onChangeText={phoneNumberInputHandler}
        />
      </Container>
    );
  };

  const requestOTP = async () => {
    try {
      if (phoneNumber === '') {
        return;
      }

      const sendOTP = await auth().signInWithPhoneNumber(
        `+${phoneNumber}`,
        true,
      );
      const verificationID = sendOTP.verificationId;
      if (sendOTP !== null) {
        navigation.navigate('VerifyOTP', {phoneNumber, verificationID});
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
          borderRadius: theme.Sizes.radius,
          marginTop: theme.Sizes.S14,
        }}>
        <ButtonComponent
          style={{height: theme.Sizes.height / 14}}
          onPress={() => requestOTP()}>
          <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
            Submit
          </Text>
        </ButtonComponent>
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
