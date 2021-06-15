import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, FooterComponent, HeaderComponent } from '../components';
import { moderateScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';

const Confirmation = ({ navigation }) => {
  // header
  const renderHeader = () => {
    return (
      <HeaderComponent center middle>
        <Text
          style={{
            ...theme.Fonts.fontSemiBold,
            fontSize: theme.Sizes.F14,
            color: theme.Colors.white,
          }}
        >
          Confirmation
        </Text>
      </HeaderComponent>
    );
  };

  //   Confirmation Message
  const renderConfirmationMessage = () => {
    return (
      <Container center middle>
        <Feather
          name='check-circle'
          color={theme.Colors.green}
          size={moderateScale(80)}
        />

        <Text
          style={{
            ...theme.Fonts.fontBold,
            fontSize: theme.Sizes.F18,
            marginTop: theme.Sizes.S14,
          }}
        >
          Thank you!
        </Text>
        <Text
          style={{
            ...theme.Fonts.fontSemiBold,
            fontSize: theme.Sizes.F14,
            color: theme.Colors.gray,
            marginTop: theme.Sizes.S10,
            marginHorizontal: theme.Sizes.S14 * 4,
            textAlign: 'center',
          }}
        >
          Your booking has been successfully submitted, you will receive a
          confirmation soon
        </Text>
      </Container>
    );
  };

  //   Bottom Button
  const renderBottomButton = () => {
    return <FooterComponent>My Bookings</FooterComponent>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderConfirmationMessage()}
      {renderBottomButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default Confirmation;
