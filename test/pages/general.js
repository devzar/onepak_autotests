import StartScreen from '../pages/start.screen.js';

class GeneralFunctions {
  get CloseNotificationButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]');}

    async LaunchAppWithSeveralAttempts() {
        const maxAttempts = 5;
        let attempts = 0;
        let appOpened = false;
    
        while (!appOpened && attempts < maxAttempts) {
          try {
            await driver.launchApp();
            await driver.pause(5000)
            await StartScreen.DriverAppText_IsPresent()
            appOpened = true;
            await driver.pause(500)

          } catch (err) {
            console.log(`Attempt ${attempts+1} to launch app failed`);
            attempts++;
          }
        }
    
        if (!appOpened) {
          throw new Error(`Could not launch app after ${maxAttempts} attempts`);
        }
    }
    async ElementIsPresentOnTheScreen(element_to_be_present, time_to_wait_for_the_element) {
        if (time_to_wait_for_the_element === null) {
            time_to_wait_for_the_element = 5000;
          }
        await element_to_be_present.waitForExist({timeout: time_to_wait_for_the_element})
        await expect(element_to_be_present).toBeDisplayed()
    }
    async ElementIsNotPresentOnTheScreen(element_not_to_be_present) {
        await expect(element_not_to_be_present).not.toBeDisplayed()
    }
    async ElementHasText(element_to_have_text, expected_text, time_to_wait_for_the_element) {
        if (time_to_wait_for_the_element === null) {
            time_to_wait_for_the_element = 5000;
          }
        await element_to_have_text.waitForExist({timeout: time_to_wait_for_the_element})
        await expect(element_to_have_text).toHaveText(expected_text)
    }
    async ElementIsClicked(element_to_click, time_to_wait_for_the_element) {
        if (time_to_wait_for_the_element === null) {
            time_to_wait_for_the_element = 5000;
          }
        await element_to_click.waitForExist({timeout: time_to_wait_for_the_element})
        await element_to_click.click()
    }
    async ElementIsSigned(element_to_sign) {
      const elementLocation = await element_to_sign.getLocation()
      const elementSize = await element_to_sign.getSize()
      const elementCenterX = elementLocation.x + elementSize.width / 2
      const elementCenterY = elementLocation.y + elementSize.height / 2
      
      await driver.touchAction([
        { action: 'press', x: elementCenterX - 300, y: elementCenterY - 100 },
        { action: 'moveTo', x: elementCenterX + 300, y: elementCenterY + 100 },
        'release'
    ])

    }
}

export default new GeneralFunctions();