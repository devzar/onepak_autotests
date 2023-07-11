import GeneralFunctions from '../general.js';

class InfoPalletPhotoScreen {
    get TopBackButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[8]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');}
    get HamburgerMenuButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[8]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]');}

    get PalletNumberText() {return $('//*[contains(@text,"Pallet: ")]');}
    get IllustrationImage() {return $('//android.widget.TextView[@text="The pallet label should be clearly visible in the first photo"]/preceding-sibling::android.widget.ImageView');}
    get InstructionText() {return $('//android.widget.TextView[@text="The pallet label should be clearly visible in the first photo"]');}
    get PhotoButton() {return $('//android.widget.TextView[@text="The pallet label should be clearly visible in the first photo"]/following-sibling::android.view.ViewGroup/android.widget.ImageView');}
    
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
    //PalletNumberText
    async PalletNumberText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PalletNumberText)
    }
    async PalletNumberText_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.PalletNumberText, expected_text)
    }
    //IllustrationImage
    async IllustrationImage_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.IllustrationImage)
    }
    //InstructionText
    async InstructionText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.InstructionText)
    }
    //PhotoButton
    async PhotoButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PhotoButton)
    }
    async PhotoButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.PhotoButton)
    }
}

export default new InfoPalletPhotoScreen();
