import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {theme} from '../constants';
import Container from './Container';
import TextInputComponent from './TextInputComponent';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

const SearchBarComponent = props => {
  return (
    <Container
      flex={false}
      color="white"
      row
      middle
      center
      style={styles.container}>
      <Container>
        <TextInputComponent style={styles.inputText} {...props} />
      </Container>
      <Container flex={false} style={styles.iconContainer}>
          <IonIcons
              name="search"
              size={moderateScale(16)}
          color={theme.Colors.gray}
        />
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
  borderRadius: 32,
      height: 40,
      paddingStart: 8,
  },
  inputText: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  iconContainer: {
    marginRight: 16,
  },
});

export default SearchBarComponent;
