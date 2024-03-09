import {useTranslations} from '@hooks/use-translations.hook';

export function withTranslation<WrappedComponentProps>(
  WrappedComponent: (
    props: WrappedComponentProps & {
      t: TFunction;
    },
  ) => JSX.Element,
) {
  const ComponentWithTheme = (props: WrappedComponentProps) => {
    const t = useTranslations();

    return <WrappedComponent {...props} t={t} />;
  };
  return ComponentWithTheme;
}
