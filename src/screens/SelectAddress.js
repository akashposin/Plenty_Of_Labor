import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {images, theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Card, Container, HeaderComponent} from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {moderateScale} from 'react-native-size-matters';

const SelectAddress = ({navigation}) => {
  // header
  const renderHeader = () => {
    return (
      <HeaderComponent row center>
        <ButtonComponent
          style={{
            height: theme.Sizes.S14 * 2,
            width: theme.Sizes.S14 * 2,
            marginHorizontal: theme.Sizes.S14,
          }}
          onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={moderateScale(24)}
            color={theme.Colors.white}
          />
        </ButtonComponent>

        <Text
          style={{
            ...theme.Fonts.fontSemiBold,
            fontSize: theme.Sizes.F14,
            color: theme.Colors.white,
          }}>
          Select Address
        </Text>
      </HeaderComponent>
    );
  };

  //   Add New Address
  const renderAddNewAddress = () => {
    return (
      <Container
        flex={false}
        center
        row
        style={{
          marginTop: theme.Sizes.S10 * 2,
        }}>
        <Container
          flex={false}
          center
          middle
          shadow
          style={{
            overflow: 'hidden',
            marginHorizontal: theme.Sizes.S10 * 2,
            borderRadius: theme.Sizes.radius / 5,
          }}>
          <ButtonComponent
            style={{
              backgroundColor: theme.Colors.white,
              height: theme.Sizes.S14 * 1.8,
              width: theme.Sizes.S14 * 1.8,
            }}>
            <FontAwesome
              name="plus"
              size={moderateScale(14)}
              color={theme.Colors.black}
            />
          </ButtonComponent>
        </Container>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            color: theme.Colors.black,
          }}>
          Add New Address
        </Text>
      </Container>
    );
  };

  //   Home & Office Address
  const renderAddress = () => {
    return (
      <Container flex={false} center middle>
        {/* Home */}
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 6,
            borderRadius: theme.Sizes.S10,
            marginTop: theme.Sizes.S10 * 1.5,
          }}>
          <Container row>
            <Container>
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                }}>
                Home
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                  marginTop: theme.Sizes.S10 / 2,
                }}>
                Mayfair, Saskatoon, SK S7L 1V6, Canada
              </Text>
              <Container
                flex={false}
                color="black2"
                middle
                style={{
                  width: theme.Sizes.width / 7,
                  height: theme.Sizes.height / 34,
                  marginTop: theme.Sizes.S10,
                  borderRadius: theme.Sizes.S10 / 3,
                }}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    fontSize: theme.Sizes.F10,
                    color: theme.Colors.white,
                    marginLeft: theme.Sizes.S10 / 3,
                  }}>
                  Default
                </Text>
              </Container>
            </Container>

            <Card
              center
              middle
              style={{
                width: theme.Sizes.width / 4,
                height: theme.Sizes.height / 8,
                backgroundColor: theme.Colors.gray2,
                borderRadius: theme.Sizes.S10 / 2,
              }}>
              <Image
                source={images.home}
                resizeMode="contain"
                style={{
                  width: theme.Sizes.width / 7,
                  height: theme.Sizes.height / 8,
                }}
              />
            </Card>
          </Container>
        </Card>

        {/* Office */}
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 6,
            borderRadius: theme.Sizes.S10,
            marginTop: theme.Sizes.S10 * 1.5,
          }}>
          <Container row>
            <Container>
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                }}>
                Office
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                  marginTop: theme.Sizes.S10 / 2,
                }}>
                216 McMillan Ave, Saskatoon, SK S7L 2T4, Canada
              </Text>
            </Container>

            <Card
              center
              middle
              style={{
                width: theme.Sizes.width / 4,
                height: theme.Sizes.height / 8,
                backgroundColor: theme.Colors.gray2,
                borderRadius: theme.Sizes.S10 / 2,
              }}>
              <Image
                source={images.building}
                resizeMode="contain"
                style={{
                  width: theme.Sizes.width / 7,
                  height: theme.Sizes.height / 8,
                }}
              />
            </Card>
          </Container>
        </Card>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderAddNewAddress()}
      {renderAddress()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default SelectAddress;
