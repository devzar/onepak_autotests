import GeneralFunctions from '../general.js';

class InfoPackAndWrapPalletsScreen {
    get TopBackButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');}
    get HamburgerMenuButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]');}

    get IllustrationImage() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView');}
    get PackAndWrapPalletsText() {return $('//android.widget.TextView[@text="Pack and wrap each pallet"]');}
    get ContinueButton() {return $('//android.widget.TextView[@text="Continue"]');}
    
    //TopBackButton
    async TopBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TopBackButton)
    }
    async TopBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.TopBackButton)
    }
    //HamburgerMenuButton
    async HamburgerMenuButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.HamburgerMenuButton)
    }
    async HamburgerMenuButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.HamburgerMenuButton)
    }
    //IllustrationImage
    async IllustrationImage_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.IllustrationImage)
    }
    //PackAndWrapPalletsText
    async PackAndWrapPalletsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PackAndWrapPalletsText)
    }
    //PhotoButton
    async ContinueButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ContinueButton)
    }
    async ContinueButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.ContinueButton)
    }
}

export default new InfoPackAndWrapPalletsScreen();
