import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigation.types';
import {UnauthorizedNavigator} from '@modules/unauthorized';
import {commonStackNavigationOptions} from '@utils/navigation-helpers';
import {AppLoadingScreen} from '@modules/_shared';
import {StoreMachineContext} from '@services/store';

const RootStackNavigator = createStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const Navigation = () => {
  const {send} = StoreMachineContext.useActorRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => send({type: 'navigation-mounted'})}>
      <RootStackNavigator.Navigator
        screenOptions={commonStackNavigationOptions}>
        <RootStackNavigator.Screen
          name="AppLoadingScreen"
          component={AppLoadingScreen}
        />
        <RootStackNavigator.Screen
          name="UnauthorizedNavigator"
          component={UnauthorizedNavigator}
        />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};
