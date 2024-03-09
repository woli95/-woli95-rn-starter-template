import {createTestID} from './create-test-id';

describe('utils/create-test-id.ts', () => {
  const testScreenName = 'TestScreen';
  const testElementName = 'TestElement';

  it('should return valid value', () => {
    const testID = createTestID(testScreenName);
    expect(testID(testElementName)).toBe(
      testScreenName + ':' + testElementName,
    );
  });
});
