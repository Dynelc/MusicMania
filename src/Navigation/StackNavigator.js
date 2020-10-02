import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Level1 from '../Features/Level1/Level1';
import StartScreen from '../Features/StartScreen/StartScreen';
import FailedScreen from '../Features/FailedScreen/FailedScreen';
import SuccessScreen from '../Features/SuccessScreen/SuccessScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Level1"
          component={Level1}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="FailedScreen"
          component={FailedScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
