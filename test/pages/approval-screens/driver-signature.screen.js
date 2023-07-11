import GeneralFunctions from '../general.js';

class DriverSignatureScreen {
    get TotalItemsText() {return $('//android.widget.TextView[contains(@text, "Total Items: ")]');}
    get DriverSignatureText() {return $('//android.widget.TextView[@text="Driver Signature"]');}

    get DriverSugnatureInput() {return $('//android.widget.TextView[@text="Driver Signature"]/../android.view.ViewGroup[5]/android.widget.LinearLayout/android.view.View');}
    get DriverNameText() {return $('//android.widget.TextView[@text="Driver Signature"]/../android.view.ViewGroup[5]/android.widget.TextView');}

    get ClearButton() {return $('//android.widget.TextView[@text="Clear"]');}
    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get ApproveButton() {return $('//android.widget.TextView[@text="Approve"]');}
   
    get SignedText() {return $('//android.widget.TextView[@text="Signed"]');}
    get OKButton() {return $('//android.widget.TextView[@text="OK"]');}
    
    //TotalItemsText
    async TotalItemsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalItemsText)
    }
    async TotalItemsText_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.TotalItemsText, expected_text)
    }
    //DriverSignatureText
    async DriverSignatureText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DriverSignatureText)
    }

    //DriverSugnatureInput
    async DriverSugnatureInput_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DriverSugnatureInput)
    }
    async DriverSugnatureInput_IsSigned() {
        await GeneralFunctions.ElementIsSigned(this.DriverSugnatureInput)
    }
    //DriverNameText
    async DriverNameText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DriverNameText)
    }
    async DriverNameText_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.DriverNameText, expected_text)
    }

    //ClearButton
    async ClearButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ClearButton)
    }
    async ClearButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.ClearButton)
    }    
    //ApproveButton
    async ApproveButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ApproveButton)
    }
    async ApproveButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.ApproveButton)
    }
    //BottomBackButton
    async BottomBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.BottomBackButton)
    }
    async BottomBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.BottomBackButton)
    }

    //SignedText
    async SignedText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.SignedText)
    }
    async SignedText_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.SignedText)
    }
    //OKButton
    async OKButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.OKButton)
    }
    async OKButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.OKButton)
    }
    async OKButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.OKButton)
    }
}
export default new DriverSignatureScreen();