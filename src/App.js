import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {theme} from './constants';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import {DashStack} from "./navigation/DashStack";


const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={theme.Colors.blue2} translucent />
      <NavigationContainer>
          <DashStack/>
          <Toast ref={ref => Toast.setRef(ref)} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
