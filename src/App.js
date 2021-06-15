import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import Tabs from './navigation/tabs';
import Login from './screens/Login';
import Looking from './screens/Looking';
import VerifyOTP from './screens/VerifyOTP';
import SelectAddress from './screens/SelectAddress';
import AddNewAddress from './screens/AddNewAddress';
import SelectTimeSlot from './screens/SelectTimeSlot';
import BookingSummary from './screens/BookingSummary';
import Confirmation from './screens/Confirmation';
import Categories from './screens/Categories';
import EditProfile from './screens/EditProfile';
import BookingDetails from './screens/BookingDetails';
import Chat from './screens/Chat';
import BookingServiceProviderMapLocation from './screens/BookingServiceProviderMapLocation';
import BookingMarkComplete from './screens/BookingMarkComplete';
import BookingLeaveAReview from './screens/BookingLeaveAReview';
import BookingSubmitAReview from './screens/BookingSubmitAReview';
import BookingCompletedView from './screens/BookingCompletedView';
import ServiceProviderProfile from './screens/ServiceProviderProfile';
import Chat2 from './screens/Chat2';
import ServiceProviderDashboard from './screens/ServiceProviderDashboard';
import VerifyOTP21 from './screens/VerifyOTP21';
import ServiceProviderDashboardToday from './screens/ServiceProviderDashboardToday';
import ServiceProviderListOfReviews from './screens/ServiceProviderListOfReviews';
import CustomerProfile from './screens/CustomerProfile';
import Temporary from './screens/Temporary';
import Bookings from './screens/Bookings';
import Profile from './screens/Profile';
import {theme} from './constants';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={theme.Colors.blue2} translucent />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Temporary'}>
          <Stack.Screen name="Temporary" component={Temporary} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Looking" component={Looking} />
          <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
          <Stack.Screen name="SelectAddress" component={SelectAddress} />
          <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
          <Stack.Screen name="SelectTimeSlot" component={SelectTimeSlot} />
          <Stack.Screen name="Bookings" component={Bookings} />
          <Stack.Screen name="BookingSummary" component={BookingSummary} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="BookingDetails" component={BookingDetails} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="BookingServiceProviderMapLocation"
            component={BookingServiceProviderMapLocation}
          />
          <Stack.Screen
            name="BookingMarkComplete"
            component={BookingMarkComplete}
          />
          <Stack.Screen
            name="BookingLeaveAReview"
            component={BookingLeaveAReview}
          />
          <Stack.Screen
            name="BookingSubmitAReview"
            component={BookingSubmitAReview}
          />
          <Stack.Screen
            name="BookingCompletedView"
            component={BookingCompletedView}
          />
          <Stack.Screen
            name="ServiceProviderProfile"
            component={ServiceProviderProfile}
          />
          <Stack.Screen name="Chat2" component={Chat2} />
          <Stack.Screen
            name="ServiceProviderDashboard"
            component={ServiceProviderDashboard}
          />
          <Stack.Screen name="VerifyOTP21" component={VerifyOTP21} />
          <Stack.Screen
            name="ServiceProviderDashboardToday"
            component={ServiceProviderDashboardToday}
          />
          <Stack.Screen
            name="ServiceProviderListOfReviews"
            component={ServiceProviderListOfReviews}
          />
          <Stack.Screen name="CustomerProfile" component={CustomerProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
