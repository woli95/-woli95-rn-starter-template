import {assign, fromPromise, setup} from 'xstate';
import {StoreContext} from './store.types';
import {SupportedThemes} from './features/theme/theme.type';
import {navigationRef} from '@navigation/navigation';
import {StackActions} from '@react-navigation/native';
import {RootStackParamList} from '@navigation/navigation.types';
import {SupportedLanguages} from '.';

export const storeMachine = setup({
  types: {
    context: {} as StoreContext,
    events: {} as
      | {type: 'change-theme'; payload: SupportedThemes}
      | {type: 'change-language'; payload: SupportedLanguages}
      | {type: 'navigation-mounted'; payload?: undefined},
  },
  actors: {
    initialize: fromPromise(() => {
      return new Promise(r => setTimeout(() => r({asd: 1}), 2000));
    }),
  },
  actions: {
    navigateToFlow: () => {
      navigationRef.current?.dispatch(
        StackActions.replace(
          'UnauthorizedNavigator' as keyof RootStackParamList,
        ),
      );
    },
  },
  guards: {
    isDifferentThanActualLanguage: ({context, event}) =>
      event.payload !== context.currentTheme,
    isDifferentThanActualTheme: ({context, event}) =>
      event.payload !== context.currentLanguage,
    isStoreReady: ({context}) =>
      context.isInitialized && context.isNavigationMounted,
  },
}).createMachine({
  id: 'store-machine',
  initial: 'INITIALIZING',
  context: {
    currentTheme: 'DEFAULT',
    isNavigationMounted: false,
    isInitialized: false,
    currentLanguage: 'EN',
  },
  states: {
    INITIALIZING: {
      invoke: {
        src: 'initialize',
        onDone: {
          actions: assign({isInitialized: true}),
        },
      },
      on: {
        'navigation-mounted': {actions: assign({isNavigationMounted: true})},
      },
      always: {
        guard: 'isStoreReady',
        target: 'IDLE',
      },
      exit: 'navigateToFlow',
    },
    IDLE: {
      on: {
        'change-language': {
          guard: 'isDifferentThanActualLanguage',
          actions: assign(({event}) => ({
            currentLanguage: event.payload,
          })),
        },
        'change-theme': {
          guard: 'isDifferentThanActualTheme',
          actions: assign(({event}) => ({
            currentTheme: event.payload,
          })),
        },
      },
    },
  },
});
