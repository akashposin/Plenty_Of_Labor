import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderComponent, Map} from '../components';
import AutoCompleteSearch from '../components/AutoCompleteSearch';
import {
  Camera,
  UserLocation,
  PointAnnotation,
} from '@react-native-mapbox-gl/maps';

const Home = ({navigation}) => {
  const [mapRegion, setMapRegion] = React.useState([
    -106.6282786110048, 52.156657453004,
  ]);
  const [location, setLocation] = React.useState([
    -106.6272786110048, 52.156657453004,
  ]);

  const renderHeader = () => {
    return <HeaderComponent />;
  };

  const renderSearchBar = () => {
    return (
      <AutoCompleteSearch onPress={() => navigation.navigate('Categories')} />
    );
  };

  const onUserLocationUpdate = position => {
    const {latitude, longitude} = position.coords;
    setLocation([longitude, latitude]);
  };

  const renderMap = () => {
    return (
      <Map>
        <Camera
          zoomLevel={8}
          centerCoordinate={mapRegion}
          followUserLocation={true}
          followUserMode={'normal'}
          followZoomLevel={8}
          animationMode={'flyTo'}
          animationDuration={0}
        />
        <UserLocation
          visible={false}
          animated={true}
          onUpdate={onUserLocationUpdate}
        />
        <PointAnnotation
          id="1"
          title="marker title"
          coordinate={location}
          draggable={true}
        />
      </Map>
    );
  };

  return (
    <>
      <StatusBar hidden={false} />
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        {renderSearchBar()}
        {renderMap()}
        {/* {renderBody()} */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.gray2,
  },
});

export default Home;
