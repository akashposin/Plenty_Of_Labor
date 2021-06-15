import React from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import {
  ButtonComponent,
  Card,
  Container,
  HorizontalLine,
  HeaderComponent,
  FooterComponent,
} from '../components';
import { images, theme } from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

const BookingCompletedView = () => {
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
            name='keyboard-arrow-left'
            size={moderateScale(24)}
            color={theme.Colors.white}
          />
        </ButtonComponent>

        <Text
          style={{
            ...theme.Fonts.fontSemiBold,
            fontSize: theme.Sizes.F14,
            color: theme.Colors.white,
          }}
        >
          Details
        </Text>
      </HeaderComponent>
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

  // Booking Date & Time
  const renderBookingDateAndTime = () => {
    return (
      <Container center>
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            borderRadius: theme.Sizes.radius / 5,
            marginVertical: theme.Sizes.S10,
          }}
        >
          <Container>
            {/* Booking Details*/}
            <Container
              row
              flex={false}
              style={{ marginBottom: theme.Sizes.S10 }}
            >
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                  flex: 1,
                }}
              >
                Booking Date & Time
              </Text>

              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F10,
                  color: theme.Colors.white,
                  backgroundColor: theme.Colors.orange,
                  width: theme.Sizes.S14 * 5,
                  height: theme.Sizes.S14 * 1.3,
                  borderRadius: theme.Sizes.radius / 10,
                  textAlign: 'center',
                }}
              >
                45:00 mins
              </Text>
            </Container>

            {/* Bookint at */}
            <Container flex={false} row>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                  flex: 1,
                }}
              >
                Booking at
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.black2,
                }}
              >
                24, May, 11:06 AM
              </Text>
            </Container>

            {/* Horizontal Line */}
            <HorizontalLine />

            {/* Started at */}
            <Container flex={false} row>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                  flex: 1,
                }}
              >
                Started at
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.black2,
                }}
              >
                27, May, 01:12 AM
              </Text>
            </Container>

            {/* Horizontal Line */}
            <HorizontalLine />

            {/* Finished at */}
            <Container flex={false} row>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                  flex: 1,
                }}
              >
                Finished at
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.black2,
                }}
              >
                27, May, 01:57 PM
              </Text>
            </Container>
          </Container>
        </Card>
      </Container>
    );
  };

  // Service
  const renderService = () => {
    return (
      <Container center style={{ marginBottom: theme.Sizes.S14 * 2 }}>
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            borderRadius: theme.Sizes.radius / 5,
          }}
        >
          <Container>
            <Container style={{ marginBottom: theme.Sizes.S10 }}>
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                }}
              >
                How was the service?
              </Text>
            </Container>

            <Container>
              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}
                >
                  Punctuality
                </Text>
                <Entypo
                  name='star'
                  size={moderateScale(16)}
                  color={theme.Colors.yellow}
                />
              </Container>

              {/* horizontal line */}
              <HorizontalLine />

              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}
                >
                  Negotiating
                </Text>
                <Entypo
                  name='star'
                  size={moderateScale(16)}
                  color={theme.Colors.yellow}
                />
              </Container>

              {/* horizontal line */}
              <HorizontalLine />

              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}
                >
                  Quality
                </Text>
                <Entypo
                  name='star'
                  size={moderateScale(16)}
                  color={theme.Colors.yellow}
                />
              </Container>
            </Container>
          </Container>
        </Card>
      </Container>
    );
  };

  //   Bottom Button
  const renderBottomButton = () => {
    return <FooterComponent>Back</FooterComponent>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>
        {renderProfileData()}
        {renderBookingDateAndTime()}
        {renderService()}
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

export default BookingCompletedView;
