import {SafeAreaView} from 'react-native-safe-area-context';

export const WelcomeScreen = () => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1, backgroundColor: 'orange'}}
      edges={['top']}
    />
  );
};
