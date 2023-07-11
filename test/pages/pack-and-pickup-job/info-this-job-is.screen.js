import GeneralFunctions from '../general.js';

class ThisJobIsScreen {
    get TopBackButton() {return $('//android.widget.TextView[@text="This job is a"]/ancestor::android.widget.ScrollView/preceding-sibling::android.view.ViewGroup/android.view.ViewGroup[1]');}
    get HamburgerMenuButton() {return $('//android.widget.TextView[@text="This job is a"]/ancestor::android.widget.ScrollView/preceding-sibling::android.view.ViewGroup/android.view.ViewGroup[2]');}
    
    get ThisJobIsText() {return $('//android.widget.TextView[@text="This job is a"]');}
    get PackAndPickupText() {return $('//android.widget.TextView[@text="PACK & PICKUP"]');}
    //get LoadImage() {return $('');}
    get PackAssetsText() {return $('//android.widget.TextView[@text="Pack Assets"]');}
    get PackPalletsText() {return $('//android.widget.TextView[@text="Pack Pallets"]');}
    get LoadText() {return $('//android.widget.TextView[@text="Load"]');}
    get LearnMoreButton() {return $('//android.view.View[contains(@class, android.widget.TextView[@text="Learn More"])]');}
    
    get BottomBackButton() {return $('//android.widget.TextView[@text="Back"]');}
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
    //ThisJobIsText
    async ThisJobIsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ThisJobIsText)
    }
    //PackAndPickupText
    async PackAndPickupText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PackAndPickupText)
    }
    //PackAssetsText
    async PackAssetsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PackAssetsText)
    }
    //PackPalletsText
    async PackPalletsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PackPalletsText)
    }
    //LoadText
    async LoadText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.LoadText)
    }
    //LearnMoreButton
    async LearnMoreButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.LearnMoreButton)
    }
    async LearnMoreButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.LearnMoreButton)
    }
    //NextButton
    async NextButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NextButton)
    }
    async NextButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.NextButton)
    }
    //BottomBackButton
    async BottomBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.BottomBackButton)
    }
    async BottomBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.BottomBackButton)
    }
}
export default new ThisJobIsScreen()
