import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { theme } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Card,
  Container,
  HeaderComponent,
  HorizontalLine,
  SearchBarComponent,
  TextInputComponent,
} from '../components';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from 'react-native-size-matters';

const Categories = ({ navigation }) => {
  const [text, setText] = React.useState('');

  const renderHeader = () => {
    return (
      <HeaderComponent style={{ height: theme.Sizes.height / 8.5 }}>
        <Container flex={false} row center>
          <ButtonComponent
            style={{
              height: theme.Sizes.height / 22,
              width: theme.Sizes.width / 14,
              marginHorizontal: theme.Sizes.S14,
            }}
            // onPress
          >
            <MaterialIcons
              name='keyboard-arrow-left'
              size={moderateScale(24)}
              color={theme.Colors.white}
            />
          </ButtonComponent>

          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F14,
              color: theme.Colors.white,
            }}
          >
            Cut grass
          </Text>
        </Container>
        <Container middle>
          <SearchBarComponent
            placeholderTextColor={theme.Colors.gray}
            placeholder='Enter address (Where do you want services)'
            value={text}
            onChangeText={(value) => setText(value)}
          />
        </Container>
      </HeaderComponent>
    );
  };

  const renderBody = () => {
    return (
      <Container color='gray2' center middle>
        <Card
          style={{
            width: theme.Sizes.width / 1.2,
            height: theme.Sizes.S14 * 8,
            position: 'absolute',
            top: moderateScale(350),
            borderRadius: theme.Sizes.S10 / 1.5,
          }}
        >
          <Container flex={false} style={{ top: moderateScale(35) }}>
            {/* horizontal line */}
            <HorizontalLine style={{ marginBottom: theme.Sizes.S10 / 2 }} />

            <Container flex={false} row>
              <Container>
                {/* name */}
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}
                >
                  Wayne
                </Text>
                <Entypo
                  name='star'
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
                  }}
                >
                  <ButtonComponent
                    style={{
                      height: theme.Sizes.height / 30,
                      width: theme.Sizes.width / 4.5,
                    }}
                  >
                    <Text
                      style={{
                        ...theme.Fonts.fontSemiBold,
                        color: theme.Colors.white,
                        letterSpacing: 0,
                        textAlign: 'center',
                      }}
                    >
                      View Details
                    </Text>
                  </ButtonComponent>
                </Container>
              </Container>
            </Container>
          </Container>
        </Card>
      </Container>
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

export default Categories;
