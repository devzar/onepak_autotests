class MobilePhoneScreen {
    get MobilePhoneText() {return $('//android.widget.TextView[@text="Mobile Phone"]');}
    get EnterNumberText() {return $('//android.widget.TextView[@text="Enter the 10-digit number of this phone."]');}
    get MobileInput() {return $('//android.widget.TextView[@index="3"]');}
    
    get Button0() {return $('//android.widget.TextView[@text="0"]');}
    get Button1() {return $('//android.widget.TextView[@text="1"]');}
    get Button2() {return $('//android.widget.TextView[@text="2"]');}
    get Button3() {return $('//android.widget.TextView[@text="3"]');}
    get Button4() {return $('//android.widget.TextView[@text="4"]');}
    get Button5() {return $('//android.widget.TextView[@text="5"]');}
    get Button6() {return $('//android.widget.TextView[@text="6"]');}
    get Button7() {return $('//android.widget.TextView[@text="7"]');}
    get Button8() {return $('//android.widget.TextView[@text="8"]');}
    get Button9() {return $('//android.widget.TextView[@text="9"]');}
    get RemoveButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[11]/android.view.View');}
    
    get BackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get NextButton() {return $('//android.widget.TextView[@text="Next"]');}

    async MobilePhoneText_Exists() {
        await this.MobilePhoneText.waitForExist({timeout: 5000})
    }
    async EnterNumberText_Exists() {
        await this.EnterNumberText.waitForExist({timeout: 5000})
    }
    async MobileInput_Empty() {
        await this.MobileInput.waitForExist({timeout: 5000})
        await expect(this.MobileInput).toHaveText("Enter Phone #")
    }
    async CloseNotificationButton_Click() {
        await this.CloseNotificationButton.waitForExist({timeout: 5000})
        await this.CloseNotificationButton.click()
    }
    async BackButton_Click() {
        await this.BackButton.waitForExist({timeout: 5000})
        await this.BackButton.click()
    }
    async NextButton_Click() {
        await this.NextButton.waitForExist({timeout: 5000})
        await this.NextButton.click()
    }

    async EnterPhoneNumberWithJob() {
        const inputElement = await $('//android.widget.TextView[@index="3"]')
        await expect(inputElement).toHaveText("Enter Phone #")
        //await driver.executeScript("arguments[0].setText('111');", inputElement)        
        await expect(this.MobileInput).toHaveText("Enter Phone #")
        await this.Button4.click()
        await this.Button5.click()
        await this.Button6.click()

        await this.Button1.click()
        await this.Button2.click()
        await this.Button3.click()

        await this.Button7.click()
        await this.Button8.click()
        await this.Button9.click()
        await this.Button0.click()
        await expect(this.MobileInput).toHaveText("456-123-7890") 
    }
}
export default new MobilePhoneScreen();