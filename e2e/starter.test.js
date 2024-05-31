describe('Sticker App Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show the choose photo button', async () => {
    await expect(element(by.text('Choose a photo'))).toBeVisible();
  });

  it('should show the use photo button', async () => {
    await expect(element(by.text('Use this photo'))).toBeVisible();
  });

  it('should show the use photo button', async () => {
    await element(by.text('Use this photo')).tap();
    await expect(element(by.text('You pressed a button.'))).toBeVisible();
  });
});