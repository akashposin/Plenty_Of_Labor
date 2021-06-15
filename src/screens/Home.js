import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Card,
  Container,
  HeaderComponent,
  KeyBoardAvoidingViewComponent,
  SearchBarComponent,
  TextInputComponent,
} from '../components';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';

const Home = ({ navigation }) => {
  const [text, setText] = React.useState('');

  const renderHeader = () => {
    return (
      <HeaderComponent>
        <Container
          style={{
            marginHorizontal: theme.Sizes.S14,
            marginTop: theme.Sizes.S10 / 3,
          }}
        >
          <SearchBarComponent
            placeholderTextColor={theme.Colors.gray}
            placeholder='Search services...'
            value={text}
            onChangeText={(value) => setText(value)}
          />
        </Container>
      </HeaderComponent>
    );
  };

  const renderBody = () => {
    return (
      <ScrollView>
        <KeyBoardAvoidingViewComponent>
          <Container center middle style={{ marginTop: theme.Sizes.S14 * 2 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Categories')}
            >
              <Card
                shadow
                row
                style={{
                  height: theme.Sizes.height / 7,
                  width: theme.Sizes.width / 1.2,
                  borderRadius: theme.Sizes.radius / 3,
                  marginBottom: theme.Sizes.S14,
                }}
              />
            </TouchableOpacity>
            <Card
              shadow
              row
              style={{
                height: theme.Sizes.height / 7,
                width: theme.Sizes.width / 1.2,
                borderRadius: theme.Sizes.radius / 3,
                marginBottom: theme.Sizes.S14,
              }}
            />
            <Card
              shadow
              row
              style={{
                height: theme.Sizes.height / 7,
                width: theme.Sizes.width / 1.2,
                borderRadius: theme.Sizes.radius / 3,
                marginBottom: theme.Sizes.S14,
              }}
            />
            <Card
              shadow
              row
              style={{
                height: theme.Sizes.height / 7,
                width: theme.Sizes.width / 1.2,
                borderRadius: theme.Sizes.radius / 3,
                marginBottom: theme.Sizes.S14,
              }}
            />
          </Container>
        </KeyBoardAvoidingViewComponent>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderBody()}
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
