import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {theme} from '../constants';
import Container from './Container';
import TextInputComponent from './TextInputComponent';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SearchBarComponent = props => {
  return (
    <Container
      flex={false}
      color="white"
      row
      middle
      center
      style={{
        borderRadius: theme.Sizes.radius,
        marginHorizontal: theme.Sizes.S10 * 2,
        height: theme.Sizes.height / 16,
      }}>
      <Container>
        <TextInputComponent
          style={{
            borderWidth: 0,
            backgroundColor: 'transparent',
            paddingLeft: theme.Sizes.S14,
          }}
          {...props}
        />
      </Container>
      <Container flex={false} style={{marginRight: theme.Sizes.S10}}>
        <IonIcons
          name="search"
          size={moderateScale(24)}
          color={theme.Colors.gray}
        />
      </Container>
    </Container>
  );
};

export default SearchBarComponent;
