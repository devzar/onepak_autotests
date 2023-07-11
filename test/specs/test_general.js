import StartScreen from '../pages/driver-app.screen.js';
import MobilePhoneScreen from '../pages/mobile-phone.screen.js';

import SelectDispatchScreen from '../pages/select-dispatch.screen.js';
import ThisJobIsScreen from '../pages/this-job-is.screen.js';
import NumberOfPalletsScreen from '../pages/number-of-pallets.screen.js';
import PalletCountScreen from '../pages/pallet-count.screen.js';
import CustomerApprovalScreen from '../pages/customer-approval.screen.js';

describe('GENERAL TESTS', () => {
    afterEach(async () => {
        //await driver.resetApp();
        await driver.closeApp();
        await driver.launchApp();
    })
    it('activity', async () => {
        await driver.startActivity("com.onepak.onepak", "com.onepak.onepak.MainActivity");

        await driver.pause(5000);
    })
    it('Checking mobile phone input', async () => {
        //starting a job
        await expect(StartScreen.StartJobButton).toBeExisting()
        await StartScreen.StartJobButton.click()

        await MobilePhoneScreen.MobilePhoneText.waitForExist({timeout: 10000})

        //assertion
        //Header texts are present
        await expect(MobilePhoneScreen.MobilePhoneText).toBeExisting()
        await expect(MobilePhoneScreen.EnterNumberText).toBeExisting()
        //Btns are present
        await MobilePhoneScreen.CloseNotificationButtone.click()
        //await expect(MobilePhoneScreen.BackButton).toBeExisting()
        //await expect(MobilePhoneScreen.NextButton).toBeExisting()

        //Checking the input
        await expect(MobilePhoneScreen.MobileInput).toHaveText("Enter Phone #")
        
        //Leave the input field blank

        //Can't start the phone with 0
        await MobilePhoneScreen.Button0.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("Enter Phone #")

        //Enter less than 10 digits
        await MobilePhoneScreen.Button1.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("1")

        await MobilePhoneScreen.Button2.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("12")

        await MobilePhoneScreen.Button3.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-")

        await MobilePhoneScreen.Button4.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-4")

        await MobilePhoneScreen.Button5.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-45")

        await MobilePhoneScreen.Button6.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-456-")

        await MobilePhoneScreen.Button7.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-456-7")

        await MobilePhoneScreen.Button8.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-456-78")

        await MobilePhoneScreen.Button9.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-456-789")

        //Enter 10 digits
        await MobilePhoneScreen.Button0.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-456-7890")

        //Enter more than 10 digits
        await MobilePhoneScreen.Button1.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-456-7890")

        //Remove button works
        await MobilePhoneScreen.RemoveButton.click()
        await expect(MobilePhoneScreen.MobileInput).toHaveText("123-456-789")
    })
})