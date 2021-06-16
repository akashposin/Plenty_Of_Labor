import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Card,
  Container,
  HeaderComponent,
  KeyBoardAvoidingViewComponent,
  SearchBarComponent,
} from '../components';
import axios from 'axios';
import AutoCompleteSearch from '../components/AutoCompleteSearch';

const Home = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const [filterData, setFilterData] = React.useState([]);
  const [masterData, setMasterData] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const searchData = data => {
    if (data) {
      // const temp = data.toLowerCase();
      // const newData = masterData.filter(item => {
      //   for (let key in item) {
      //     console.log(key);
      //     if (key.match(temp)) {
      //       return item;
      //     }
      //   }
      // });
      const newData = masterData.filter(item => {
        const temp = data.toLowerCase();
        const category = item.category_name.toLowerCase();
        return category.includes(temp);
        // const dataItem = item.category_name
        //   ? item.category_name.toUpperCase()
        //   : ''.toUpperCase();
        // const textData = data.toUpperCase();
        // return dataItem.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(data);
    } else {
      setFilterData(masterData);
      setSearch(data);
    }
  };

  const renderHeader = () => {
    return (
      <HeaderComponent>
        <Container
          flex={false}
          middle
          style={{
            marginHorizontal: theme.Sizes.S14,
            marginTop: theme.Sizes.S10 / 2,
            height: theme.Sizes.height / 18,
          }}>
          <SearchBarComponent
            placeholderTextColor={theme.Colors.gray}
            placeholder="Search services..."
            value={search}
            onChangeText={data => searchData(data)}
          />
        </Container>
      </HeaderComponent>
    );
  };

  const fetchData = async () => {
    const result = await axios.get(
      'https://pol.aisoftwares.co.in/search-service-providers?keyword=Cut Grass',
    );
    if (!result) {
      return;
    }
    setFilterData(result.data.data);
    setMasterData(result.data.data);
  };

  const renderDataItems = ({item}) => {
    return (
      <Container center middle style={{marginTop: theme.Sizes.S14 * 1.3}}>
        {/* <TouchableOpacity activeOpacity={0.8} onPress={() => {}}> */}
        <Card
          shadow
          middle
          style={{
            height: theme.Sizes.height / 7,
            width: theme.Sizes.width / 1.12,
            borderRadius: theme.Sizes.radius / 3,
            marginBottom: theme.Sizes.S14,
          }}>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.phone_number}</Text>
          <Text>{item.experience}</Text>
          <Text>{item.category_name}</Text>
        </Card>
        {/* </TouchableOpacity> */}
      </Container>
    );
  };

  // const renderTest = () => {
  //   return (
  //     <Container>
  //       <AutoCompleteSearch />
  //     </Container>
  //   );
  // };

  const renderBody = () => {
    return (
      // <ScrollView>
      <KeyBoardAvoidingViewComponent>
        <FlatList
          data={filterData}
          keyExtractor={item => item.id}
          renderItem={renderDataItems}
        />
      </KeyBoardAvoidingViewComponent>
      // </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderBody()}
      {/* {renderTest()} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default Home;
