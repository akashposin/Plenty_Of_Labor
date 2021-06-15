import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { images, theme } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonComponent, Container } from '../components';

const Looking = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <Container
        flex={false}
        center
        middle
        style={{
          marginTop: theme.Sizes.S14 * 3,
          marginBottom: theme.Sizes.S14 * 3,
        }}
      >
        <Container flex={false} style={{ marginBottom: theme.Sizes.S14 }}>
          <Text
            style={{ ...theme.Fonts.fontSemiBold, fontSize: theme.Sizes.F14 }}
          >
            What are you looking for?
          </Text>
        </Container>
      </Container>
    );
  };

  const renderEmployeLogo = () => {
    return (
      <Container flex={false}>
        <Image
          source={images.employee}
          style={{
            width: theme.Sizes.width / 6,
            height: theme.Sizes.width / 6,
          }}
        />
      </Container>
    );
  };

  const renderButtons = () => {
    return (
      <Container flex={false} center middle>
        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            borderRadius: theme.Sizes.radius,
            marginTop: theme.Sizes.S14 * 2,
          }}
        >
          <ButtonComponent
            style={{
              backgroundColor: theme.Colors.blue2,
              width: theme.Sizes.width / 1.6,
            }}
            onPress={() => navigation.navigate('Home')}
          >
            <Container flex={false} center middle>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.white,
                  fontSize: theme.Sizes.F14,
                }}
              >
                I want an Odd-Job
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.white,
                  fontSize: theme.Sizes.F14,
                }}
              >
                Click Here
              </Text>
            </Container>
          </ButtonComponent>
        </Container>

        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            borderRadius: theme.Sizes.radius,
            marginTop: theme.Sizes.S14,
          }}
        >
          <ButtonComponent
            style={{
              width: theme.Sizes.width / 1.6,
            }}
            onPress={() => navigation.navigate('Home')}
          >
            <Container flex={false} center middle>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.white,
                  fontSize: theme.Sizes.F14,
                }}
              >
                I need some Help
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.white,
                  fontSize: theme.Sizes.F14,
                }}
              >
                Click Here
              </Text>
            </Container>
          </ButtonComponent>
        </Container>
      </Container>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderEmployeLogo()}
      {renderButtons()}
    </SafeAreaView>
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

export default Looking;
