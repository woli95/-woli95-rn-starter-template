import {StoreMachineContext, theme} from '@services/store';
import {useMemo} from 'react';

export const useTheme = () => {
  const currentTheme = StoreMachineContext.useSelector(
    state => state.context.currentTheme,
  );

  return useMemo(() => theme[currentTheme], [currentTheme]);
};
