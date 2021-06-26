import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import axios from 'axios';
import {theme} from '../constants';
import SearchBarComponent from './SearchBarComponent';
import {moderateScale} from 'react-native-size-matters';

const AutoCompleteSearch = ({onPress}) => {
  const [mainData, setMainData] = useState([]);

  const searchCategory = async inputText => {
    try {
      const result = await axios.get(
        `https://pol.aisoftwares.co.in/get-all-sub-categories?keyword=${inputText}`,
      );
      const getData = result.data.all_sub_categories.map(value => value);
      if (inputText) {
        setMainData(getData);
      } else {
        setMainData([]);
      }
    } catch (error) {
      console.log({'error message': error});
    }
  };

  return (
    <Autocomplete
      autoCapitalize="none"
      autoCorrect={false}
      containerStyle={styles.container}
      data={mainData}
      inputContainerStyle={styles.inputText}
      renderTextInput={() => (
        <SearchBarComponent
          placeholderTextColor={theme.Colors.gray}
          placeholder="Search services..."
          onChangeText={searchCategory}
        />
      )}
      flatListProps={{
        keyboardShouldPersistTaps: 'always',
        keyExtractor: item => item.sub_category_id,
        renderItem: ({item}) => {
          return (
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.dropDownText}>{item.sub_category_name}</Text>
            </TouchableOpacity>
          );
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.Sizes.S14 * 2,
    top: moderateScale(45),
    position: 'absolute',
    zIndex: 1,
    width: theme.Sizes.width / 1.17,
  },
  inputText: {
    borderWidth: 0,
  },
  dropDownText: {
    ...theme.Fonts.fontMedium,
    margin: theme.Sizes.S10 / 3,
  },
});
export default AutoCompleteSearch;
