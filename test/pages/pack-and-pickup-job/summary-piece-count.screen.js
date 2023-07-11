import GeneralFunctions from '../general.js';

class PieceCountScreen {
    get TopBackButton() {return $('//android.widget.TextView[@text="Piece Count"]/preceding-sibling::android.view.ViewGroup/android.widget.ImageView');}
    get HamburgerMenuButton() {return $('//android.widget.TextView[@text="Piece Count"]/following-sibling::android.view.ViewGroup/android.widget.ImageView');}
    
    get PieceCountText() {return $('//android.widget.TextView[@text="Piece Count"]');}
    
    get DesktopText() {return $('//android.widget.TextView[@text="Desktop"]');}
    get DesktopNumber() {return $('//android.widget.TextView[@text="Desktop"]/following-sibling::android.widget.TextView');}
    get DesktopButton() {return $('//android.widget.TextView[@text="Desktop"]/preceding-sibling::android.widget.ImageView/preceding-sibling::android.view.ViewGroup');}
    get EditButton() {return $('//android.widget.TextView[@text="Edit"]');}
    get RemoveButton() {return $('//android.widget.TextView[@text="Remove"]');}

    get OtherText() {return $('//android.widget.TextView[@text="Other"]');}
    get OtherNumber() {return $('//android.widget.TextView[@text="Other"]/following-sibling::android.widget.TextView');}
    
    get AreYouSureText() {return $('//android.widget.TextView[@text="Are you sure you want to remove Desktops?"]');}
    get CancelButton() {return $('//android.widget.TextView[@text="Cancel"]');}
    get DeleteButton() {return $('//android.widget.TextView[@text="Delete"]');}
    
    get TotalText() {return $('//android.widget.TextView[@text="Total: "]');}
    get TotalNumber() {return $('//android.widget.TextView[@text="Total: "]/following-sibling::android.widget.TextView');}
    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
    get AddAssetButton() {return $('//android.widget.TextView[@text="Add\nAsset"]');}
    get NextButton() {return $('//android.widget.TextView[@text="Next"]');}


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
    //PieceCountText
    async PieceCountText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PieceCountText)
    }
    //DesktopText
    async DesktopText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DesktopText)
    }
    async DesktopText_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.DesktopText)
    }
    //DesktopNumber
    async DesktopNumber_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DesktopNumber)
    }
    async DesktopNumber_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.DesktopNumber, expected_text)
    }
    //DesktopButton
    async DesktopButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DesktopButton)
    }
    async DesktopButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.DesktopButton)
    }
    //EditButton
    async EditButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.EditButton)
    }
    async EditButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.EditButton)
    }
    async EditButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.EditButton)
    }
    //RemoveButton
    async RemoveButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.RemoveButton)
    }
    async RemoveButton_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.RemoveButton)
    }
    async RemoveButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.RemoveButton)
    }

    //OtherText
    async OtherText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.OtherText)
    }
    async OtherText_IsNotPresent() {
        await GeneralFunctions.ElementIsNotPresentOnTheScreen(this.OtherText)
    }
    //OtherNumber
    async OtherNumber_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.OtherNumber)
    }
    async OtherNumber_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.OtherNumber, expected_text)
    }

    //AreYouSureText
    async AreYouSureText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.AreYouSureText)
    }
    //CancelButton
    async CancelButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.CancelButton)
    }
    async CancelButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.CancelButton)
    }
    //DeleteButton
    async DeleteButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DeleteButton)
    }
    async DeleteButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.DeleteButton)
    }
    //TotalText
    async TotalText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalText)
    }
    //TotalNumber
    async TotalNumber_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TotalNumber)
    }
    async TotalNumber_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.TotalNumber, expected_text)
    }

    //BottomBackButton
    async BottomBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.BottomBackButton)
    }
    async BottomBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.BottomBackButton)
    }
    //AddAssetButton
    async AddAssetButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.AddAssetButton)
    }
    async AddAssetButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.AddAssetButton)
    }
    //NextButton
    async NextButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NextButton)
    }
    async NextButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.NextButton)
    }
    
}
export default new PieceCountScreen();
