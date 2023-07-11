import GeneralFunctions from '../general.js';

class ArrivalPhotosScreen {
    get TopBackButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');}
    get HamburgerMenuButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]');}
    get ArrivalPhotosText() {return $('//android.widget.TextView[@text="Arrival Photos"]');}

    //Photos Part

    get TakeAnotherPhotoButton() {return $('//android.widget.TextView[@text="Take Another Photo"]');}
    get NextButton() {return $('//android.widget.TextView[@text="Next"]');}

    //TopBackButton
    async TopBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TopBackButton)
    }
    async TopBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.TopBackButton)
    }
    //TopBackButton
    async HamburgerMenuButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.HamburgerMenuButton)
    }
    async HamburgerMenuButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.HamburgerMenuButton)
    }
    //ArrivalPhotosText
    async ArrivalPhotosText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ArrivalPhotosText)
    }
    async ArrivalPhotosText_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.ArrivalPhotosText)
    }

    //Photos Part

    //TakeAnotherPhotoButton
    async TakeAnotherPhotoButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TakeAnotherPhotoButton)
    }
    async TakeAnotherPhotoButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.TakeAnotherPhotoButton)
    }
    //NextButton
    async NextButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NextButton)
    }
    async NextButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.NextButton)
    }
}
export default new ArrivalPhotosScreen()