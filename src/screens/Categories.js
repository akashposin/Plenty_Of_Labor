import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Card,
  Container,
  HeaderComponent,
  HorizontalLine,
  SearchBarComponent,
  Map,
} from '../components';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';
import {
  Camera,
  UserLocation,
  PointAnnotation,
} from '@react-native-mapbox-gl/maps';

const Categories = ({navigation}) => {
  const [text, setText] = React.useState('');

  const [location, setLocation] = React.useState([
    -106.6272786110048, 52.156657453004,
  ]);

  const renderHeader = () => {
    return (
      <HeaderComponent style={{height: theme.Sizes.height / 8.5}}>
        <Container flex={false} row center>
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
            Cut grass
          </Text>
        </Container>
        <Container
          flex={false}
          middle
          style={{marginHorizontal: theme.Sizes.S14 * 1.5}}>
          <SearchBarComponent
            placeholderTextColor={theme.Colors.gray}
            placeholder="Enter address (Where do you want services)"
            value={text}
            onChangeText={value => setText(value)}
          />
        </Container>
      </HeaderComponent>
    );
  };

  const renderWorkerDetails = () => {
    return (
      <Card
        style={{
          width: theme.Sizes.width / 1.2,
          height: theme.Sizes.S14 * 8,
          borderRadius: theme.Sizes.S10 / 1.5,
          top: moderateScale(480),
          zIndex: 1,
          position: 'absolute',
          marginHorizontal: theme.Sizes.S14 * 2,
        }}>
        <Container flex={false} style={{top: moderateScale(35)}}>
          {/* horizontal line */}
          <HorizontalLine style={{marginBottom: theme.Sizes.S10 / 2}} />

          <Container flex={false} row>
            <Container>
              {/* name */}
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                }}>
                Wayne
              </Text>
              <Entypo
                name="star"
                color={theme.Colors.orange}
                size={moderateScale(20)}
              />
            </Container>

            <Container flex={false} middle>
              <Container
                flex={false}
                style={{
                  overflow: 'hidden',
                  borderRadius: theme.Sizes.radius / 5,
                }}>
                <ButtonComponent
                  style={{
                    height: theme.Sizes.height / 30,
                    width: theme.Sizes.width / 4.5,
                  }}>
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.white,
                      letterSpacing: 0,
                      textAlign: 'center',
                    }}>
                    View Details
                  </Text>
                </ButtonComponent>
              </Container>
            </Container>
          </Container>
        </Container>
      </Card>
    );
  };

  const onUserLocationUpdate = position => {
    const {latitude, longitude} = position.coords;
    setLocation([longitude, latitude]);
  };

  const renderMap = () => {
    return (
      <Map>
        {/* <UserLocation
          visible={false}
          animated={true}
          onUpdate={onUserLocationUpdate}
        />
        <PointAnnotation
          id="1"
          title="marker title"
          coordinate={location}
          draggable={true}
        /> */}
      </Map>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderWorkerDetails()}
      {renderMap()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default Categories;
