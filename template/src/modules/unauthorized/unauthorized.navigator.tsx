import {createStackNavigator} from '@react-navigation/stack';
import {
  UnauthorizedNavigatorProps,
  UnauthorizedStackParamList,
} from './unauthorized.types';
import {WelcomeScreen} from './screens';
import {commonStackNavigationOptions} from '@utils/navigation-helpers';

const StackNavigator = createStackNavigator<UnauthorizedStackParamList>();

export const UnauthorizedNavigator = ({}: UnauthorizedNavigatorProps) => (
  <StackNavigator.Navigator screenOptions={commonStackNavigationOptions}>
    <StackNavigator.Screen name="Welcome" component={WelcomeScreen} />
  </StackNavigator.Navigator>
);
