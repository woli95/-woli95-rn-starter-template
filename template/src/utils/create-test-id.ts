export const createTestID = (screenName: string) => (componentName: string) =>
  `${screenName}:${componentName}`;
