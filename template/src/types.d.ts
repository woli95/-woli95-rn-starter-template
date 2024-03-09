export {};

declare global {
  type TestIDReturnType = (elementName: string) => string;
  type VoidFunction = () => void;
  type TFunction = (key: string) => void;
}
