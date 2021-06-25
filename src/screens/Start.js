import React from 'react';
import {Image, StyleSheet, Text, StatusBar} from 'react-native';
import {images, theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, FooterComponent} from '../components';
import {moderateScale} from 'react-native-size-matters';

const Start = ({navigation}) => {
  const renderLogo = () => {
    return (
      <Container
        flex={false}
        center
        middle
        style={{
          marginVertical: theme.Sizes.S14 * 3,
        }}>
        <Image
          source={images.logo}
          style={{
            width: theme.Sizes.S14 * 15,
            height: theme.Sizes.S14 * 15,
          }}
        />
      </Container>
    );
  };

  const renderButtons = () => {
    return (
      <Container center middle style={{marginVertical: theme.Sizes.S14}}>
        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            borderRadius: theme.Sizes.radius / 5,
            marginTop: theme.Sizes.S14 * 3,
          }}>
          <ButtonComponent
            style={{
              width: theme.Sizes.width / 1.5,
              height: theme.Sizes.height / 13,
            }}
            onPress={() => navigation.navigate('Login')}>
            Looking for Work
          </ButtonComponent>
        </Container>

        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            borderRadius: theme.Sizes.radius / 5,
            marginTop: theme.Sizes.S14 * 1.5,
          }}>
          <ButtonComponent
            style={{
              backgroundColor: theme.Colors.blue,
              width: theme.Sizes.width / 1.5,
              height: theme.Sizes.height / 13,
            }}
            onPress={() => navigation.navigate('Home')}>
            Need some Help
          </ButtonComponent>
        </Container>

        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            borderRadius: theme.Sizes.radius / 5,
            marginTop: theme.Sizes.S14 * 1.5,
          }}>
          <ButtonComponent
            style={{
              width: theme.Sizes.width / 1.5,
              height: theme.Sizes.height / 13,
            }}
            onPress={() => navigation.navigate('Register')}>
            Register
          </ButtonComponent>
        </Container>
      </Container>
    );
  };

  const renderText = () => {
    return (
      <Container
        center
        style={{
          marginTop: theme.Sizes.S14 * 7,
        }}>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            fontSize: theme.Sizes.F18,
            letterSpacing: moderateScale(0.5),
          }}>
          Saving Our Planet One
        </Text>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            fontSize: theme.Sizes.F18,
            letterSpacing: moderateScale(0.5),
          }}>
          Odd-job At A Time! ©
        </Text>
      </Container>
    );
  };

  const renderFooter = () => {
    return (
      <FooterComponent
        style={{
          backgroundColor: theme.Colors.white,
          marginBottom: theme.Sizes.S10 / 2,
        }}>
        <Text
          style={{
            color: theme.Colors.black,
            fontSize: theme.Sizes.F14,
            letterSpacing: 0.5,
          }}>
          ©2021 Plenty of Labor . All Rights Reserved
        </Text>
      </FooterComponent>
    );
  };
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>
        {renderLogo()}
        {renderButtons()}
        {renderText()}
        {renderFooter()}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Start;
