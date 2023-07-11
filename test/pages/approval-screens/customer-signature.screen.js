import GeneralFunctions from '../general.js';

class CustomerSignatureScreen {
    get TotalItemsText() {return $('//android.widget.TextView[contains(@text, "Total Items: ")]');}
    get CustomerSignatureText() {return $('//android.widget.TextView[@text="Customer Signature"]');}

    get CustomerSugnatureInput() {return $('//android.widget.TextView[@text="Customer Signature"]/../android.view.ViewGroup[5]/android.widget.LinearLayout/android.view.View');}
    get CustomerNameText() {return $('//android.widget.TextView[@text="Customer Signature"]/../android.view.ViewGroup[5]/android.widget.TextView');}

    get ClearButton() {return $('//android.widget.TextView[@text="Clear"]');}
    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get NextButton() {return $('//android.widget.TextView[@text="Next"]');}
   
    get SignedText() {return $('//android.widget.TextView[@text="Signed"]');}
    get OKButton() {return $('//android.widget.TextView[@text="OK"]');}
    
    //TotalItemsText
    async TotalItemsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalItemsText)
    }
    async TotalItemsText_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.TotalItemsText, expected_text)
    }
    //CustomerSignatureText
    async CustomerSignatureText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.CustomerSignatureText)
    }

    //CustomerSugnatureInput
    async CustomerSugnatureInput_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.CustomerSugnatureInput)
    }
    async CustomerSugnatureInput_IsSigned() {
        await GeneralFunctions.ElementIsSigned(this.CustomerSugnatureInput)
    }
    //CustomerNameText
    async CustomerNameText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.CustomerNameText)
    }
    async CustomerNameText_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.CustomerNameText, expected_text)
    }

    //ClearButton
    async ClearButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ClearButton)
    }
    async ClearButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.ClearButton)
    }    
    //NextButton
    async NextButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NextButton)
    }
    async NextButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.NextButton)
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
export default new CustomerSignatureScreen();