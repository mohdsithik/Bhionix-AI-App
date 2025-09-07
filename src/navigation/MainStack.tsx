import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './Routes';
import { ScreenName } from './ScreenName';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import Login from '../screens/login/Login';
import Walkthrough from '../screens/walkthrough/Walkthrough';
import Register from '../screens/register/Register';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <RootStack.Navigator initialRouteName={ScreenName.SPLASHSCREEN}>
      <RootStack.Screen
        name={ScreenName.SPLASHSCREEN}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={ScreenName.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={ScreenName.WALKTHROUGH}
        component={Walkthrough}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name={ScreenName.REGISTER}
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
export default MainStack;
