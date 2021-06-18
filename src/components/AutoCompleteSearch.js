import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import IonIcons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Container from './Container';
import {moderateScale} from 'react-native-size-matters';
import {theme} from '../constants';
import SearchBarComponent from './SearchBarComponent';

const AutoCompleteSearch = props => {
  const [mainData, setMainData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get(
        'https://pol.aisoftwares.co.in/search-service-providers?keyword=Cut Grass',
      );
      const getData = result.data.data.map(value => value);
      setMainData(getData);
    } catch (error) {
      console.log({'error message': error});
    }
  };

  const searchData = inputText => {
    if (inputText) {
      const regex = new RegExp(`${inputText.trim()}`, 'i');
      const result = mainData.filter(
        data => data.category_name.search(regex) >= 0,
      );
      setFilterData(result);
    } else {
      setFilterData([]);
    }
  };

  return (
    <Autocomplete
      autoCapitalize="none"
      autoCorrect={false}
      containerStyle={styles.AutocompleteStyle}
      data={filterData}
      inputContainerStyle={{
        borderRadius: theme.Sizes.radius,
        borderColor: 'transparent',
      }}
      listContainerStyle={{
        marginHorizontal: theme.Sizes.S10 / 1.5,
      }}
      renderTextInput={() => (
        <SearchBarComponent
          placeholderTextColor={theme.Colors.gray}
          placeholder="Search services..."
          onChangeText={data => searchData(data)}
        />
      )}
      flatListProps={{
        keyboardShouldPersistTaps: 'always',
        keyExtractor: item => item.id,
        renderItem: ({item}) => {
          return (
            <TouchableOpacity onPress={props.onPress}>
              <Text style={styles.SearchBoxTextItem}>{item.category_name}</Text>
            </TouchableOpacity>
          );
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  AutocompleteStyle: {
    // flex: 1,
    // marginHorizontal: theme.Sizes.s14,
    // borderColor: 'transparent',
  },
  SearchBoxTextItem: {
    ...theme.Fonts.fontMedium,
    margin: theme.Sizes.S10 / 3,
  },
});
export default AutoCompleteSearch;
