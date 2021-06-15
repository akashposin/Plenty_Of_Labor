import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { images, theme } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Container, HeaderComponent } from '../components';
import Entypo from 'react-native-vector-icons/Entypo';
import { moderateScale } from 'react-native-size-matters';

const ServiceProviderListOfReviews = ({ navigation }) => {
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
          Reviews
        </Text>
      </HeaderComponent>
    );
  };

  // Body
  const renderBody = () => {
    return (
      <Container
        style={{
          marginHorizontal: theme.Sizes.S14 * 2,
          marginBottom: theme.Sizes.S14 * 2,
        }}
      >
        {/* Ist Card */}
        <Card
          shadow
          style={{
            height: theme.Sizes.height / 6,
            borderRadius: theme.Sizes.S10,
            borderLeftWidth: theme.Sizes.S10,
            marginTop: theme.Sizes.S14,
          }}
        >
          <Container row>
            {/* Profile Image */}
            <Container flex={false} style={{ marginRight: theme.Sizes.S10 }}>
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
              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F14,
                  }}
                >
                  Bill Smith
                </Text>
              </Container>

              {/* Address */}
              <Container flex={false} style={{ width: theme.Sizes.width / 2 }}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.black,
                    marginTop: theme.Sizes.S10 / 3,
                    fontSize: theme.Sizes.F11,
                  }}
                >
                  Mayfair, Saskatoon, SK S7L 1V6, Canada
                </Text>
              </Container>

              {/* Ratings */}
              <Container flex={false} row center>
                <Container
                  flex={false}
                  center
                  style={{
                    marginTop: theme.Sizes.S10 / 3,
                    height: theme.Sizes.height / 38,
                    width: theme.Sizes.width / 14,
                    marginRight: theme.Sizes.S10 / 5,
                    backgroundColor: theme.Colors.orange,
                    borderRadius: theme.Sizes.radius / 12,
                  }}
                >
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.white,
                      fontSize: theme.Sizes.F11,
                    }}
                  >
                    4.5
                  </Text>
                </Container>
                <Entypo
                  name='star'
                  size={moderateScale(18)}
                  color={theme.Colors.yellow}
                />
              </Container>
            </Container>
          </Container>
        </Card>

        {/* 2nd Card */}
        <Card
          shadow
          style={{
            height: theme.Sizes.height / 6,
            borderRadius: theme.Sizes.S10,
            borderLeftWidth: theme.Sizes.S10,
            marginTop: theme.Sizes.S14,
          }}
        >
          <Container row>
            {/* Profile Image */}
            <Container flex={false} style={{ marginRight: theme.Sizes.S10 }}>
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
              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F14,
                  }}
                >
                  Jeff Bezos
                </Text>
              </Container>

              {/* Address */}
              <Container flex={false} style={{ width: theme.Sizes.width / 2 }}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.black,
                    marginTop: theme.Sizes.S10 / 3,
                    fontSize: theme.Sizes.F11,
                  }}
                >
                  502 Albert Ave, Saskatoon, SK S7N 1G5, Canada
                </Text>
              </Container>

              {/* Ratings */}
              <Container flex={false} row center>
                <Container
                  flex={false}
                  center
                  style={{
                    marginTop: theme.Sizes.S10 / 3,
                    height: theme.Sizes.height / 38,
                    width: theme.Sizes.width / 14,
                    marginRight: theme.Sizes.S10 / 5,
                    backgroundColor: theme.Colors.orange,
                    borderRadius: theme.Sizes.radius / 12,
                  }}
                >
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.white,
                      fontSize: theme.Sizes.F11,
                    }}
                  >
                    4.5
                  </Text>
                </Container>
                <Entypo
                  name='star'
                  size={moderateScale(18)}
                  color={theme.Colors.yellow}
                />
              </Container>
            </Container>
          </Container>
        </Card>

        {/* 3rd Card */}
        <Card
          shadow
          style={{
            height: theme.Sizes.height / 6,
            borderRadius: theme.Sizes.S10,
            borderLeftWidth: theme.Sizes.S10,
            marginTop: theme.Sizes.S14,
          }}
        >
          <Container row>
            {/* Profile Image */}
            <Container flex={false} style={{ marginRight: theme.Sizes.S10 }}>
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
              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F14,
                  }}
                >
                  Bill Smith
                </Text>
              </Container>

              {/* Address */}
              <Container flex={false} style={{ width: theme.Sizes.width / 2 }}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.black,
                    marginTop: theme.Sizes.S10 / 3,
                    fontSize: theme.Sizes.F11,
                  }}
                >
                  Mayfair, Saskatoon, SK S7L 1V6, Canada
                </Text>
              </Container>

              {/* Ratings */}
              <Container flex={false} row center>
                <Container
                  flex={false}
                  center
                  style={{
                    marginTop: theme.Sizes.S10 / 3,
                    height: theme.Sizes.height / 38,
                    width: theme.Sizes.width / 14,
                    marginRight: theme.Sizes.S10 / 5,
                    backgroundColor: theme.Colors.orange,
                    borderRadius: theme.Sizes.radius / 12,
                  }}
                >
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.white,
                      fontSize: theme.Sizes.F11,
                    }}
                  >
                    4.5
                  </Text>
                </Container>
                <Entypo
                  name='star'
                  size={moderateScale(18)}
                  color={theme.Colors.yellow}
                />
              </Container>
            </Container>
          </Container>
        </Card>

        {/* 4th Card */}
        <Card
          shadow
          style={{
            height: theme.Sizes.height / 6,
            borderRadius: theme.Sizes.S10,
            borderLeftWidth: theme.Sizes.S10,
            marginTop: theme.Sizes.S14,
          }}
        >
          <Container row>
            {/* Profile Image */}
            <Container flex={false} style={{ marginRight: theme.Sizes.S10 }}>
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
              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F14,
                  }}
                >
                  Diane Kruger
                </Text>
              </Container>

              {/* Address */}
              <Container flex={false} style={{ width: theme.Sizes.width / 2 }}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.black,
                    marginTop: theme.Sizes.S10 / 3,
                    fontSize: theme.Sizes.F11,
                  }}
                >
                  505 Albert Ave, Saskatoon, SK S7N 1G4 Canada
                </Text>
              </Container>

              {/* Ratings */}
              <Container flex={false} row center>
                <Container
                  flex={false}
                  center
                  style={{
                    marginTop: theme.Sizes.S10 / 3,
                    height: theme.Sizes.height / 38,
                    width: theme.Sizes.width / 14,
                    marginRight: theme.Sizes.S10 / 5,
                    backgroundColor: theme.Colors.orange,
                    borderRadius: theme.Sizes.radius / 12,
                  }}
                >
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.white,
                      fontSize: theme.Sizes.F11,
                    }}
                  >
                    5.0
                  </Text>
                </Container>
                <Entypo
                  name='star'
                  size={moderateScale(18)}
                  color={theme.Colors.yellow}
                />
              </Container>
            </Container>
          </Container>
        </Card>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>{renderBody()}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default ServiceProviderListOfReviews;
