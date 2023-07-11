import GeneralFunctions from '../pages/general.js';

class SelectDispatchScreen {
    get TopBackButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');}
    get HamburgerMenuButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]');}
    
    get SelectDispatchText() {return $('//android.widget.TextView[@text="Please select a Dispatch #"]');}
    get PalletPickupWithPhoto() {return $('//android.widget.TextView[@text="1PalletPickup_yes"]');}
    get PalletPickupWithoutPhoto() {return $('//android.widget.TextView[@text="1PalletPickup_no"]');}
    get PalletizeAndPickupWithPhoto() {return $('//android.widget.TextView[@text="2PalletizePickup_yes"]');}
    get PalletizeAndPickupWithoutPhoto() {return $('//android.widget.TextView[@text="2PalletizePickup_no"]');}
    get PackAndPickupWithPhoto() {return $('//android.widget.TextView[@text="3PackPickup_yes"]');}
    get PackAndPickupWithoutPhoto() {return $('//android.widget.TextView[@text="3PackPickup_no"]');}

    get NoDispathes() {return $('//android.widget.TextView[@text="I do not see my dispatch ID listed"]');}

    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get SelectButton() {return $('//android.widget.TextView[@text="Select"]');}
    
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
    //SelectDispatchText
    async SelectDispatchText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.SelectDispatchText)
    }

    //PalletPickupWithPhoto
    async PalletPickupWithPhoto_Click() {
        await GeneralFunctions.ElementIsClicked(this.PalletPickupWithPhoto)
    }
    //PalletPickupWithoutPhoto
    async PalletPickupWithoutPhoto_Click() {
        await GeneralFunctions.ElementIsClicked(this.PalletPickupWithoutPhoto)
    }
    //PalletizeAndPickupWithoutPhoto
    async PalletizeAndPickupWithoutPhoto_Click() {
        await GeneralFunctions.ElementIsClicked(this.PalletizeAndPickupWithoutPhoto)
    }
    //PalletizeAndPickupWithPhoto
    async PalletizeAndPickupWithPhoto_Click() {
        await GeneralFunctions.ElementIsClicked(this.PalletizeAndPickupWithPhoto)
    }
    //PackAndPickupWithPhoto
    async PackAndPickupWithPhoto_Click() {
        await GeneralFunctions.ElementIsClicked(this.PackAndPickupWithPhoto)
    }
    //PackAndPickupWithoutPhoto
    async PackAndPickupWithoutPhoto_Click() {
        await GeneralFunctions.ElementIsClicked(this.PackAndPickupWithoutPhoto)
    }
    
    //NoDispathes
    async NoDispathes_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NoDispathes)
    }
    async NoDispathes_Click() {
        await GeneralFunctions.ElementIsClicked(this.NoDispathes)
    }
    //SelectButton
    async SelectButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.SelectButton)
    }
    async SelectButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.SelectButton)
    }
    //BottomBackButton
    async BottomBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.BottomBackButton)
    }
    async BottomBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.BottomBackButton)
    }
}
export default new SelectDispatchScreen();