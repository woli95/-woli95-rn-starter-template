import {LogLevels, Logger} from '@services/logger';
import {StoreMachineContext, translations} from '@services/store';
import {useCallback} from 'react';

export const useTranslations = () => {
  const currentLanguage = StoreMachineContext.useSelector(
    state => state.context.currentLanguage,
  );

  const t = useCallback(
    (key: string) => {
      const translated = translations[currentLanguage]?.[key];
      if (!translated) {
        Logger.log(
          LogLevels.WARN,
          `Missing translations for ${key}/${currentLanguage}`,
        );
        return key;
      }
      return translated;
    },
    [currentLanguage],
  );

  return t;
};
