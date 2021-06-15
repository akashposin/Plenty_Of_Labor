import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { images, theme } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Container,
  FooterComponent,
  HeaderComponent,
  HorizontalLine,
} from '../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { moderateScale } from 'react-native-size-matters';

const Profile = ({ navigation }) => {
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
          Wayne
        </Text>
      </HeaderComponent>
    );
  };

  const renderProfile = () => {
    return (
      <Container center middle flex={false}>
        <Container
          flex={false}
          center
          middle
          row
          style={{ marginTop: theme.Sizes.S14 }}
        >
          <Image
            source={images.profile}
            style={{
              width: theme.Sizes.S14 * 7,
              height: theme.Sizes.S14 * 7,
            }}
          />
          <Container
            flex={false}
            style={{
              overflow: 'hidden',
              borderRadius: theme.Sizes.radius,
              borderWidth: 2,
              borderColor: theme.Colors.orange,
              right: theme.Sizes.S14 * 2,
              top: theme.Sizes.S14 * 2.5,
            }}
          >
            <ButtonComponent
              style={{
                width: theme.Sizes.width / 16,
                height: theme.Sizes.height / 26,
                backgroundColor: theme.Colors.white,
              }}
              // onPress={() => navigation.navigate('EditProfile')}
            >
              <FontAwesome5
                name='pen'
                size={moderateScale(12)}
                color={theme.Colors.orange}
              />
            </ButtonComponent>
          </Container>
        </Container>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            fontSize: theme.Sizes.F14,
            marginTop: theme.Sizes.S12,
          }}
        >
          Wayne Gates
        </Text>
        <Text
          style={{
            ...theme.Fonts.fontSemiBold,
            color: theme.Colors.gray,
          }}
        >
          Grass cutter, Plumber
        </Text>
      </Container>
    );
  };

  const renderMiddleLabels = () => {
    return (
      <Container flex={false} center middle>
        {/* 1st Label */}
        <Container
          flex={false}
          center
          middle
          row
          style={{ marginTop: theme.Sizes.S14 }}
        >
          <Container
            flex={false}
            color='gray2'
            center
            middle
            style={{
              width: theme.Sizes.width / 2.5,
              height: theme.Sizes.height / 16,
              marginRight: theme.Sizes.S14 * 2,
            }}
          >
            <Text
              style={{ ...theme.Fonts.fontMedium, fontSize: theme.Sizes.F10 }}
            >
              Member since
            </Text>
            <Text style={{ ...theme.Fonts.fontBold }}>10/04/2018</Text>
          </Container>

          <Container
            flex={false}
            color='gray2'
            center
            middle
            style={{
              width: theme.Sizes.width / 2.5,
              height: theme.Sizes.height / 16,
            }}
          >
            <Text style={{ ...theme.Fonts.fontMedium }}>WCB Insurance</Text>
          </Container>
        </Container>

        {/* 2nd Label */}
        <Container
          flex={false}
          color='green'
          center
          middle
          style={{
            width: theme.Sizes.width / 1.15,
            height: theme.Sizes.height / 16,
            marginTop: theme.Sizes.S14,
          }}
        >
          <Text
            style={{
              ...theme.Fonts.fontMedium,
              fontSize: theme.Sizes.F14,
              color: theme.Colors.white,
            }}
          >
            Available for Job
          </Text>
        </Container>

        {/* 3rd Label */}
        <Container
          flex={false}
          center
          middle
          row
          style={{ marginTop: theme.Sizes.S14 }}
        >
          <Container
            flex={false}
            color='gray2'
            center
            middle
            style={{
              width: theme.Sizes.width / 4.3,
              height: theme.Sizes.height / 16,
              marginRight: theme.Sizes.S14,
            }}
          >
            <Text
              style={{ ...theme.Fonts.fontMedium, fontSize: theme.Sizes.F10 }}
            >
              Ratings
            </Text>
            <Container flex={false} row center>
              <Entypo
                name='star'
                size={moderateScale(14)}
                color={theme.Colors.orange}
              />
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                  marginLeft: theme.Sizes.S10 / 5,
                }}
              >
                4.8
              </Text>
            </Container>
          </Container>

          <Container
            flex={false}
            color='gray2'
            center
            middle
            style={{
              width: theme.Sizes.width / 3,
              height: theme.Sizes.height / 16,
            }}
          >
            <Text
              style={{ ...theme.Fonts.fontMedium, fontSize: theme.Sizes.F10 }}
            >
              Job Completed
            </Text>
            <Text
              style={{ ...theme.Fonts.fontBold, fontSize: theme.Sizes.F14 }}
            >
              136
            </Text>
          </Container>
          <Container
            flex={false}
            color='green'
            center
            middle
            style={{ marginLeft: theme.Sizes.S14 }}
          >
            <ButtonComponent
              style={{
                width: theme.Sizes.width / 4.3,
                height: theme.Sizes.height / 16,
                backgroundColor: theme.Colors.orange,
              }}
            >
              <Feather
                name='phone-call'
                size={moderateScale(20)}
                color={theme.Colors.white}
              />
            </ButtonComponent>
          </Container>
        </Container>
      </Container>
    );
  };

  const renderRatings = () => {
    return (
      <Container style={{ marginHorizontal: theme.Sizes.S14 * 1.5 }}>
        {/* horizontal line */}
        <HorizontalLine />

        <Container
          flex={false}
          style={{
            marginLeft: theme.Sizes.S14,
            marginTop: theme.Sizes.S10 / 2,
          }}
        >
          <Text
            style={{ ...theme.Fonts.fontSemiBold, color: theme.Colors.gray }}
          >
            Punctuality
          </Text>
          <Entypo
            name='star'
            size={moderateScale(14)}
            color={theme.Colors.orange}
          />
        </Container>

        {/* horizontal line */}
        <HorizontalLine />

        <Container
          flex={false}
          style={{
            marginLeft: theme.Sizes.S14,
            marginTop: theme.Sizes.S10 / 2,
          }}
        >
          <Text
            style={{ ...theme.Fonts.fontSemiBold, color: theme.Colors.gray }}
          >
            Negotiating
          </Text>
          <Entypo
            name='star'
            size={moderateScale(14)}
            color={theme.Colors.orange}
          />
        </Container>

        {/* horizontal line */}
        <HorizontalLine />

        <Container
          flex={false}
          style={{
            marginLeft: theme.Sizes.S14,
            marginTop: theme.Sizes.S10 / 2,
          }}
        >
          <Text
            style={{ ...theme.Fonts.fontSemiBold, color: theme.Colors.gray }}
          >
            Quality
          </Text>
          <Entypo
            name='star'
            size={moderateScale(14)}
            color={theme.Colors.orange}
          />
        </Container>

        {/* horizontal line */}
        <HorizontalLine />
      </Container>
    );
  };

  const renderBottomButton = () => {
    return <FooterComponent>Hire</FooterComponent>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>
        {renderProfile()}
        {renderMiddleLabels()}
        {renderRatings()}
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

export default Profile;
