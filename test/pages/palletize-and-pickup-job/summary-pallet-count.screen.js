import GeneralFunctions from '../general.js';

class PalletCountScreen {
    get TopBackButton() {return $('//android.widget.TextView[@text="Pallet Count"]/ancestor::android.widget.ScrollView/preceding-sibling::android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView');}
    get HamburgerMenuButton() {return $('//android.widget.TextView[@text="Pallet Count"]/ancestor::android.widget.ScrollView/preceding-sibling::android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView');}

    get PalletCountText() {return $('//android.widget.TextView[@text="Pallet Count"]');}
    get PalletsImage() {return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView');}
    get TotalPalletsText() {return $('//android.widget.TextView[@text="Total Pallets:"]');}
    get TotalPalletsNumber() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView');}

    get NextButton() {return $('//android.widget.TextView[@text="Next"]');}
    get AddPalletsButton() {return $('//android.widget.TextView[@text="Add Pallets"]');}


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

    //PalletCountText
    async PalletCountText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PalletCountText)
    }
    //PalletsImage
    async PalletsImage_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PalletsImage)
    }
    //TotalPalletsText
    async TotalPalletsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalPalletsText)
    }
    //TotalPalletsNumber
    async TotalPalletsNumber_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalPalletsNumber)
    }
    async TotalPalletsNumber_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.TotalPalletsNumber, expected_text)
    }
    
    //NextButton
    async NextButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NextButton)
    }
    async NextButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.NextButton)
    }
    //AddPalletsButton
    async AddPalletsButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.AddPalletsButton)
    }
    async AddPalletsButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.AddPalletsButton)
    }
}
export default new PalletCountScreen();
