import {useTheme} from '@hooks/use-theme.hook';
import {Theme} from '@services/store';

export function withTheme<WrappedComponentProps>(
  WrappedComponent: (
    props: WrappedComponentProps & {
      theme: Theme;
    },
  ) => JSX.Element,
) {
  const ComponentWithTheme = (props: WrappedComponentProps) => {
    const theme = useTheme();

    return <WrappedComponent {...props} theme={theme} />;
  };
  return ComponentWithTheme;
}
