import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import {
  ButtonComponent,
  Container,
  HeaderComponent,
  HorizontalLine,
  TextInputComponent,
} from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { images, theme } from '../constants';
import { moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditProfile = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <HeaderComponent row center middle>
        <Container center>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F14,
              color: theme.Colors.white,
            }}
          >
            Edit Profile
          </Text>
        </Container>
        <Container
          flex={false}
          style={{
            overflow: 'hidden',
            marginHorizontal: theme.Sizes.S10,
            borderRadius: theme.Sizes.radius / 7,
          }}
        >
          <ButtonComponent
            style={{
              backgroundColor: theme.Colors.white,
              width: theme.Sizes.width / 14,
              height: theme.Sizes.height / 24,
            }}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5
              name='check'
              size={moderateScale(18)}
              color={theme.Colors.orange}
            />
          </ButtonComponent>
        </Container>
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
              width: theme.Sizes.width / 4,
              height: theme.Sizes.height / 6.7,
            }}
          />
          <Container
            flex={false}
            style={{
              overflow: 'hidden',
              borderRadius: theme.Sizes.radius,
              borderWidth: 4,
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
              onPress={() => alert('change profile picture')}
            >
              <FontAwesome5
                name='pen'
                size={moderateScale(12)}
                color={theme.Colors.orange}
              />
            </ButtonComponent>
          </Container>
        </Container>
        <Container flex={false} center middle>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              marginTop: theme.Sizes.S12,
            }}
          >
            Member Since
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
            }}
          >
            10/04/2018
          </Text>
          <Entypo
            name='star'
            size={moderateScale(18)}
            color={theme.Colors.yellow}
          />
        </Container>
      </Container>
    );
  };

  const renderData = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 1.2,
        }}
      >
        {/* Name */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F11,
              color: theme.Colors.gray,
            }}
          >
            Name
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F13,
              borderColor: theme.Colors.gray3,
              marginTop: theme.Sizes.S10,
            }}
          >
            Wayne Gates
          </Text>
        </Container>

        {/* Horizontal Line */}
        <HorizontalLine />

        {/* Phone Number */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F11,
              color: theme.Colors.gray,
            }}
          >
            Phone Number
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F13,
              borderColor: theme.Colors.gray3,
              marginTop: theme.Sizes.S10,
            }}
          >
            869-465-8954
          </Text>
        </Container>

        {/* Horizontal Line */}
        <HorizontalLine />

        {/* Age */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F11,
              color: theme.Colors.gray,
            }}
          >
            Age
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F13,
              borderColor: theme.Colors.gray3,
              marginTop: theme.Sizes.S10,
            }}
          >
            32 years
          </Text>
        </Container>

        {/* Horizontal Line */}
        <HorizontalLine />

        {/* Experience */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F11,
              color: theme.Colors.gray,
            }}
          >
            Experience
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F13,
              borderColor: theme.Colors.gray3,
              marginTop: theme.Sizes.S10,
            }}
          >
            Grass cutter, Plumber
          </Text>
        </Container>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderProfile()}
      {renderData()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});
export default EditProfile;
