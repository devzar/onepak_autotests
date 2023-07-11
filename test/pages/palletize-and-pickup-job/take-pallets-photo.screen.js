import GeneralFunctions from '../general.js';

class TakeArrivalPhotoScreen {
    get TopBackButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[9]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');}
    get AllowPhotosButton() {return $('//android.widget.Button[@text="While using the app"]');}
    get TakeAPhotoButton() {return $('//android.widget.TextView[@text="Take Photo"]');}

    get DeletePhotoButton() {return $('//android.widget.TextView[@text="Delete Photo"]');}
    get AddPhotoButton() {return $('//android.widget.TextView[@text="Add Photo"]');}
    get ContinueButton() {return $('//android.widget.TextView[@text="Continue"]');}

    //TopBackButton
    async TopBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TopBackButton)
    }
    async TopBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.TopBackButton)
    }
    //AllowPhotosButton
    async AllowPhotosButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.AllowPhotosButton)
    }
    async AllowPhotosButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.AllowPhotosButton)
    }
    //TakeAPhotoButton
    async TakeAPhotoButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TakeAPhotoButton)
    }
    async TakeAPhotoButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.TakeAPhotoButton)
    }
    async TakeAPhotoButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.TakeAPhotoButton)
    }
    //DeletePhotoButton
    async DeletePhotoButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DeletePhotoButton)
    }
    async DeletePhotoButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.DeletePhotoButton)
    }
    async DeletePhotoButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.DeletePhotoButton)
    }
    //AddPhotoButton
    async AddPhotoButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.AddPhotoButton)
    }
    async AddPhotoButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.AddPhotoButton)
    }
    async AddPhotoButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.AddPhotoButton)
    }
    //ContinueButton
    async ContinueButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ContinueButton)
    }
    async ContinueButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.ContinueButton)
    }
    async ContinueButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.ContinueButton)
    }
}

export default new TakeArrivalPhotoScreen();