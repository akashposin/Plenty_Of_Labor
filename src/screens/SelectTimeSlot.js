import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Card,
  Container,
  FooterComponent,
  HeaderComponent,
  HorizontalLine,
} from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';

const SelectTimeSlot = ({navigation}) => {
  // Header
  const renderHeader = () => {
    return (
      <HeaderComponent row center>
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
          Select Time Slot
        </Text>
      </HeaderComponent>
    );
  };

  // Service Address Header
  const renderServiceAddress = () => {
    return (
      <Container
        flex={false}
        row
        color="gray2"
        style={{
          borderBottomWidth: moderateScale(0.5),
          borderColor: theme.Colors.gray,
        }}>
        <Container
          row
          style={{
            marginHorizontal: theme.Sizes.S10,
            marginTop: theme.Sizes.S10 / 3,
          }}>
          {/* Home Button */}
          <Container
            flex={false}
            style={{
              overflow: 'hidden',
            }}>
            <ButtonComponent
              style={{
                backgroundColor: theme.Colors.green,
                width: theme.Sizes.width / 7,
                height: theme.Sizes.height / 30,
                borderRadius: theme.Sizes.radius / 10,
              }}>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  fontSize: theme.Sizes.F10,
                  color: theme.Colors.white,
                }}>
                Home
              </Text>
            </ButtonComponent>
          </Container>

          <Container
            style={{
              marginHorizontal: theme.Sizes.S10 * 2,
            }}>
            <Text style={{...theme.Fonts.fontBold}}>Address for Service</Text>
            <Text
              style={{...theme.Fonts.fontSemiBold, color: theme.Colors.gray}}>
              Mayfair, Saskatoon, SK S7L 1V6, Canada
            </Text>
          </Container>

          {/* Change Button */}
          <Container
            flex={false}
            style={{
              overflow: 'hidden',
            }}>
            <ButtonComponent
              style={{
                backgroundColor: theme.Colors.gray,
                width: theme.Sizes.width / 7,
                height: theme.Sizes.height / 30,
                borderRadius: theme.Sizes.radius / 10,
              }}>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  fontSize: theme.Sizes.F10,
                  color: theme.Colors.white,
                }}>
                Change
              </Text>
            </ButtonComponent>
          </Container>
        </Container>
      </Container>
    );
  };

  //   Title
  const renderTitle = () => {
    return (
      <Container
        flex={false}
        style={{
          marginLeft: theme.Sizes.S10 * 2,
          marginVertical: theme.Sizes.S10,
        }}>
        <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
          When would you like this service?
        </Text>
      </Container>
    );
  };

  //   Days
  const renderDays = () => {
    return (
      <Container flex={false} middle center row>
        <Card
          middle
          style={{
            width: theme.Sizes.width / 4.5,
            height: theme.Sizes.height / 11,
            borderWidth: moderateScale(0.6),
            borderRadius: theme.Sizes.S10 / 2,
            marginRight: theme.Sizes.S14,
          }}>
          <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
            19
          </Text>
          <Text style={{...theme.Fonts.fontMedium, fontSize: theme.Sizes.F10}}>
            Today
          </Text>
        </Card>

        <Card
          middle
          style={{
            width: theme.Sizes.width / 4.5,
            height: theme.Sizes.height / 11,
            borderWidth: moderateScale(0.6),
            borderRadius: theme.Sizes.S10 / 2,
            marginRight: theme.Sizes.S14,
          }}>
          <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
            20
          </Text>
          <Text style={{...theme.Fonts.fontMedium, fontSize: theme.Sizes.F10}}>
            Tomorrow
          </Text>
        </Card>

        <Card
          middle
          style={{
            width: theme.Sizes.width / 4.5,
            height: theme.Sizes.height / 11,
            borderWidth: moderateScale(0.6),
            borderRadius: theme.Sizes.S10 / 2,
            marginRight: theme.Sizes.S14,
          }}>
          <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
            21
          </Text>
          <Text style={{...theme.Fonts.fontMedium, fontSize: theme.Sizes.F10}}>
            Friday
          </Text>
        </Card>
      </Container>
    );
  };

  //   Time
  const renderTimes = () => {
    return (
      <Container>
        <Container
          flex={false}
          middle
          center
          row
          style={{
            marginHorizontal: theme.Sizes.S14 * 2,
            marginTop: theme.Sizes.S14,
          }}>
          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              12:00 PM
            </Text>
          </Card>

          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              12:30 PM
            </Text>
          </Card>
        </Container>

        <Container
          flex={false}
          middle
          center
          row
          style={{
            marginHorizontal: theme.Sizes.S14 * 2,
            marginTop: theme.Sizes.S14,
          }}>
          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              1:00 PM
            </Text>
          </Card>

          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              1:30 PM
            </Text>
          </Card>
        </Container>

        <Container
          flex={false}
          middle
          center
          row
          style={{
            marginHorizontal: theme.Sizes.S14 * 2,
            marginTop: theme.Sizes.S14,
          }}>
          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              2:00 PM
            </Text>
          </Card>

          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              2:30 PM
            </Text>
          </Card>
        </Container>

        <Container
          flex={false}
          middle
          center
          row
          style={{
            marginHorizontal: theme.Sizes.S14 * 2,
            marginTop: theme.Sizes.S14,
          }}>
          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              3:00 PM
            </Text>
          </Card>

          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              3:30 PM
            </Text>
          </Card>
        </Container>

        <Container
          flex={false}
          middle
          center
          row
          style={{
            marginHorizontal: theme.Sizes.S14 * 2,
            marginTop: theme.Sizes.S14,
          }}>
          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              4:00 PM
            </Text>
          </Card>

          <Card
            middle
            center
            style={{
              width: theme.Sizes.width / 2.8,
              height: theme.Sizes.height / 11,
              borderWidth: moderateScale(0.6),
              borderRadius: theme.Sizes.S10 / 2,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              4:30 PM
            </Text>
          </Card>
        </Container>
      </Container>
    );
  };

  // Add your own day & time Button

  const renderAddDayTimeButton = () => {
    return (
      <Container style={{marginHorizontal: theme.Sizes.S14}}>
        <Container center middle>
          <Container
            style={{
              overflow: 'hidden',
              borderRadius: theme.Sizes.radius,
              marginTop: theme.Sizes.S14,
            }}>
            <ButtonComponent
              style={{
                backgroundColor: theme.Colors.orange,
                width: theme.Sizes.width / 1.8,
                height: theme.Sizes.height / 20,
              }}>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  fontSize: theme.Sizes.F12,
                  color: theme.Colors.white,
                }}>
                Add your own day & time
              </Text>
            </ButtonComponent>
          </Container>
        </Container>

        {/* horizontal line */}
        <HorizontalLine />
      </Container>
    );
  };

  //   Bottom Button
  const renderBottomButton = () => {
    return <FooterComponent>Continue</FooterComponent>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderServiceAddress()}
      <ScrollView>
        {renderTitle()}
        {renderDays()}
        {renderTimes()}
        {renderAddDayTimeButton()}
      </ScrollView>
      {renderBottomButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default SelectTimeSlot;
