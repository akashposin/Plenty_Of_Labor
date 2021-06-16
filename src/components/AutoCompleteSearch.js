import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//import Autocomplete component
import Autocomplete from 'react-native-autocomplete-input';

const AutoCompleteSearch = () => {
  // Used to set Main JSON Data.
  const [MainJSON, setMainJSON] = useState([]);

  // Used to set Filter JSON Data.
  const [FilterData, setFilterData] = useState([]);

  // Used to set Selected Item in State.
  const [selectedItem, setselectedItem] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(res => res.json())
      .then(json => {
        setMainJSON(json);
      })
      .catch(e => {
        alert(e);
      });
  }, []);

  const SearchDataFromJSON = query => {
    if (query) {
      //Making the Search as Case Insensitive.
      const regex = new RegExp(`${query.trim()}`, 'i');
      const result = MainJSON.filter(data => data.title.search(regex) >= 0).map(
        ({id, title, completed}) => {
          return [title];
        },
      );
      setFilterData(result);
    } else {
      setFilterData([]);
    }
  };

  return (
    <View style={styles.MainContainer}>
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.AutocompleteStyle}
        data={FilterData}
        defaultValue={
          JSON.stringify(selectedItem) === '{}' ? '' : selectedItem.title
        }
        // keyExtractor={(item, i) => i.toString()}
        onChangeText={text => SearchDataFromJSON(text)}
        placeholder="Type The Search Keyword..."
        flatListProps={{
          keyboardShouldPersistTaps: 'always',
          keyExtractor: item => item.id,
          renderItem: ({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setselectedItem(item);
                  setFilterData([]);
                }}>
                <Text style={styles.SearchBoxTextItem}>{item.title}</Text>
              </TouchableOpacity>
            );
          },
        }}
      />

      <View style={styles.selectedTextContainer}>
        {
          <Text style={styles.selectedTextStyle}>
            {JSON.stringify(selectedItem)}
          </Text>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    padding: 12,
  },
  AutocompleteStyle: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    borderWidth: 1,
  },
  SearchBoxTextItem: {
    margin: 5,
    fontSize: 16,
    paddingTop: 4,
  },
  selectedTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  selectedTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});
export default AutoCompleteSearch;
