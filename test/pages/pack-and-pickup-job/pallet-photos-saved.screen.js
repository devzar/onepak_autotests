import GeneralFunctions from '../general.js';

class PalletPhotosSavedScreen {
    get PalletPhotosSavedText() {return $('//android.widget.TextView[@text="1"]');}
    get ContinueButton() {return $('//android.widget.TextView[@text="Continue"]');}
    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}

    //PalletPhotosSavedText
    async PalletPhotosSavedText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalPalletsText)
    }

    //ContinueButton
    async ContinueButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ContinueButton)
    }
    async ContinueButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.ContinueButton)
    }
    //BottomBackButton
    async BottomBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.BottomBackButton)
    }
    async BottomBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.BottomBackButton)
    }
}
export default new PalletPhotosSavedScreen()
