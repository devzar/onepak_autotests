import GeneralFunctions from '../general.js';

class CustomerApprovalScreen {
    get CustomerApprovalText() {return $('//android.widget.TextView[@text="Customer Approval"]');}
    get TotalLoadCountText() {return $('//android.widget.TextView[@text="Total Pallet Count:"]');}
    get TotalLoadCountNumber() {return $('//android.widget.TextView[@text="Total Pallet Count:"]/../android.widget.TextView[3]');}
    get TotalPieceCountText() {return $('//android.widget.TextView[@text="Total Piece Count:"]');}
    get TotalPieceCountNumber() {return $('//android.widget.TextView[@text="Total Piece Count:"]/../android.widget.TextView[3]');}

    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get NextButton() {return $('//android.widget.TextView[@text="Next"]');}

    //CustomerApprovalText
    async CustomerApprovalText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.CustomerApprovalText)
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
export default new CustomerApprovalScreen();