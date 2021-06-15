import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import {
  ButtonComponent,
  Card,
  Container,
  FooterComponent,
  HeaderComponent,
} from '../components';
import { images, theme } from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

const BookingDetails = () => {
  // Header
  const renderHeader = () => {
    return <HeaderComponent></HeaderComponent>;
  };

  // Map
  const renderMap = () => {
    return (
      <Container
        color='gray2'
        style={{ height: theme.Sizes.height / 3 }}
      ></Container>
    );
  };

  // Profile Data
  const renderProfileData = () => {
    return (
      <Container center style={{ marginTop: theme.Sizes.S14 }}>
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 5.5,
            borderRadius: theme.Sizes.S10,
            borderLeftWidth: theme.Sizes.S10,
            borderColor: theme.Colors.orange,
          }}
        >
          <Container row>
            {/* Profile Image */}
            <Container flex={false} style={{ marginRight: theme.Sizes.S14 }}>
              <Image
                source={images.profile}
                resizeMode='contain'
                style={{
                  width: theme.Sizes.width / 5,
                  height: theme.Sizes.height / 8,
                }}
              />
            </Container>

            <Container>
              {/* Name */}
              <Container flex={false} row>
                <Container>
                  <Text
                    style={{
                      ...theme.Fonts.fontBold,
                      fontSize: theme.Sizes.F14,
                    }}
                  >
                    Bill Smith
                  </Text>
                </Container>
                <Container
                  flex={false}
                  center
                  middle
                  style={{
                    backgroundColor: theme.Colors.green,
                    borderRadius: theme.Sizes.radius / 10,
                    width: theme.Sizes.width / 7,
                    height: theme.Sizes.height / 40,
                  }}
                >
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.white,
                      fontSize: theme.Sizes.F10,
                    }}
                  >
                    Coming
                  </Text>
                </Container>
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
                  <Container
                    flex={false}
                    style={{ marginRight: theme.Sizes.S10 / 2 }}
                  >
                    <AntDesign
                      name='calendar'
                      size={moderateScale(20)}
                      color={theme.Colors.orange}
                    />
                  </Container>
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
              size={moderateScale(22)}
              color={theme.Colors.black}
            />
          </Container>
        </Card>
      </Container>
    );
  };

  // Contact Provider
  const renderContactProvider = () => {
    return (
      <Container center>
        <Card
          shadow
          middle
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 9,
            borderRadius: theme.Sizes.radius / 5,
            marginVertical: theme.Sizes.S14,
          }}
        >
          <Container flex={false} row>
            {/* Text */}
            <Container>
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                  marginBottom: theme.Sizes.S10 / 1.5,
                }}
              >
                Contact Provider
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                }}
              >
                98564-57854
              </Text>
            </Container>

            {/* Phone Icon */}
            <Container
              flex={false}
              style={{
                overflow: 'hidden',
                borderRadius: theme.Sizes.radius,
                borderWidth: moderateScale(3),
                borderColor: theme.Colors.blue,
                marginHorizontal: theme.Sizes.S14,
              }}
            >
              <ButtonComponent
                style={{
                  backgroundColor: 'transparent',
                  width: theme.Sizes.width / 9,
                  height: theme.Sizes.height / 16,
                }}
              >
                <Feather
                  name='phone-call'
                  size={moderateScale(26)}
                  color={theme.Colors.blue}
                />
              </ButtonComponent>
            </Container>

            {/* Chat Icon */}
            <Container
              flex={false}
              style={{
                overflow: 'hidden',
                borderRadius: theme.Sizes.radius,
                borderWidth: moderateScale(3),
                borderColor: theme.Colors.blue,
              }}
            >
              <ButtonComponent
                style={{
                  backgroundColor: 'transparent',
                  width: theme.Sizes.width / 9,
                  height: theme.Sizes.height / 16,
                }}
              >
                <FontAwesome
                  name='wechat'
                  size={moderateScale(26)}
                  color={theme.Colors.blue}
                />
              </ButtonComponent>
            </Container>
          </Container>
        </Card>
      </Container>
    );
  };

  // Booking Details
  const renderBookingDetails = () => {
    return (
      <Container center style={{ marginBottom: theme.Sizes.S14 * 2 }}>
        {/* Booking Details */}
        <Card
          shadow
          middle
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 9,
            borderRadius: theme.Sizes.radius / 5,
          }}
        >
          <Container>
            {/* Text Left*/}
            <Container row style={{ marginBottom: theme.Sizes.S10 }}>
              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F14,
                  }}
                >
                  Booking Details
                </Text>
              </Container>

              <Container
                flex={false}
                color='orange'
                center
                middle
                style={{
                  width: theme.Sizes.width / 10,
                  height: theme.Sizes.height / 38,
                  borderRadius: theme.Sizes.radius / 10,
                }}
              >
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F10,
                    color: theme.Colors.white,
                  }}
                >
                  #1025
                </Text>
              </Container>
            </Container>

            {/* Text Right */}
            <Container row>
              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}
                >
                  Status
                </Text>
              </Container>

              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}
                >
                  Ready
                </Text>
              </Container>
            </Container>
          </Container>
        </Card>
      </Container>
    );
  };

  //   Bottom Button
  const renderBottomButton = () => {
    return <FooterComponent>Start</FooterComponent>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>
        {renderMap()}
        {renderProfileData()}
        {renderContactProvider()}
        {renderBookingDetails()}
      </ScrollView>
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

export default BookingDetails;
