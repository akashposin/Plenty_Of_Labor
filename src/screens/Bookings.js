import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { images, theme } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Container, HeaderComponent } from '../components';
import Entypo from 'react-native-vector-icons/Entypo';
import { moderateScale } from 'react-native-size-matters';

const Bookings = ({ navigation }) => {
  // Header
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
          Bookings
        </Text>
      </HeaderComponent>
    );
  };

  // Body
  const renderBody = () => {
    return (
      <Container center>
        {/* In Progress Card */}
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.1,
            height: theme.Sizes.height / 5,
            borderRadius: theme.Sizes.S10,
            borderLeftWidth: theme.Sizes.S10,
            borderColor: theme.Colors.orange,
            marginVertical: theme.Sizes.S14,
          }}
        >
          <Container>
            <Container row center>
              {/* Profile Image */}
              <Container flex={false} style={{ marginRight: theme.Sizes.S10 }}>
                <Image
                  source={images.profile}
                  resizeMode='contain'
                  style={{
                    width: theme.Sizes.width / 5,
                    height: theme.Sizes.height / 5,
                  }}
                />
              </Container>

              <Container>
                {/* Name */}
                <Container flex={false} row center>
                  <Text
                    style={{
                      ...theme.Fonts.fontBold,
                      fontSize: theme.Sizes.F14,
                      flex: 1,
                    }}
                  >
                    Bill Smith
                  </Text>
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      backgroundColor: theme.Colors.green,
                      borderRadius: theme.Sizes.radius / 10,
                      color: theme.Colors.white,
                      fontSize: theme.Sizes.F10,
                      paddingHorizontal: theme.Sizes.S10,
                    }}
                  >
                    In Progress
                  </Text>
                </Container>

                {/* Address */}
                <Container>
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.black,
                      marginTop: theme.Sizes.S10 / 2,
                      fontSize: theme.Sizes.F11,
                    }}
                  >
                    Mayfair, Saskatoon, SK S7L 1V6, Canada
                  </Text>

                  {/* Date & Time */}
                  <Container row style={{ marginTop: theme.Sizes.S10 / 2 }}>
                    <Image
                      source={images.calender_icon}
                      resizeMode='contain'
                      style={{
                        width: theme.Sizes.S10 * 1.8,
                        height: theme.Sizes.S10 * 1.8,
                        marginRight: theme.Sizes.S10 / 2,
                      }}
                    />
                    <Container>
                      <Text
                        style={{
                          ...theme.Fonts.fontRegular,
                          color: theme.Colors.black,
                          fontSize: theme.Sizes.F11,
                        }}
                      >
                        Monday, May 24, 2021
                      </Text>
                      <Text
                        style={{
                          ...theme.Fonts.fontRegular,
                          color: theme.Colors.black,
                          fontSize: theme.Sizes.F11,
                        }}
                      >
                        02:30 PM
                      </Text>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>

            {/* Arrow Icon */}
            <Container
              flex={false}
              style={{
                alignSelf: 'flex-end',
              }}
            >
              <Entypo
                name='chevron-with-circle-right'
                size={moderateScale(24)}
                color={theme.Colors.black}
              />
            </Container>
          </Container>
        </Card>

        {/* Completed Card */}
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.1,
            height: theme.Sizes.height / 5,
            borderRadius: theme.Sizes.S10,
            borderLeftWidth: theme.Sizes.S10,
          }}
        >
          <Container>
            <Container row center>
              {/* Profile Image */}
              <Container flex={false} style={{ marginRight: theme.Sizes.S10 }}>
                <Image
                  source={images.profile}
                  resizeMode='contain'
                  style={{
                    width: theme.Sizes.width / 5,
                    height: theme.Sizes.height / 5,
                  }}
                />
              </Container>

              <Container>
                {/* Name */}
                <Container flex={false} row center>
                  <Text
                    style={{
                      ...theme.Fonts.fontBold,
                      fontSize: theme.Sizes.F14,
                      flex: 1,
                    }}
                  >
                    Wayne Longhard
                  </Text>
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      backgroundColor: theme.Colors.black2,
                      borderRadius: theme.Sizes.radius / 10,
                      color: theme.Colors.white,
                      fontSize: theme.Sizes.F10,
                      paddingHorizontal: theme.Sizes.S10,
                    }}
                  >
                    Done
                  </Text>
                </Container>

                {/* Address */}
                <Container>
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.black,
                      marginTop: theme.Sizes.S10 / 2,
                      fontSize: theme.Sizes.F11,
                    }}
                  >
                    Mayfair, Saskatoon, SK S7L 1V6, Canada
                  </Text>

                  {/* Date & Time */}
                  <Container row style={{ marginTop: theme.Sizes.S10 / 2 }}>
                    <Image
                      source={images.calender_icon}
                      resizeMode='contain'
                      style={{
                        width: theme.Sizes.S10 * 1.8,
                        height: theme.Sizes.S10 * 1.8,
                        marginRight: theme.Sizes.S10 / 2,
                      }}
                    />
                    <Container>
                      <Text
                        style={{
                          ...theme.Fonts.fontRegular,
                          color: theme.Colors.black,
                          fontSize: theme.Sizes.F11,
                        }}
                      >
                        Monday, May 24, 2021
                      </Text>
                      <Text
                        style={{
                          ...theme.Fonts.fontRegular,
                          color: theme.Colors.black,
                          fontSize: theme.Sizes.F11,
                        }}
                      >
                        02:30 PM
                      </Text>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>

            {/* Arrow Icon */}
            <Container
              flex={false}
              style={{
                alignSelf: 'flex-end',
              }}
            >
              <Entypo
                name='chevron-with-circle-right'
                size={moderateScale(24)}
                color={theme.Colors.black}
              />
            </Container>
          </Container>
        </Card>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderBody()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default Bookings;
