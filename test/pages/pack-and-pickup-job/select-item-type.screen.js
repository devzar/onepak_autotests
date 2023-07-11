import GeneralFunctions from '../general.js';

class SelectItemTypeScreen {
    get TopBackButton() {return $('//android.widget.TextView[@text="Select Item Type"]/preceding-sibling::android.view.ViewGroup');}
    get SelectItemTypeText() {return $('//android.widget.TextView[@text="Select Item Type"]')}
    
    get DescktopButton() {return $('//android.widget.TextView[@text="Desktop"]/preceding-sibling::android.widget.ImageView/preceding-sibling::android.view.View')}
    get ServerButton() {return $('//android.widget.TextView[@text="Server"]/preceding-sibling::android.widget.ImageView/preceding-sibling::android.view.View')}
    get LaptopButton() {return $('//android.widget.TextView[@text="Laptop"]/preceding-sibling::android.widget.ImageView/preceding-sibling::android.view.View')}
    get TabletButton() {return $('//android.widget.TextView[@text="Tablet"]/preceding-sibling::android.widget.ImageView/preceding-sibling::android.view.View')}
    get MonitorButton() {return $('//android.widget.TextView[@text="Monitor"]/preceding-sibling::android.widget.ImageView/preceding-sibling::android.view.View')}
    get HardDriveButton() {return $('//android.widget.TextView[@text="Hard Drive"]/preceding-sibling::android.widget.ImageView/preceding-sibling::android.view.View')}
    get OtherButton() {return $('//android.widget.TextView[@text="Other"]/preceding-sibling::android.widget.TextView[contains(@class, android.widget.TextView[@text="Printer, Cabinet"])][contains(@class, android.widget.TextView[@text="Box of Miscellaneous"])]/preceding-sibling::android.widget.ImageView/preceding-sibling::android.view.View')}

    //TopBackButton
    async TopBackButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TopBackButton)
    }
    async TopBackButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.TopBackButton)
    }
    //SelectItemTypeText
    async SelectItemTypeText_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TopBackButton)
    }

    //DescktopButton
    async DescktopButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.DescktopButton)
    }
    async DescktopButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.DescktopButton)
    }
    //ServerButton
    async ServerButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.ServerButton)
    }
    async ServerButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.ServerButton)
    }
    //LaptopButton
    async LaptopButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.LaptopButton)
    }
    async LaptopButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.LaptopButton)
    }
    //TabletButton
    async TabletButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.TabletButton)
    }
    async TabletButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.TabletButton)
    }
    //MonitorButton
    async MonitorButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.MonitorButton)
    }
    async MonitorButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.MonitorButton)
    }
    //HardDriveButton
    async HardDriveButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.HardDriveButton)
    }
    async HardDriveButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.HardDriveButton)
    }
    //OtherButton
    async OtherButton_IsPresent() {
        await GeneralFunctions.ElementIsPresentOnTheScreen(this.OtherButton)
    }
    async OtherButton_Click() {
        await GeneralFunctions.ElementIsClicked(this.OtherButton)
    }
}
export default new SelectItemTypeScreen()
