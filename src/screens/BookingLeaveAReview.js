import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {
  ButtonComponent,
  Card,
  Container,
  FooterComponent,
  HeaderComponent,
  HorizontalLine,
} from '../components';
import {images, theme} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';

const BookingLeaveAReview = () => {
  // Header
  const renderHeader = () => {
    return (
      <HeaderComponent row center>
        <ButtonComponent
          style={{
            height: theme.Sizes.height / 22,
            width: theme.Sizes.width / 14,
            marginHorizontal: theme.Sizes.S14,
          }}
          // onPress
        >
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
          Booking
        </Text>
      </HeaderComponent>
    );
  };

  // Profile Data
  const renderProfileData = () => {
    return (
      <Container center style={{marginTop: theme.Sizes.S14}}>
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 5.5,
            borderRadius: theme.Sizes.S10,
            borderLeftWidth: theme.Sizes.S10,
            borderColor: theme.Colors.orange,
          }}>
          <Container row>
            {/* Profile Image */}
            <Container
              center
              middle
              flex={false}
              style={{
                marginRight: theme.Sizes.S14,
              }}>
              <Image
                source={images.profile}
                resizeMode="contain"
                style={{
                  width: theme.Sizes.S14 * 6.7,
                  height: theme.Sizes.S14 * 6.7,
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
                    }}>
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
                    width: theme.Sizes.S14 * 5,
                    height: theme.Sizes.S14 * 1.1,
                  }}>
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.white,
                      fontSize: theme.Sizes.F10,
                    }}>
                    In Progress
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
                  }}>
                  Mayfair, Saskatoon, SK S7L 1V6, Canada
                </Text>
              </Container>
              {/* Date & Time */}
              <Container row style={{marginTop: theme.Sizes.S10 / 2}}>
                <Container
                  flex={false}
                  style={{marginRight: theme.Sizes.S10 / 2}}>
                  <AntDesign
                    name="calendar"
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
                    }}>
                    Monday, May 24, 2021
                  </Text>
                  <Text
                    style={{
                      ...theme.Fonts.fontRegular,
                      color: theme.Colors.black,
                      fontSize: theme.Sizes.F11,
                    }}>
                    02:30 PM
                  </Text>
                </Container>
              </Container>
              {/* Arrow Icon */}
              <Container
                flex={false}
                style={{
                  alignSelf: 'flex-end',
                }}>
                <Entypo
                  name="chevron-with-circle-right"
                  size={moderateScale(22)}
                  color={theme.Colors.black}
                />
              </Container>
            </Container>
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
          }}>
          <Container flex={false} row>
            {/* Text */}
            <Container>
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                  marginBottom: theme.Sizes.S10 / 1.5,
                }}>
                Contact Provider
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                }}>
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
              }}>
              <ButtonComponent
                style={{
                  backgroundColor: 'transparent',
                  width: theme.Sizes.S14 * 3,
                  height: theme.Sizes.S14 * 3,
                }}>
                <Feather
                  name="phone-call"
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
              }}>
              <ButtonComponent
                style={{
                  backgroundColor: 'transparent',
                  width: theme.Sizes.S14 * 3,
                  height: theme.Sizes.S14 * 3,
                }}>
                <FontAwesome
                  name="wechat"
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
      <Container center>
        {/* Booking Details */}
        <Card
          shadow
          middle
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 9,
            borderRadius: theme.Sizes.radius / 5,
          }}>
          <Container>
            {/* Text Left*/}
            <Container
              row
              style={{
                marginBottom: theme.Sizes.S10,
              }}>
              <Container middle style={{height: theme.Sizes.S14 * 1.3}}>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F14,
                  }}>
                  Booking Details
                </Text>
              </Container>

              <Container
                flex={false}
                color="orange"
                center
                middle
                style={{
                  width: theme.Sizes.S14 * 2.8,
                  borderRadius: theme.Sizes.radius / 10,
                }}>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F10,
                    color: theme.Colors.white,
                  }}>
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
                  }}>
                  Status
                </Text>
              </Container>

              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}>
                  Ready
                </Text>
              </Container>
            </Container>
          </Container>
        </Card>
      </Container>
    );
  };

  // Booking Date & Time
  const renderBookingDateAndTime = () => {
    return (
      <Container center style={{marginBottom: theme.Sizes.S14 * 2}}>
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            borderRadius: theme.Sizes.radius / 5,
            marginVertical: theme.Sizes.S10,
          }}>
          <Container>
            <Container row flex={false} style={{marginBottom: theme.Sizes.S10}}>
              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F14,
                  }}>
                  Booking Date & Time
                </Text>
              </Container>

              <Container
                flex={false}
                color="orange"
                center
                middle
                style={{
                  width: theme.Sizes.width / 5.5,
                  height: theme.Sizes.height / 38,
                  borderRadius: theme.Sizes.radius / 10,
                }}>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F10,
                    color: theme.Colors.white,
                  }}>
                  45:00 mins
                </Text>
              </Container>
            </Container>

            {/* Bookint at */}
            <Container flex={false} row>
              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}>
                  Booking at
                </Text>
              </Container>
              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.black2,
                  }}>
                  24, May, 11:06 AM
                </Text>
              </Container>
            </Container>

            {/* Horizontal Line */}
            <HorizontalLine />

            {/* Started at */}
            <Container flex={false} row>
              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                    flex: 1,
                  }}>
                  Started at
                </Text>
              </Container>

              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.black2,
                  }}>
                  27, May, 01:12 AM
                </Text>
              </Container>
            </Container>

            {/* Horizontal Line */}
            <HorizontalLine />

            {/* Finished at */}
            <Container flex={false} row>
              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                    flex: 1,
                  }}>
                  Finished at
                </Text>
              </Container>

              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.black2,
                  }}>
                  27, May, 01:57 PM
                </Text>
              </Container>
            </Container>
          </Container>
        </Card>
      </Container>
    );
  };

  const renderBottomButton = () => {
    return <FooterComponent>Leave a Review</FooterComponent>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>
        {renderProfileData()}
        {renderContactProvider()}
        {renderBookingDetails()}
        {renderBookingDateAndTime()}
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

export default BookingLeaveAReview;
