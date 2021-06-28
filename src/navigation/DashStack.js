import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Temporary from "../screens/Temporary";
import Login from "../screens/Login";
import Tabs from "./tabs";
import ForgotPassword from "../screens/ForgotPassword";
import Start from "../screens/Start";
import Register from "../screens/Register";
import SelectAddress from "../screens/SelectAddress";
import AddNewAddress from "../screens/AddNewAddress";
import SelectTimeSlot from "../screens/SelectTimeSlot";
import Bookings from "../screens/Bookings";
import BookingSummary from "../screens/BookingSummary";
import Confirmation from "../screens/Confirmation";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import BookingDetails from "../screens/BookingDetails";
import Chat from "../screens/Chat";
import BookingServiceProviderMapLocation from "../screens/BookingServiceProviderMapLocation";
import BookingMarkComplete from "../screens/BookingMarkComplete";
import BookingLeaveAReview from "../screens/BookingLeaveAReview";
import BookingSubmitAReview from "../screens/BookingSubmitAReview";
import BookingCompletedView from "../screens/BookingCompletedView";
import ServiceProviderProfile from "../screens/ServiceProviderProfile";
import Chat2 from "../screens/Chat2";
import ServiceProviderDashboard from "../screens/ServiceProviderDashboard";
import VerifyOTP21 from "../screens/VerifyOTP21";
import ServiceProviderDashboardToday from "../screens/ServiceProviderDashboardToday";
import ServiceProviderListOfReviews from "../screens/ServiceProviderListOfReviews";
import CustomerProfile from "../screens/CustomerProfile";
import Constants from "../components/styles/Constants";


const Stack = createStackNavigator();


/*
React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
        let userToken;

        try {
            userToken = await getAsyncStringData('userToken');
        } catch (e) {
            // Restoring token failed
        }

        // After restoring token, we may need to validate it in production apps

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
\
    bootstrapAsync().then(r => {});
}, []);
*/

export function DashStack({navigation}) {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={Constants.LOGIN}>
                <Stack.Screen name="Temporary" component={Temporary} />
                <Stack.Screen name={Constants.LOGIN} component={Login} />
                <Stack.Screen name={Constants.HOME} component={Tabs} />
                <Stack.Screen name={Constants.FORGOT_PASSWORD} component={ForgotPassword} />
                <Stack.Screen name={Constants.START} component={Start} />
                <Stack.Screen name={Constants.REGISTER} component={Register} />
                <Stack.Screen name={Constants.SELECT_ADDRESS} component={SelectAddress} />
                <Stack.Screen name={Constants.ADD_NEW_ADDRESS} component={AddNewAddress} />
                <Stack.Screen name={Constants.SELECT_TIME_SLOT} component={SelectTimeSlot} />
                <Stack.Screen name={Constants.BOOKINGS} component={Bookings} />
                <Stack.Screen name={Constants.BOOKING_SUMMARY} component={BookingSummary} />
                <Stack.Screen name={Constants.CONFIRMATION} component={Confirmation} />
                <Stack.Screen name={Constants.CATEGORIES} component={Categories} />
                <Stack.Screen name={Constants.PROFILE} component={Profile} />
                <Stack.Screen name={Constants.EDIT_PROFILE} component={EditProfile} />
                <Stack.Screen name={Constants.BOOKING_DETAILS} component={BookingDetails} />
                <Stack.Screen name={Constants.CHAT} component={Chat} />
                <Stack.Screen
                    name={Constants.BOOKING_SERVICE_PROVIDER_MAP_LOCATION}
                    component={BookingServiceProviderMapLocation}
                />
                <Stack.Screen
                    name={Constants.BOOKING_MARK_COMPLETE}
                    component={BookingMarkComplete}
                />
                <Stack.Screen
                    name={Constants.BOOKING_LEAVE_REVIEW}
                    component={BookingLeaveAReview}
                />
                <Stack.Screen
                    name={Constants.BOOKING_SUBMIT_REVIEW}
                    component={BookingSubmitAReview}
                />
                <Stack.Screen
                    name={Constants.BOOKING_COMPLETED_VIEW}
                    component={BookingCompletedView}
                />
                <Stack.Screen
                    name={Constants.SERVICE_PROVIDER_PROFILE}
                    component={ServiceProviderProfile}
                />
                <Stack.Screen name={Constants.CHAT_2} component={Chat2} />
                <Stack.Screen
                    name={Constants.SERVICE_PROVIDER_DASHBOARD}
                    component={ServiceProviderDashboard}
                />
                <Stack.Screen name={Constants.VERIFY_OTP_21} component={VerifyOTP21} />
                <Stack.Screen
                    name={Constants.SERVICE_PROVIDER_DASHBOARD_TODAY}
                    component={ServiceProviderDashboardToday}
                />
                <Stack.Screen
                    name={Constants.SERVICE_PROVIDER_LIST_REVIEWS}
                    component={ServiceProviderListOfReviews}
                />
                <Stack.Screen name={Constants.CUSTOMER_PROFILE} component={CustomerProfile} />
            </Stack.Navigator>
    );

}


//source = {require('../assets/ic_navigationBar.png')} >
