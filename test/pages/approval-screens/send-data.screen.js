import GeneralFunctions from '../general.js';

class SendDataScreen {
    get SendDataText() {return $('//android.widget.TextView[@text="Ready to send data"]');}
    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get SendButton() {return $('//android.widget.TextView[@text="Send"]');}   

    get AllSetText() {return $('//android.widget.TextView[@text="All Set!"]');}
    get IAmDoneButton() {return $(`//android.widget.TextView[@text="I'm Done"]`);}
    
    //SendDataText
    async SendDataText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.SendDataText)
    }
    //SendButton
    async SendButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.SendButton)
    }
    async SendButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.SendButton)
    }
    //BottomBackButton
    async BottomBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.BottomBackButton)
    }
    async BottomBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.BottomBackButton)
    }

    //AllSetText
    async AllSetText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.AllSetText)
    }
    //IAmDoneButton
    async IAmDoneButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.IAmDoneButton)
    }
    async IAmDoneButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.IAmDoneButton)
    }
}
export default new SendDataScreen();