import GeneralFunctions from '../general.js';

class CustomerInfoScreen {
    get CustomerInfoText() {return $('//android.widget.TextView[@text="Customer Info"]');}
    get FirstNameInput() {return $('//android.widget.EditText[1]');}
    get LastNameInput() {return $('//android.widget.EditText[2]');}
    get EmailInput() {return $('//android.widget.EditText[3]');}
    get InvalidEmailText() {return $('//android.widget.TextView[@text="Invalid email address"]');}
    get TotalLoadCountText() {return $('//android.widget.TextView[@text="Total Pallet Count:"]');}
    get TotalLoadCountNumber() {return $('//android.widget.TextView[@text="Total Pallet Count:"]/following-sibling::android.widget.TextView');}
    get TotalPieceCountText() {return $('//android.widget.TextView[@text="Total Piece Count:"]');}
    get TotalPieceCountNumber() {return $('//android.widget.TextView[@text="Total Piece Count:"]/following-sibling::android.widget.TextView');}

    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get NextButton() {return $('//android.widget.TextView[@text="Next"]');}

    //CustomerApprovalText
    async CustomerInfoText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.CustomerInfoText)
    }
    //FirstNameInput
    async FirstNameInput_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.FirstNameInput)
    }
    async FirstNameInput_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.FirstNameInput, expected_text)
    }
    //LastNameInput
    async LastNameInput_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.LastNameInput)
    }
    async LastNameInput_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.LastNameInput, expected_text)
    }
    //EmailInput
    async EmailInput_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.EmailInput)
    }
    async EmailInput_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.EmailInput, expected_text)
    }
    //InvalidEmailText
    async InvalidEmailText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.InvalidEmailText)
    }
    async InvalidEmailText_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.InvalidEmailText)
    }

    //TotalLoadCountText
    async TotalLoadCountText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalLoadCountText)
    }
    //TotalLoadCountNumber
    async TotalLoadCountNumber_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalLoadCountNumber)
    }
    async TotalLoadCountNumber_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.TotalLoadCountNumber, expected_text)
    }
    //TotalPieceCountText
    async TotalPieceCountText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalPieceCountText)
    }
    //TotalPieceCountNumber
    async TotalPieceCountNumber_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalPieceCountNumber)
    }
    async TotalPieceCountNumber_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.TotalPieceCountNumber, expected_text)
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
}
export default new CustomerInfoScreen();