import {SupportedLanguages} from '.';
import {SupportedThemes} from './features/theme/theme.type';

export type StoreContext = {
  currentTheme: SupportedThemes;
  currentLanguage: SupportedLanguages;
  isInitialized: boolean;
  isNavigationMounted: boolean;
};
