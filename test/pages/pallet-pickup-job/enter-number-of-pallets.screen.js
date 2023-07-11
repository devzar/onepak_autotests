import GeneralFunctions from '../general.js';

class NumberOfPalletsScreen {
    get TopBackButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');}
    get HamburgerMenuButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]');}
    
    get NumberOfPalletsText() {return $('//android.widget.TextView[@text="Number of Pallets"]');} 
    get NumberOfPalletsInput() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]');}

    get Button0() {return $('//android.widget.TextView[@text="0"]');}
    get Button1() {return $('//android.widget.TextView[@text="1"]');}
    get Button2() {return $('//android.widget.TextView[@text="2"]');}
    get Button3() {return $('//android.widget.TextView[@text="3"]');}
    get Button4() {return $('//android.widget.TextView[@text="4"]');}
    get Button5() {return $('//android.widget.TextView[@text="5"]');}
    get Button6() {return $('//android.widget.TextView[@text="6"]');}
    get Button7() {return $('//android.widget.TextView[@text="7"]');}
    get Button8() {return $('//android.widget.TextView[@text="8"]');}
    get Button9() {return $('//android.widget.TextView[@text="9"]');}
    get RemoveButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[12]/android.view.View');}

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
    //NumberOfPalletsText
    async NumberOfPalletsText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NumberOfPalletsText)
    }
    //NumberOfPalletsInput
    async NumberOfPalletsInput_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.NumberOfPalletsInput)
    }
    async NumberOfPalletsInput_HasText(expected_text) {
        await GeneralFunctions.ElementHasText(this.NumberOfPalletsInput, expected_text)
    }

    //Button1
    async Button1_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button1)
    }
    async Button1_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button1)
    }
    //Button2
    async Button2_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button2)
    }
    async Button2_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button2)
    }
    //Button3
    async Button3_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button3)
    }
    async Button3_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button3)
    }
    //Button4
    async Button4_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button4)
    }
    async Button4_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button4)
    }
    //Button5
    async Button5_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button5)
    }
    async Button5_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button5)
    }
    //Button6
    async Button6_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button6)
    }
    async Button6_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button6)
    }
    //Button7
    async Button7_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button7)
    }
    async Button7_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button7)
    }
    //Button8
    async Button8_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button8)
    }
    async Button8_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button8)
    }
    //Button8
    async Button9_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button9)
    }
    async Button9_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button9)
    }
    //Button0
    async Button0_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.Button0)
    }
    async Button0_Click() {
        await GeneralFunctions.ElementIsClicked(this.Button0)
    }
    //RemoveButton
    async RemoveButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.RemoveButton)
    }
    async RemoveButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.RemoveButton)
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
export default new NumberOfPalletsScreen();
