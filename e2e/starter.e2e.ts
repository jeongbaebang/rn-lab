import { expect } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await element(by.text('goSetting')).tap();

    await expect(element(by.text('Settings'))).toBeVisible();
  });
});
