import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, TextInputComponent} from '../components';
import {moderateScale} from 'react-native-size-matters';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  //   inputs
  const renderBody = () => {
    return (
      <Container middle>
        {/* textInput */}
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

        {/* / button */}
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
              onPress={() => {}}>
              <Text
                style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F18}}>
                Reset Password
              </Text>
            </ButtonComponent>
          </Container>
        </Container>
      </Container>
    );
  };

  return <SafeAreaView style={styles.container}>{renderBody()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default ForgotPassword;
