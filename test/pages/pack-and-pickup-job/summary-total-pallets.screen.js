import GeneralFunctions from '../general.js';

class TotalPalletsScreen {
    get TopBackButton() {return $('//android.widget.TextView[contains(@text,"Total Pallets: ")]/preceding-sibling::android.view.ViewGroup/android.widget.ImageView');}
    get HamburgerMenuButton() {return $('//android.widget.TextView[contains(@text,"Total Pallets: ")]/following-sibling::android.view.ViewGroup/android.widget.ImageView');}
    get TotalPalletsText() {return $('//android.widget.TextView[contains(@text,"Total Pallets: ")]');}
    get NotificationNoPalletsText() {return $('//android.widget.TextView[@text="You do not have any pallets."]');}

    get FirstPalletNumber() {return $('//android.widget.TextView[@text="1"]');}
    get FirstPalletPhotosNumberText() {return $(`//android.widget.TextView[@text="1"]/../android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView`);}
    get RemoveFirstPalletButton() {return $(`//android.widget.TextView[@text="1"]/../android.view.ViewGroup/android.widget.TextView[@text="Remove"]`);}
 
    get SecondPalletNumber() {return $('//android.widget.TextView[@text="2"]');}
    get RemoveSecondPalletButton() {return $(`//android.widget.TextView[@text="2"]/../android.view.ViewGroup/android.widget.TextView[@text="Remove"]`);}

    get DeletePalletText() {return $('//*[contains(@text,"Are you sure you want to remove pallet #")]');}
    get CancelDeletePalletButton() {return $('//android.widget.TextView[@text="Cancel"]');}
    get ConfirmDeletePalletButton() {return $('//android.widget.TextView[@text="Delete"]');}
    
    get AddAnotherPalletButton() {return $('//android.widget.TextView[@text="Add Another Pallet"]');}

    get NextPalletButton() {return $('//android.widget.TextView[@text="Next Pallet"]');}
    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get DoneButton() {return $('//android.widget.TextView[@text="Done"]');}


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
    
    //TotalPalletsText
    async TotalPalletsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalPalletsText)
    }
    async TotalPalletsText_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.TotalPalletsText, expected_text)
    }
    //NotificationNoPalletsText
    async NotificationNoPalletsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NotificationNoPalletsText)
    }
    async NotificationNoPalletsText_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.NotificationNoPalletsText)
    }

    //FirstPalletNumber
    async FirstPalletNumber_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.FirstPalletNumber)
    }
    async FirstPalletNumber_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.FirstPalletNumber)
    }
    async FirstPalletPhotosNumberText_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.FirstPalletPhotosNumberText, expected_text)
    }    
    async RemoveFirstPalletButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.RemoveFirstPalletButton)
    }
    //SecondPalletNumber
    async SecondPalletNumber_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.SecondPalletNumber)
    }
    async SecondPalletNumber_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.SecondPalletNumber)
    }
    async RemoveSecondPalletButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.RemoveSecondPalletButton)
    }

    //DeletePalletText
    async DeletePalletText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DeletePalletText)
    }
    async DeletePalletText_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.DeletePalletText, expected_text)
    }
    //CancelDeletePalletButton
    async CancelDeletePalletButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.CancelDeletePalletButton)
    }
    //ConfirmDeletePalletButton
    async ConfirmDeletePalletButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.ConfirmDeletePalletButton)
    }

    //AddAnotherPalletButton
    async AddAnotherPalletButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.AddAnotherPalletButton)
    }
    async AddAnotherPalletButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.AddAnotherPalletButton)
    }
    //NextPalletButton
    async NextPalletButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NextPalletButton)
    }
    async NextPalletButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.NextPalletButton)
    }
    async NextPalletButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.NextPalletButton)
    }
    //BottomBackButton
    async BottomBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.BottomBackButton)
    }
    async BottomBackButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.BottomBackButton)
    }
    async BottomBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.BottomBackButton)
    }
    //DoneButton
    async DoneButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DoneButton)
    }
    async DoneButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.DoneButton)
    }
    async DoneButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.DoneButton)
    }
}
export default new TotalPalletsScreen()
