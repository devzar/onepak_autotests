import GeneralFunctions from '../general.js';

class ArrivalPhotosSavedScreen {
    get ArrivalPhotosSavedText() {return $('//android.widget.TextView[@text="Arrival Photos Saved"]');}

    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get NextButton() {return $('//android.widget.TextView[@text="Next"]');}

    //ArrivalPhotosSavedText
    async ArrivalPhotosSavedText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ArrivalPhotosSavedText)
    }
    async ArrivalPhotosSavedText_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.ArrivalPhotosSavedText)
    }

    //BottomBackButton
    async BottomBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.BottomBackButton)
    }
    async BottomBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.BottomBackButton)
    }
    //NextButton
    async NextButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NextButton)
    }
    async NextButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.NextButton)
    }
}
export default new ArrivalPhotosSavedScreen()