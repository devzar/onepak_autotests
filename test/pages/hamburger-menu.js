import GeneralFunctions from '../pages/general.js';

class HamburgerMenu {
    //Hamburger menu
    //get HamburgerMenuSection() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]');}
    get CloseMenuButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.widget.ImageView');}
    get SummaryMenuButton() {return $('//android.widget.TextView[@text="Summary"]');}
    get WhatToDoMenuButton() {return $('//android.widget.TextView[@text="What To Do"]');}
    get AssetGuideMenuButton() {return $('//android.widget.TextView[@text="Asset Guide"]');}
    get PackingVideosMenuButton() {return $('//android.widget.TextView[@text="Packing Videos"]');}
    get SupportMenuButton() {return $('//android.widget.TextView[@text="Support"]');}

    //CloseMenuButton
    async CloseMenuButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.CloseMenuButton)
    }
    async CloseMenuButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.CloseMenuButton)
    }
    //SummaryMenuButton
    async SummaryMenuButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.SummaryMenuButton)
    }
    async SummaryMenuButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.SummaryMenuButton)
    }
    //WhatToDoMenuButton
    async WhatToDoMenuButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.WhatToDoMenuButton)
    }
    async WhatToDoMenuButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.WhatToDoMenuButton)
    }
    //AssetGuideMenuButton
    async AssetGuideMenuButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.AssetGuideMenuButton)
    }
    async AssetGuideMenuButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.AssetGuideMenuButton)
    }
    //PackingVideosMenuButton
    async PackingVideosMenuButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.PackingVideosMenuButton)
    }
    async PackingVideosMenuButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.PackingVideosMenuButton)
    }
    //SupportMenuButton
    async SupportMenuButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.SupportMenuButton)
    }
    async SupportMenuButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.SupportMenuButton)
    }
}
export default new HamburgerMenu()
