import GeneralFunctions from '../pages/general.js'
import HamburgerMenu from '../pages/hamburger-menu.js';

import StartScreen from '../pages/start.screen.js';
import MobilePhoneScreen from '../pages/mobile-phone.screen.js';
import SelectDispatchScreen from '../pages/select-dispatch.screen.js';

//Pack and Pickup 
import ThisJobIsScreen from '../pages/pack-and-pickup-job/info-this-job-is.screen.js';
import InfoArrivalPhotoScreen from '../pages/pack-and-pickup-job/info-arrival-photo.screen.js';
import TakeArrivalPhotoScreen from '../pages/pack-and-pickup-job/take-arrival-photo.screen.js';
import ArrivalPhotosScreen from '../pages/pack-and-pickup-job/arrival-photos.screen.js';
import ArrivalPhotosSavedScreen from '../pages/pack-and-pickup-job/arrival-photos-saved.screen.js';
import SelectItemTypeScreen from '../pages/pack-and-pickup-job/select-item-type.screen.js';
import PieceCountScreen from '../pages/pack-and-pickup-job/summary-piece-count.screen.js';
import EnterNumberOfAssetsScreen from '../pages/pack-and-pickup-job/enter-number-of-assets.screen.js';
import TakePalletsPhotoScreen from '../pages/pack-and-pickup-job/take-pallets-photo.screen.js';

import NumberOfPalletsScreen from '../pages/pack-and-pickup-job/enter-number-of-pallets.screen.js';
import PalletCountScreen from '../pages/pack-and-pickup-job/summary-pallet-count.screen.js';
import InfoPalletPhotoScreen from '../pages/pack-and-pickup-job/info-pallet-photo.screen.js';
import TotalPalletsScreen from '../pages/pack-and-pickup-job/summary-total-pallets.screen.js';
import PalletPhotosSavedScreen from '../pages/pack-and-pickup-job/pallet-photos-saved.screen.js';

//Approval Screens
import CustomerApprovalScreen from '../pages/approval-screens/customer-approval.screen.js';
import CustomerInfoScreen from '../pages/approval-screens/customer-info.screen.js';
import CustomerSignatureScreen from '../pages/approval-screens/customer-signature.screen.js';
import DriverSignatureScreen from '../pages/approval-screens/driver-signature.screen.js';
import SendDataScreen from '../pages/approval-screens/send-data.screen.js';

describe('PACK AND PICKUP NO PHOTOS TESTS:', () => {
    beforeEach(async () => {
        try {
            await driver.closeApp()
            await GeneralFunctions.LaunchAppWithSeveralAttempts()

            //start screen
            await StartScreen.DriverAppText_IsPresent()
            await StartScreen.StartJobButton_Click()

            //entering phone number with the job
            await MobilePhoneScreen.MobilePhoneText_Exists()
            await GeneralFunctions.CloseNotificationButton.click()
            await MobilePhoneScreen.EnterPhoneNumberWithJob()        
            await MobilePhoneScreen.NextButton_Click()

            //select Dispatch
            await SelectDispatchScreen.SelectDispatchText_IsPresent()
            await SelectDispatchScreen.PackAndPickupWithoutPhoto_Click()
            await SelectDispatchScreen.SelectButton_Click()
        }
        catch(error) {
            console.error(`Error setting up test: ${error}`);
        }
    })
    it("THIS JOB SCREEN - has main elements", async () => {
        //This is a Job 
        await ThisJobIsScreen.TopBackButton_IsPresent()
        await ThisJobIsScreen.HamburgerMenuButton_IsPresent()

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.PackAndPickupText_IsPresent()
        await ThisJobIsScreen.PackAssetsText_IsPresent()
        await ThisJobIsScreen.PackPalletsText_IsPresent()
        await ThisJobIsScreen.LoadText_IsPresent()
        await ThisJobIsScreen.LearnMoreButton_IsPresent()

        await ThisJobIsScreen.TopBackButton_IsPresent()
        await ThisJobIsScreen.NextButton_IsPresent()
    })
    it("THIS JOB SCREEN - top back button works properly", async () => {
        //This is a Job 
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.TopBackButton_Click()

        //back to Select Dispatch
        await SelectDispatchScreen.SelectDispatchText_IsPresent()
    })
    it("THIS JOB SCREEN - hamburger menu button works properly, Summary btn opens Piece Count screen, user can't go futher", async () => {
        //This is a Job 
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.HamburgerMenuButton_Click()
        await HamburgerMenu.SummaryMenuButton_Click()

        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.TotalNumber_HasText("0")
        await PieceCountScreen.NextButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    //TODO
    //it("This job is page: learn more works properly", async () => {}
    it("THIS JOB SCREEN - bottom back button works properly", async () => {
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.BottomBackButton_Click()

        //back to Select Dispatch
        await SelectDispatchScreen.SelectDispatchText_IsPresent()
    })
    it("SELECT ITEM TYPE - has main elements", async () => {
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.TopBackButton_IsPresent()
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_IsPresent()
        await SelectItemTypeScreen.ServerButton_IsPresent()
        await SelectItemTypeScreen.LaptopButton_IsPresent()
        await SelectItemTypeScreen.TabletButton_IsPresent()
        await SelectItemTypeScreen.MonitorButton_IsPresent()
        await SelectItemTypeScreen.HardDriveButton_IsPresent()
        await SelectItemTypeScreen.OtherButton_IsPresent()
    })
    it("SELECT ITEM TYPE SCREEN - back button works properly", async () => {
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.TopBackButton_Click()

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()

    })
    it("ENTER NUMBER OF ASSETS SCREEN - has main elements", async () => {
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await EnterNumberOfAssetsScreen.TopBackButton_IsPresent()
        await EnterNumberOfAssetsScreen.HamburgerMenuButton_IsPresent()
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_IsPresent()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        await EnterNumberOfAssetsScreen.Button1_IsPresent()
        await EnterNumberOfAssetsScreen.Button2_IsPresent()
        await EnterNumberOfAssetsScreen.Button3_IsPresent()
        await EnterNumberOfAssetsScreen.Button4_IsPresent()
        await EnterNumberOfAssetsScreen.Button5_IsPresent()
        await EnterNumberOfAssetsScreen.Button6_IsPresent()
        await EnterNumberOfAssetsScreen.Button7_IsPresent()
        await EnterNumberOfAssetsScreen.Button8_IsPresent()
        await EnterNumberOfAssetsScreen.Button9_IsPresent()
        await EnterNumberOfAssetsScreen.Button0_IsPresent()
        await EnterNumberOfAssetsScreen.RemoveButton_IsPresent()

        await EnterNumberOfAssetsScreen.BottomBackButton_IsPresent()
        await EnterNumberOfAssetsScreen.NextButton_IsPresent()
    })
    it("ENTER NUMBER OF ASSETS SCREEN - back button works properly", async () => {
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_IsPresent()
        await EnterNumberOfAssetsScreen.TopBackButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
    })
    it("ENTER NUMBER OF ASSETS SCREEN - hamburger menu button works properly, Summary btn opens Piece Count screen", async () => {
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_IsPresent()
        await EnterNumberOfAssetsScreen.HamburgerMenuButton_Click()
        //hamburger menu
        await HamburgerMenu.SummaryMenuButton_Click()
        
        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.TotalNumber_HasText("0")
        await PieceCountScreen.NextButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    it("ENTER NUMBER OF ASSETS SCREEN - input works properly", async () => {
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_IsPresent()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Can enter 1
        await EnterNumberOfAssetsScreen.Button1_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("1")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 2
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("2")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 3
        await EnterNumberOfAssetsScreen.Button3_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("3")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 4
        await EnterNumberOfAssetsScreen.Button4_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("4")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 5
        await EnterNumberOfAssetsScreen.Button5_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("5")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 6
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("6")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 7
        await EnterNumberOfAssetsScreen.Button7_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("7")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 8
        await EnterNumberOfAssetsScreen.Button8_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("8")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 9
        await EnterNumberOfAssetsScreen.Button9_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("9")
        //Can enter 0
        await EnterNumberOfAssetsScreen.Button0_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("90")
        //Can enter 3 numbers
        await EnterNumberOfAssetsScreen.Button9_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("909")
        //Can't enter 4th number
        await EnterNumberOfAssetsScreen.Button8_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("909")
    })
    it("PIECE COUNT SCREEN - has main elements", async () => {
        //This is a Job
        const NumberOfAssets = "2"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.TopBackButton_IsPresent()
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.HamburgerMenuButton_IsPresent()
        await PieceCountScreen.DesktopButton_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfAssets)
        await PieceCountScreen.TotalText_IsPresent()
        await PieceCountScreen.TotalNumber_HasText(NumberOfAssets)
        await PieceCountScreen.BottomBackButton_IsPresent()
        await PieceCountScreen.AddAssetButton_IsPresent()
        await PieceCountScreen.NextButton_IsPresent()
    })
    it("PIECE COUNT SCREEN - Top back button works properly, it is possible to edit number of assets", async () => {
        //This is a Job
        const OldNumberOfAssets = "2"
        const NewNumberOfAssets = "5"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(OldNumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(OldNumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(OldNumberOfAssets)
        await PieceCountScreen.TopBackButton_Click()
        
        //Enter new number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(OldNumberOfAssets)
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.Button5_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NewNumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NewNumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NewNumberOfAssets)
    })
    it("PIECE COUNT SCREEN - hamburger menu works properly", async () => {
        //This is a Job
        const NumberOfAssets = "7"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button7_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NumberOfAssets)
        await PieceCountScreen.HamburgerMenuButton_Click()
        await HamburgerMenu.SummaryMenuButton_Click()
        
        //Piece Count Screen
        await driver.pause(500)
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NumberOfAssets)
    })
    it("PIECE COUNT SCREEN - remove button works properly", async () => {
        //This is a Job
        const NumberOfAssets = "2"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.RemoveButton_IsNotPresent()
        await PieceCountScreen.DesktopButton_Click()
        await PieceCountScreen.RemoveButton_Click()

        //Cancel Remove
        await PieceCountScreen.AreYouSureText_IsPresent()
        await PieceCountScreen.CancelButton_Click()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NumberOfAssets)

        await PieceCountScreen.RemoveButton_IsPresent()
        await GeneralFunctions.CloseNotificationButton.click()
        await PieceCountScreen.RemoveButton_Click()
        //approve Remove
        await PieceCountScreen.AreYouSureText_IsPresent()
        await PieceCountScreen.DeleteButton_Click()
        await PieceCountScreen.DesktopText_IsNotPresent()
        await PieceCountScreen.TotalNumber_HasText("0")
        await PieceCountScreen.NextButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    it("PIECE COUNT SCREEN - edit button works properly", async () => {
        //This is a Job
        const NumberOfAssets = "2"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.EditButton_IsNotPresent()
        await PieceCountScreen.DesktopButton_Click()
        await PieceCountScreen.EditButton_Click()

        //Enter new number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.Button3_Click()
        await EnterNumberOfAssetsScreen.NextButton_Click()
        
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText("3")
        await PieceCountScreen.TotalNumber_HasText("3")
    })
    it("PIECE COUNT SCREEN - bottom back button works properly, it is possible to edit number of assets", async () => {
        //This is a Job
        const OldNumberOfAssets = "2"
        const NewNumberOfAssets = "5"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(OldNumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(OldNumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(OldNumberOfAssets)
        await PieceCountScreen.BottomBackButton_Click()
        
        //Enter new number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(OldNumberOfAssets)
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.Button5_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NewNumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NewNumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NewNumberOfAssets)
    })
    it("PIECE COUNT SCREEN - add assets works properly", async () => {
        //This is a Job
        const NumberOfDesktops = "6"
        const NumberOfOthers = "9"
        const TotalOfAssets = "15"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.TotalNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.AddAssetButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.OtherButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Others?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button9_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfOthers)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.OtherText_IsPresent()
        await PieceCountScreen.OtherNumber_HasText(NumberOfOthers)
        await PieceCountScreen.TotalNumber_HasText(TotalOfAssets)
    })
    it("NUMBER OF PALLETS SCREEN - has main elements", async () => {
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.TotalNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.NextButton_Click()

        //Enter number of pallets
        await NumberOfPalletsScreen.TopBackButton_IsPresent()
        await NumberOfPalletsScreen.HamburgerMenuButton_IsPresent()

        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        await NumberOfPalletsScreen.Button1_IsPresent()
        await NumberOfPalletsScreen.Button2_IsPresent()
        await NumberOfPalletsScreen.Button3_IsPresent()
        await NumberOfPalletsScreen.Button4_IsPresent()
        await NumberOfPalletsScreen.Button5_IsPresent()
        await NumberOfPalletsScreen.Button6_IsPresent()
        await NumberOfPalletsScreen.Button7_IsPresent()
        await NumberOfPalletsScreen.Button8_IsPresent()
        await NumberOfPalletsScreen.Button9_IsPresent()
        await NumberOfPalletsScreen.Button0_IsPresent()
        await NumberOfPalletsScreen.RemoveButton_IsPresent()

        await NumberOfPalletsScreen.BottomBackButton_IsPresent()
        await NumberOfPalletsScreen.NextButton_IsPresent()
    })
    it("NUMBER OF PALLETS SCREEN - hamburger menu button works properly, Summary btn opens Pallet Count screen", async () => {
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.HamburgerMenuButton_Click()
        //hamburger menu
        await HamburgerMenu.SummaryMenuButton_Click()
        
        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    it("NUMBER OF PALLETS SCREEN - input works properly", async () => {
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")
        //next btn doe not work
        await NumberOfPalletsScreen.NextButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()

        //Can't start with 0
        await NumberOfPalletsScreen.Button0_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 1
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("1")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 2
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("2")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 3
        await NumberOfPalletsScreen.Button3_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("3")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 4
        await NumberOfPalletsScreen.Button4_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("4")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 5
        await NumberOfPalletsScreen.Button5_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("5")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 6
        await NumberOfPalletsScreen.Button6_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("6")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 7
        await NumberOfPalletsScreen.Button7_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("7")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 8
        await NumberOfPalletsScreen.Button8_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("8")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 9
        await NumberOfPalletsScreen.Button9_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("9")
        //Can enter 0
        await NumberOfPalletsScreen.Button0_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("90")
        //Can enter 3 numbers
        await NumberOfPalletsScreen.Button9_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("909")
        //Can't enter 4th number
        await NumberOfPalletsScreen.Button8_Click()
        await expect(NumberOfPalletsScreen.NumberOfPalletsInput).toHaveText("909")
    })
    it("NUMBER OF PALLETS SCREEN - it's not possible to enter more pallets than assets", async () => {
        const NumberOfPallets = "7"
        const NumberOfDesktops = "6"
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.MorePalletsThanAssetsText_IsNotPresent()
        
        //entering 7 pallets
        await NumberOfPalletsScreen.Button7_Click()
        await NumberOfPalletsScreen.NextButton_Click()
        await NumberOfPalletsScreen.MorePalletsThanAssetsText_IsPresent()
    })
    it("NUMBER OF PALLETS SCREEN - input saves value when the top back button is pressed", async () => {
        const NumberOfPallets = "3"
        const NumberOfDesktops = "6"

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 3 pallets
        await NumberOfPalletsScreen.Button3_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)

        //go to previous screen
        await NumberOfPalletsScreen.TopBackButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()
        //return to Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
    })
    it("NUMBER OF PALLETS SCREEN - input saves value when the bottom back button is pressed", async () => {
        const NumberOfPallets = "4"
        const NumberOfDesktops = "6"

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button4_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)

        //go to previous screen
        await NumberOfPalletsScreen.TopBackButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()
        //return to Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
    })
    it("PALLET COUNT SCREEN - has main elements", async () => {
        const NumberOfPallets = "5"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 5 pallets
        await NumberOfPalletsScreen.Button5_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await driver.pause(500)
        await PalletCountScreen.TopBackButton_IsPresent()
        await PalletCountScreen.HamburgerMenuButton_IsPresent()
        await PalletCountScreen.PalletCountText_IsPresent()
        //await PalletCountScreen.PalletsImage_IsPresent()
        await PalletCountScreen.TotalPalletsText_IsPresent()

        await PalletCountScreen.TotalPalletsNumber_HasText(NumberOfPallets)
        await PalletCountScreen.NextButton_IsPresent()
    })
    it("PALLET COUNT SCREEN - Top Back btn works properly", async () => {
        const NumberOfPallets = "6"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 6 pallets
        await NumberOfPalletsScreen.Button6_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.TopBackButton_Click()
        //back to Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
    })
    it("PALLET COUNT SCREEN - hamburger menu btn works properly, Summary btn opens Pallet Count screen", async () => {
        const NumberOfPallets = "2"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.HamburgerMenuButton_Click()

        //hamburger menu
        await HamburgerMenu.SummaryMenuButton_Click()
        
        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    it("CUSTOMER APPROVAL SCREEN - has main elements", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.CustomerApprovalText_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountText_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountNumber_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountNumber_HasText(NumberOfDesktops)
        await CustomerApprovalScreen.BottomBackButton_IsPresent()
        await CustomerApprovalScreen.NextButton_IsPresent()
    })
    it("CUSTOMER APPROVAL SCREEN - bottom back button works properly", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.BottomBackButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.TotalPalletsNumber_HasText(NumberOfPallets)
    })
    it("CUSTOMER INFO SCREEN - has main elements", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen main elements
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput_HasText("First Name")
        await CustomerInfoScreen.LastNameInput_HasText("Last Name")
        await CustomerInfoScreen.EmailInput_HasText("Email")
        await CustomerInfoScreen.TotalPieceCountText_IsPresent()
        await CustomerInfoScreen.TotalPieceCountNumber_HasText(NumberOfDesktops)
        await CustomerInfoScreen.BottomBackButton_IsPresent()
        await CustomerInfoScreen.NextButton_IsPresent()
    })
    it("CUSTOMER INFO SCREEN - back button works properly", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen main elements
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.BottomBackButton_Click()

        //Approval screen
        await CustomerApprovalScreen.CustomerApprovalText_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountText_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountNumber_HasText(NumberOfDesktops)
    })
    it("CUSTOMER INFO SCREEN - inputs work properly", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen main elements
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput_HasText("First Name")
        await CustomerInfoScreen.LastNameInput_HasText("Last Name")
        await CustomerInfoScreen.EmailInput_HasText("Email")
        await CustomerInfoScreen.TotalPieceCountText_IsPresent()
        await CustomerInfoScreen.TotalPieceCountNumber_HasText(NumberOfDesktops)
        await CustomerInfoScreen.BottomBackButton_IsPresent()
        await CustomerInfoScreen.NextButton_IsPresent()
    })
    it("CUSTOMER INFO SCREEN - invalid email gets notification", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const WrongEmail1 = "john.smithtest.com"
        const WrongEmail2 = "john.smith@.com"
        const WrongEmail3 = "john.smith@test"
        const WrongEmail4 = "john.smith@test."
        const WrongEmail5 = "john.smith@test!com"
        const WrongEmail6 = "john.smith#test.com"

        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.InvalidEmailText_IsNotPresent()

        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        
        //entering invalid email1
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail1)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email2
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail2)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email3
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail3)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email4
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail4)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email5
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail5)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email6
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail6)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
    })
    it("CUSTOMER INFO SCREEN - correct values in the inputs", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.FirstNameInput_HasText(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.LastNameInput_HasText(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)
        await CustomerInfoScreen.EmailInput_HasText(Email)
        await CustomerInfoScreen.InvalidEmailText_IsNotPresent()

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
    })
    it("CUSTOMER SIGNATURE SCREEN - has main elements", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()
        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.TotalItemsText_HasText("Total Items: " + NumberOfDesktops)
        await CustomerSignatureScreen.CustomerSugnatureInput_IsPresent()
        await CustomerSignatureScreen.CustomerNameText_HasText(FirstName + " " + LastName)
        await CustomerSignatureScreen.ClearButton_IsPresent()
        await CustomerSignatureScreen.BottomBackButton_IsPresent()
        await CustomerSignatureScreen.NextButton_IsPresent()
    })
    it("CUSTOMER SIGNATURE SCREEN - back button works properly", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.BottomBackButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
    })
    it("CUSTOMER SIGNATURE SCREEN - clear button works properly", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsPresent()

        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsNotPresent()
        await CustomerSignatureScreen.OKButton_IsNotPresent()

        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.ClearButton_Click()

        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsNotPresent()
        await CustomerSignatureScreen.OKButton_IsNotPresent()
    })
    it("CUSTOMER SIGNATURE SCREEN - next button works properly", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsPresent()

        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsNotPresent()
        await CustomerSignatureScreen.OKButton_IsNotPresent()

        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsPresent()
        await CustomerSignatureScreen.OKButton_IsPresent()
    })
    it("DRIVER SIGNATURE SCREEN - has main elements", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()

        await CustomerSignatureScreen.OKButton_Click()

        //Driver Signature screenn opens
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.TotalItemsText_HasText("Total Items: " + NumberOfDesktops)
        await DriverSignatureScreen.DriverNameText_HasText("Driver")
        await DriverSignatureScreen.ClearButton_IsPresent()
        await DriverSignatureScreen.BottomBackButton_IsPresent()
        await DriverSignatureScreen.ApproveButton_IsPresent()
    })
    it("DRIVER SIGNATURE SCREEN - back button works properly", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.BottomBackButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
    })
    it("DRIVER SIGNATURE SCREEN - clear button works properly", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
       //This is a Job
       const NumberOfDesktops = "6"
       await ThisJobIsScreen.ThisJobIsText_IsPresent()
       await ThisJobIsScreen.NextButton_Click()

       //Select Item Type
       await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
       await SelectItemTypeScreen.DescktopButton_Click()

       //Enter number of assets
       await driver.pause(500)
       await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
       await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
       
       //Entering the amount
       await EnterNumberOfAssetsScreen.Button6_Click()
       await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
       await EnterNumberOfAssetsScreen.NextButton_Click()
       //Piece Count Screen
       await PieceCountScreen.PieceCountText_IsPresent()
       await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsNotPresent()
        await DriverSignatureScreen.OKButton_IsNotPresent()

        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()
        await DriverSignatureScreen.ClearButton_Click()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsNotPresent()
        await DriverSignatureScreen.OKButton_IsNotPresent()
    })
    it("DRIVER SIGNATURE SCREEN - next button works properly", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverNameText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsNotPresent()
        await DriverSignatureScreen.OKButton_IsNotPresent()

        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsPresent()
        await DriverSignatureScreen.OKButton_IsPresent()
    })
    it("SEND DATA SCREEN - has main elements", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
    })
    it("SEND DATA SCREEN - Back button works properly", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
        await SendDataScreen.BottomBackButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
    })
    it("SEND DATA SCREEN - Send button works properly", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
        await SendDataScreen.SendButton_Click()
        
        //AllSet Screen
        await SendDataScreen.AllSetText_IsPresent()
        await SendDataScreen.IAmDoneButton_IsPresent()
    })
    it("SEND DATA SCREEN - I am done button works properly", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
        await SendDataScreen.SendButton_Click()
        
        //AllSet Screen
        await SendDataScreen.AllSetText_IsPresent()
        await SendDataScreen.IAmDoneButton_Click()

        //Main screen
        await StartScreen.DriverAppText_IsPresent() 
    })
})
describe.only('PACK AND PICKUP WITH PHOTOS TESTS:', () => {
    beforeEach(async () => {
        try {
            await driver.closeApp()
            await GeneralFunctions.LaunchAppWithSeveralAttempts()

            //start screen
            await StartScreen.DriverAppText_IsPresent()
            await StartScreen.StartJobButton_Click()

            //entering phone number with the job
            await MobilePhoneScreen.MobilePhoneText_Exists()
            await GeneralFunctions.CloseNotificationButton.click()
            await MobilePhoneScreen.EnterPhoneNumberWithJob()        
            await MobilePhoneScreen.NextButton_Click()

            //select Dispatch
            await SelectDispatchScreen.SelectDispatchText_IsPresent()
            await SelectDispatchScreen.PackAndPickupWithPhoto_Click()
            await SelectDispatchScreen.SelectButton_Click()
        }
        catch(error) {
            console.error(`Error setting up test: ${error}`);
        }
    })
    it("THIS JOB SCREEN - has main elements", async () => {
        //This is a Job 
        await ThisJobIsScreen.TopBackButton_IsPresent()
        await ThisJobIsScreen.HamburgerMenuButton_IsPresent()

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.PackAndPickupText_IsPresent()
        await ThisJobIsScreen.PackAssetsText_IsPresent()
        await ThisJobIsScreen.PackPalletsText_IsPresent()
        await ThisJobIsScreen.LoadText_IsPresent()
        await ThisJobIsScreen.LearnMoreButton_IsPresent()

        await ThisJobIsScreen.TopBackButton_IsPresent()
        await ThisJobIsScreen.NextButton_IsPresent()
    })
    it("THIS JOB SCREEN - top back button works properly", async () => {
        //This is a Job 
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.TopBackButton_Click()

        //back to Select Dispatch
        await SelectDispatchScreen.SelectDispatchText_IsPresent()
    })
    it("THIS JOB SCREEN - hamburger menu button works properly, Summary btn opens Piece Count screen, user can't go futher", async () => {
        //This is a Job 
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.HamburgerMenuButton_Click()
        await HamburgerMenu.SummaryMenuButton_Click()

        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.TotalNumber_HasText("0")
        await PieceCountScreen.NextButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    //TODO
    //it("This job is page: learn more works properly", async () => {}
    it("THIS JOB SCREEN - bottom back button works properly", async () => {
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.BottomBackButton_Click()

        //back to Select Dispatch
        await SelectDispatchScreen.SelectDispatchText_IsPresent()
    })
    it("INFO ARRIVAL PHOTOS - has main elements", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.IllustrationImage_IsPresent()
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_IsPresent()
    })
    it("INFO ARRIVAL PHOTOS SCREEN - top back button works properly", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.TopBackButton_Click()

        //back to This Is Job 
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
    })
    it("INFO ARRIVAL PHOTOS SCREEN - hamburger button works properly, Summary btn opens Total Pallets screen", async () => {
        const NumberOfPallets = "0"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.HamburgerMenuButton_Click()

        //hamburger menu
        await HamburgerMenu.SummaryMenuButton_Click()
        
        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.TotalNumber_HasText("0")
        await PieceCountScreen.NextButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    it("INFO ARRIVAL PHOTOS SCREEN - photo button works properly", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_IsPresent()
    })
    it("TAKE ARRIVAL PHOTO SCREEN - taking a photo, it's possible to delete photo", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()        
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_Click()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.ContinueButton_Click()       
    })
    it("ARRIVAL PHOTOS SCREEN - has main elements", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.TopBackButton_IsPresent()
        await ArrivalPhotosScreen.HamburgerMenuButton_IsPresent()
        await ArrivalPhotosScreen.ArrivalPhotosText_IsPresent()
        //TODO: photos part
        await ArrivalPhotosScreen.TakeAnotherPhotoButton_IsPresent()
        await ArrivalPhotosScreen.NextButton_IsPresent()
    })
    //TODO Arrival Photos tests
    it("ARRIVAL PHOTOS SAVED SCREEN - has main elements", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
    })
    it("ARRIVAL PHOTOS SAVED SCREEN - back button wotks properly", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.BottomBackButton_Click()

        //Arrival Photos screen
        await ArrivalPhotosScreen.ArrivalPhotosText_IsPresent()
    })
    it("SELECT ITEM TYPE - has main elements", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.TopBackButton_IsPresent()
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_IsPresent()
        await SelectItemTypeScreen.ServerButton_IsPresent()
        await SelectItemTypeScreen.LaptopButton_IsPresent()
        await SelectItemTypeScreen.TabletButton_IsPresent()
        await SelectItemTypeScreen.MonitorButton_IsPresent()
        await SelectItemTypeScreen.HardDriveButton_IsPresent()
        await SelectItemTypeScreen.OtherButton_IsPresent()
    })
    it("SELECT ITEM TYPE SCREEN - back button works properly", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.TopBackButton_Click()

        //This is a Job
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()

    })
    it("ENTER NUMBER OF ASSETS SCREEN - has main elements", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await EnterNumberOfAssetsScreen.TopBackButton_IsPresent()
        await EnterNumberOfAssetsScreen.HamburgerMenuButton_IsPresent()
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_IsPresent()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        await EnterNumberOfAssetsScreen.Button1_IsPresent()
        await EnterNumberOfAssetsScreen.Button2_IsPresent()
        await EnterNumberOfAssetsScreen.Button3_IsPresent()
        await EnterNumberOfAssetsScreen.Button4_IsPresent()
        await EnterNumberOfAssetsScreen.Button5_IsPresent()
        await EnterNumberOfAssetsScreen.Button6_IsPresent()
        await EnterNumberOfAssetsScreen.Button7_IsPresent()
        await EnterNumberOfAssetsScreen.Button8_IsPresent()
        await EnterNumberOfAssetsScreen.Button9_IsPresent()
        await EnterNumberOfAssetsScreen.Button0_IsPresent()
        await EnterNumberOfAssetsScreen.RemoveButton_IsPresent()

        await EnterNumberOfAssetsScreen.BottomBackButton_IsPresent()
        await EnterNumberOfAssetsScreen.NextButton_IsPresent()
    })
    it("ENTER NUMBER OF ASSETS SCREEN - back button works properly", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_IsPresent()
        await EnterNumberOfAssetsScreen.TopBackButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
    })
    it("ENTER NUMBER OF ASSETS SCREEN - hamburger menu button works properly, Summary btn opens Piece Count screen", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_IsPresent()
        await EnterNumberOfAssetsScreen.HamburgerMenuButton_Click()
        //hamburger menu
        await HamburgerMenu.SummaryMenuButton_Click()
        
        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.TotalNumber_HasText("0")
        await PieceCountScreen.NextButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    it("ENTER NUMBER OF ASSETS SCREEN - input works properly", async () => {
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_IsPresent()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Can enter 1
        await EnterNumberOfAssetsScreen.Button1_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("1")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 2
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("2")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 3
        await EnterNumberOfAssetsScreen.Button3_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("3")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 4
        await EnterNumberOfAssetsScreen.Button4_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("4")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 5
        await EnterNumberOfAssetsScreen.Button5_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("5")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 6
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("6")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 7
        await EnterNumberOfAssetsScreen.Button7_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("7")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 8
        await EnterNumberOfAssetsScreen.Button8_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("8")
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")

        //Can enter 9
        await EnterNumberOfAssetsScreen.Button9_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("9")
        //Can enter 0
        await EnterNumberOfAssetsScreen.Button0_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("90")
        //Can enter 3 numbers
        await EnterNumberOfAssetsScreen.Button9_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("909")
        //Can't enter 4th number
        await EnterNumberOfAssetsScreen.Button8_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("909")
    })
    it("PIECE COUNT SCREEN - has main elements", async () => {
        //This is a Job
        const NumberOfAssets = "2"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.TopBackButton_IsPresent()
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.HamburgerMenuButton_IsPresent()
        await PieceCountScreen.DesktopButton_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfAssets)
        await PieceCountScreen.TotalText_IsPresent()
        await PieceCountScreen.TotalNumber_HasText(NumberOfAssets)
        await PieceCountScreen.BottomBackButton_IsPresent()
        await PieceCountScreen.AddAssetButton_IsPresent()
        await PieceCountScreen.NextButton_IsPresent()
    })
    it("PIECE COUNT SCREEN - Top back button works properly, it is possible to edit number of assets", async () => {
        //This is a Job
        const OldNumberOfAssets = "2"
        const NewNumberOfAssets = "5"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(OldNumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(OldNumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(OldNumberOfAssets)
        await PieceCountScreen.TopBackButton_Click()
        
        //Enter new number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(OldNumberOfAssets)
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.Button5_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NewNumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NewNumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NewNumberOfAssets)
    })
    it("PIECE COUNT SCREEN - hamburger menu works properly", async () => {
        //This is a Job
        const NumberOfAssets = "7"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button7_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NumberOfAssets)
        await PieceCountScreen.HamburgerMenuButton_Click()
        await HamburgerMenu.SummaryMenuButton_Click()
        
        //Piece Count Screen
        await driver.pause(500)
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NumberOfAssets)
    })
    it("PIECE COUNT SCREEN - remove button works properly", async () => {
        //This is a Job
        const NumberOfAssets = "2"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.RemoveButton_IsNotPresent()
        await PieceCountScreen.DesktopButton_Click()
        await PieceCountScreen.RemoveButton_Click()

        //Cancel Remove
        await PieceCountScreen.AreYouSureText_IsPresent()
        await PieceCountScreen.CancelButton_Click()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NumberOfAssets)

        await PieceCountScreen.RemoveButton_IsPresent()
        await GeneralFunctions.CloseNotificationButton.click()
        await PieceCountScreen.RemoveButton_Click()
        //approve Remove
        await PieceCountScreen.AreYouSureText_IsPresent()
        await PieceCountScreen.DeleteButton_Click()
        await PieceCountScreen.DesktopText_IsNotPresent()
        await PieceCountScreen.TotalNumber_HasText("0")
        await PieceCountScreen.NextButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    it("PIECE COUNT SCREEN - edit button works properly", async () => {
        //This is a Job
        const NumberOfAssets = "2"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.EditButton_IsNotPresent()
        await PieceCountScreen.DesktopButton_Click()
        await PieceCountScreen.EditButton_Click()

        //Enter new number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfAssets)
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.Button3_Click()
        await EnterNumberOfAssetsScreen.NextButton_Click()
        
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText("3")
        await PieceCountScreen.TotalNumber_HasText("3")
    })
    it("PIECE COUNT SCREEN - bottom back button works properly, it is possible to edit number of assets", async () => {
        //This is a Job
        const OldNumberOfAssets = "2"
        const NewNumberOfAssets = "5"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button2_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(OldNumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(OldNumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(OldNumberOfAssets)
        await PieceCountScreen.BottomBackButton_Click()
        
        //Enter new number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(OldNumberOfAssets)
        await EnterNumberOfAssetsScreen.RemoveButton_Click()
        await EnterNumberOfAssetsScreen.Button5_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NewNumberOfAssets)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NewNumberOfAssets)
        await PieceCountScreen.TotalNumber_HasText(NewNumberOfAssets)
    })
    it("PIECE COUNT SCREEN - add assets works properly", async () => {
        //This is a Job
        const NumberOfDesktops = "6"
        const NumberOfOthers = "9"
        const TotalOfAssets = "15"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()
        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.TotalNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.AddAssetButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.OtherButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Others?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button9_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfOthers)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.OtherText_IsPresent()
        await PieceCountScreen.OtherNumber_HasText(NumberOfOthers)
        await PieceCountScreen.TotalNumber_HasText(TotalOfAssets)
    })
    it("NUMBER OF PALLETS SCREEN - has main elements", async () => {
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()

        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.DesktopText_IsPresent()
        await PieceCountScreen.DesktopNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.TotalNumber_HasText(NumberOfDesktops)
        await PieceCountScreen.NextButton_Click()

        //Enter number of pallets
        await NumberOfPalletsScreen.TopBackButton_IsPresent()
        await NumberOfPalletsScreen.HamburgerMenuButton_IsPresent()

        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        await NumberOfPalletsScreen.Button1_IsPresent()
        await NumberOfPalletsScreen.Button2_IsPresent()
        await NumberOfPalletsScreen.Button3_IsPresent()
        await NumberOfPalletsScreen.Button4_IsPresent()
        await NumberOfPalletsScreen.Button5_IsPresent()
        await NumberOfPalletsScreen.Button6_IsPresent()
        await NumberOfPalletsScreen.Button7_IsPresent()
        await NumberOfPalletsScreen.Button8_IsPresent()
        await NumberOfPalletsScreen.Button9_IsPresent()
        await NumberOfPalletsScreen.Button0_IsPresent()
        await NumberOfPalletsScreen.RemoveButton_IsPresent()

        await NumberOfPalletsScreen.BottomBackButton_IsPresent()
        await NumberOfPalletsScreen.NextButton_IsPresent()
    })
    it("NUMBER OF PALLETS SCREEN - hamburger menu button works properly, Summary btn opens Piece Count screen", async () => {
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.HamburgerMenuButton_Click()
        //hamburger menu
        await HamburgerMenu.SummaryMenuButton_Click()
        
        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
    })
    it("NUMBER OF PALLETS SCREEN - input works properly", async () => {
        //This is a Job
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")
        //next btn doe not work
        await NumberOfPalletsScreen.NextButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()

        //Can't start with 0
        await NumberOfPalletsScreen.Button0_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 1
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("1")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 2
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("2")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 3
        await NumberOfPalletsScreen.Button3_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("3")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 4
        await NumberOfPalletsScreen.Button4_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("4")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 5
        await NumberOfPalletsScreen.Button5_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("5")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 6
        await NumberOfPalletsScreen.Button6_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("6")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 7
        await NumberOfPalletsScreen.Button7_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("7")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 8
        await NumberOfPalletsScreen.Button8_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("8")
        await NumberOfPalletsScreen.RemoveButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 9
        await NumberOfPalletsScreen.Button9_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("9")
        //Can enter 0
        await NumberOfPalletsScreen.Button0_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("90")
        //Can enter 3 numbers
        await NumberOfPalletsScreen.Button9_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("909")
        //Can't enter 4th number
        await NumberOfPalletsScreen.Button8_Click()
        await expect(NumberOfPalletsScreen.NumberOfPalletsInput).toHaveText("909")
    })
    it("NUMBER OF PALLETS SCREEN - it's not possible to enter more pallets than assets", async () => {
        const NumberOfPallets = "7"
        const NumberOfDesktops = "6"
        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.MorePalletsThanAssetsText_IsNotPresent()
        
        //entering 7 pallets
        await NumberOfPalletsScreen.Button7_Click()
        await NumberOfPalletsScreen.NextButton_Click()
        await NumberOfPalletsScreen.MorePalletsThanAssetsText_IsPresent()
    })
    it("NUMBER OF PALLETS SCREEN - input saves value when the top back button is pressed", async () => {
        const NumberOfPallets = "3"
        const NumberOfDesktops = "6"

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 3 pallets
        await NumberOfPalletsScreen.Button3_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)

        //go to previous screen
        await NumberOfPalletsScreen.TopBackButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()
        //return to Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
    })
    it("NUMBER OF PALLETS SCREEN - input saves value when the bottom back button is pressed", async () => {
        const NumberOfPallets = "4"
        const NumberOfDesktops = "6"

        //This is a Job
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button4_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)

        //go to previous screen
        await NumberOfPalletsScreen.TopBackButton_Click()
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()
        //return to Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
    })
    it("INFO PHOTOS OF PALLETS - has main elements", async () => {
        const NumberOfPallets = "4"
        const NumberOfDesktops = "6"
        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 40 pallets
        await NumberOfPalletsScreen.Button4_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Info Photo page
        await InfoPalletPhotoScreen.PalletNumberText_IsPresent()
        await InfoPalletPhotoScreen.PalletNumberText_HasText("Pallet: 1")
        await InfoPalletPhotoScreen.IllustrationImage_IsPresent()
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_IsPresent()
    })
    it("INFO PHOTOS OF PALLETS SCREEN - top back button works properly", async () => {
        const NumberOfPallets = "4"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button4_Click()

        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Info Photo page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PalletNumberText_HasText("Pallet: 1")
        await InfoPalletPhotoScreen.TopBackButton_Click()

        //back to Enter number of palets
        await NumberOfPalletsScreen.NumberOfPalletsInput_IsPresent()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
    })
    it("INFO PHOTOS OF PALLETS SCREEN - hamburger button works properly, Summary btn opens Piece Count screen", async () => {
        const NumberOfPallets = "4"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button4_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Info Photo page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.HamburgerMenuButton_Click()

        //hamburger menu
        await HamburgerMenu.SummaryMenuButton_Click()
        
        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.TotalNumber_HasText(NumberOfDesktops)
    })
    it("INFO PHOTOS OF PALLETS SCREEN - photo button works properly", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Info Photo page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page
        await TakeArrivalPhotoScreen.TakeAPhotoButton_IsPresent()
    })
    it("TAKE PALLETS PHOTO SCREEN - back button works properly", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Info Photo page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page
        await TakePalletsPhotoScreen.TakeAPhotoButton_IsPresent()
        await TakePalletsPhotoScreen.TopBackButton_Click()

        //Info Photo page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
    })
    it("TAKE PALLETS PHOTO SCREEN - taking a photo, moving to total pallets screen", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakePalletsPhotoScreen.AddPhotoButton_IsNotPresent()
        await TakePalletsPhotoScreen.ContinueButton_IsNotPresent()
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()

        await TakePalletsPhotoScreen.DeletePhotoButton_IsPresent()
        await TakePalletsPhotoScreen.AddPhotoButton_IsPresent()
        await TakePalletsPhotoScreen.ContinueButton_IsPresent()        
        await TakePalletsPhotoScreen.ContinueButton.click()
        //await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_IsPresent()
        await TotalPalletsScreen.TotalPalletsText_HasText(`Total Pallets: ${NumberOfPallets}`)
        await TotalPalletsScreen.FirstPalletPhotosNumberText_HasText("1")       
    })
    it("TAKE PALLETS PHOTO SCREEN - taking a photo, it's possible to delete photo", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()

        await TakePalletsPhotoScreen.DeletePhotoButton_Click()
        await TakePalletsPhotoScreen.TakeAPhotoButton_IsPresent()
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()

        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_IsPresent()
        await TotalPalletsScreen.TotalPalletsText_HasText(`Total Pallets: ${NumberOfPallets}`)
        await TotalPalletsScreen.FirstPalletPhotosNumberText_HasText("1")       
    })
    it("TAKE PALLETS PHOTO SCREEN - taking a photo, it's possible to add photo", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()

        await TakePalletsPhotoScreen.AddPhotoButton_Click()
        await GeneralFunctions.CloseNotificationButton.click()

        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_IsPresent()
        await TotalPalletsScreen.TotalPalletsText_HasText(`Total Pallets: ${NumberOfPallets}`)
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.FirstPalletPhotosNumberText_HasText("2")       
    })
    it("TOTAL PALLETS SCREEN - top back button works properly", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_IsPresent()
        await TotalPalletsScreen.TopBackButton_Click()

        //Back to taking photo
        await TakePalletsPhotoScreen.TakeAPhotoButton_IsPresent()
    })
    it("TOTAL PALLETS SCREEN - hamburger button works properly, Summary btn opens Piece Count screen", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_IsPresent()
        await TotalPalletsScreen.HamburgerMenuButton_Click()

        await HamburgerMenu.SummaryMenuButton_Click()
        
        //to Piece Count
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.TotalNumber_HasText(NumberOfDesktops)
    })
    
    //TOTAL PALLETS SCREEN - pallet with photo, it's possible to add photo
    //TOTAL PALLETS SCREEN - pallet with photo, it's possible to delete photo
    //TOTAL PALLETS SCREEN - pallet with 2 photos, it's possible to switch between photos
    //TOTAL PALLETS SCREEN - pallet without photo, it's possible to add photo
    
    it("TOTAL PALLETS SCREEN - adding new pallet without photo", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.SecondPalletNumber_IsNotPresent()
        await TotalPalletsScreen.NextPalletButton_IsNotPresent()
        await TotalPalletsScreen.DoneButton_IsPresent()

        //adding new pallet
        await TotalPalletsScreen.AddAnotherPalletButton_Click()
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: 2")
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.SecondPalletNumber_IsPresent()
        await TotalPalletsScreen.NextPalletButton_IsPresent()
        await TotalPalletsScreen.DoneButton_IsNotPresent()
    })
    it("TOTAL PALLETS SCREEN - when removing a pallet, there's a confirmation popup, user can cancel or confirm removal", async () => {
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 1 pallet
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.SecondPalletNumber_IsPresent()
        await TotalPalletsScreen.NextPalletButton_IsPresent()
        
        //pressing remove btn for the second pallet, canceling it
        await TotalPalletsScreen.RemoveSecondPalletButton_Click()
        await TotalPalletsScreen.DeletePalletText_HasText("Are you sure you want to remove pallet #2?")
        await TotalPalletsScreen.CancelDeletePalletButton_Click()
        await TotalPalletsScreen.SecondPalletNumber_IsPresent()

        //pressing remove btn for the second pallet, confirming it
        await TotalPalletsScreen.RemoveSecondPalletButton_Click()
        await TotalPalletsScreen.DeletePalletText_HasText("Are you sure you want to remove pallet #2?")
        await TotalPalletsScreen.ConfirmDeletePalletButton_Click()
        await TotalPalletsScreen.SecondPalletNumber_IsNotPresent()

        await TotalPalletsScreen.DoneButton_IsPresent()

    })
    it("TOTAL PALLETS SCREEN - remove all pallets, it's possible to add pallet with add pallet button", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 1 pallet
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.NotificationNoPalletsText_IsNotPresent()
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.DoneButton_IsPresent()

        //removing new pallet
        await TotalPalletsScreen.RemoveFirstPalletButton_Click()
        await TotalPalletsScreen.ConfirmDeletePalletButton_Click()

        //see the notification + no Done btn
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: 0")
        await TotalPalletsScreen.NotificationNoPalletsText_IsPresent()
        await TotalPalletsScreen.DoneButton_IsNotPresent()
        await TotalPalletsScreen.BottomBackButton_IsPresent()

        //clicking add pallet btn to add new pallet
        await TotalPalletsScreen.AddAnotherPalletButton_Click()

        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: 1")
        await TotalPalletsScreen.NotificationNoPalletsText_IsNotPresent()
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.BottomBackButton_IsNotPresent()
        await TotalPalletsScreen.NextPalletButton_IsPresent()
    })
    it("TOTAL PALLETS SCREEN - remove all pallets, it's possible to add pallet with top back button", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 1 pallet
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.NotificationNoPalletsText_IsNotPresent()
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.DoneButton_IsPresent()

        //removing new pallet
        await TotalPalletsScreen.RemoveFirstPalletButton_Click()
        await TotalPalletsScreen.ConfirmDeletePalletButton_Click()

        //see the notification + no Done btn
        await GeneralFunctions.CloseNotificationButton.click()
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: 0")
        await TotalPalletsScreen.NotificationNoPalletsText_IsPresent()
        await TotalPalletsScreen.DoneButton_IsNotPresent()
        await TotalPalletsScreen.BottomBackButton_IsPresent()

        //clicking back btn to Take Photo
        await TotalPalletsScreen.TopBackButton_Click()
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //back to total pallets
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.NotificationNoPalletsText_IsNotPresent()
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.DoneButton_IsPresent()
    })
    it("TOTAL PALLETS SCREEN - remove all pallets, it's possible to add pallet with bottom back button", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 1 pallet
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.NotificationNoPalletsText_IsNotPresent()
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.BottomBackButton_IsNotPresent()
        await TotalPalletsScreen.DoneButton_IsPresent()

        //removing new pallet
        await TotalPalletsScreen.RemoveFirstPalletButton_Click()
        await TotalPalletsScreen.ConfirmDeletePalletButton_Click()

        //see the notification + no Done btn
        await GeneralFunctions.CloseNotificationButton.click()
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: 0")
        await TotalPalletsScreen.NotificationNoPalletsText_IsPresent()
        await TotalPalletsScreen.DoneButton_IsNotPresent()
        await TotalPalletsScreen.BottomBackButton_IsPresent()

        //clicking back btn to Take Photo
        await TotalPalletsScreen.BottomBackButton_Click()
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //back to total pallets
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.NotificationNoPalletsText_IsNotPresent()
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.DoneButton_IsPresent()
    })
    it("CUSTOMER APPROVAL SCREEN - has main elements", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.CustomerApprovalText_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountText_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountNumber_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountNumber_HasText(NumberOfDesktops)
        await CustomerApprovalScreen.BottomBackButton_IsPresent()
        await CustomerApprovalScreen.NextButton_IsPresent()
    })
    it("CUSTOMER APPROVAL SCREEN - bottom back button works properly", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.BottomBackButton_Click()

        //Pallet Count Page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
    })
    it("CUSTOMER INFO SCREEN - has main elements", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen main elements
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput_HasText("First Name")
        await CustomerInfoScreen.LastNameInput_HasText("Last Name")
        await CustomerInfoScreen.EmailInput_HasText("Email")
        await CustomerInfoScreen.TotalPieceCountText_IsPresent()
        await CustomerInfoScreen.TotalPieceCountNumber_HasText(NumberOfDesktops)
        await CustomerInfoScreen.BottomBackButton_IsPresent()
        await CustomerInfoScreen.NextButton_IsPresent()
    })
    it("CUSTOMER INFO SCREEN - back button works properly", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen main elements
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.BottomBackButton_Click()

        //Approval screen
        await CustomerApprovalScreen.CustomerApprovalText_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountText_IsPresent()
        await CustomerApprovalScreen.TotalPieceCountNumber_HasText(NumberOfDesktops)
    })
    it("CUSTOMER INFO SCREEN - inputs work properly", async () => {
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen main elements
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput_HasText("First Name")
        await CustomerInfoScreen.LastNameInput_HasText("Last Name")
        await CustomerInfoScreen.EmailInput_HasText("Email")
        await CustomerInfoScreen.TotalPieceCountText_IsPresent()
        await CustomerInfoScreen.TotalPieceCountNumber_HasText(NumberOfDesktops)
        await CustomerInfoScreen.BottomBackButton_IsPresent()
        await CustomerInfoScreen.NextButton_IsPresent()
    })
    it("CUSTOMER INFO SCREEN - invalid email gets notification", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const WrongEmail1 = "john.smithtest.com"
        const WrongEmail2 = "john.smith@.com"
        const WrongEmail3 = "john.smith@test"
        const WrongEmail4 = "john.smith@test."
        const WrongEmail5 = "john.smith@test!com"
        const WrongEmail6 = "john.smith#test.com"

        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.InvalidEmailText_IsNotPresent()

        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        
        //entering invalid email1
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail1)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email2
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail2)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email3
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail3)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email4
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail4)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email5
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail5)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
        //entering invalid email6
        await CustomerInfoScreen.EmailInput.addValue(WrongEmail6)
        await CustomerInfoScreen.NextButton_Click()
        await CustomerInfoScreen.InvalidEmailText_IsPresent()
    })
    it("CUSTOMER INFO SCREEN - correct values in the inputs", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.FirstNameInput_HasText(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.LastNameInput_HasText(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)
        await CustomerInfoScreen.EmailInput_HasText(Email)
        await CustomerInfoScreen.InvalidEmailText_IsNotPresent()

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
    })
    it("CUSTOMER SIGNATURE SCREEN - has main elements", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.TotalItemsText_HasText("Total Items: " + NumberOfDesktops)
        await CustomerSignatureScreen.CustomerSugnatureInput_IsPresent()
        await CustomerSignatureScreen.CustomerNameText_HasText(FirstName + " " + LastName)
        await CustomerSignatureScreen.ClearButton_IsPresent()
        await CustomerSignatureScreen.BottomBackButton_IsPresent()
        await CustomerSignatureScreen.NextButton_IsPresent()
    })
    it("CUSTOMER SIGNATURE SCREEN - back button works properly", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.BottomBackButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
    })
    it("CUSTOMER SIGNATURE SCREEN - clear button works properly", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsPresent()

        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsNotPresent()
        await CustomerSignatureScreen.OKButton_IsNotPresent()

        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.ClearButton_Click()

        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsNotPresent()
        await CustomerSignatureScreen.OKButton_IsNotPresent()
    })
    it("CUSTOMER SIGNATURE SCREEN - next button works properly", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsPresent()

        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsNotPresent()
        await CustomerSignatureScreen.OKButton_IsNotPresent()

        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsPresent()
        await CustomerSignatureScreen.OKButton_IsPresent()
    })
    it("DRIVER SIGNATURE SCREEN - has main elements", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()

        await CustomerSignatureScreen.OKButton_Click()

        //Driver Signature screenn opens
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.TotalItemsText_HasText("Total Items: " + NumberOfDesktops)
        await DriverSignatureScreen.DriverNameText_HasText("Driver")
        await DriverSignatureScreen.ClearButton_IsPresent()
        await DriverSignatureScreen.BottomBackButton_IsPresent()
        await DriverSignatureScreen.ApproveButton_IsPresent()
    })
    it("DRIVER SIGNATURE SCREEN - back button works properly", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.BottomBackButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
    })
    it("DRIVER SIGNATURE SCREEN - clear button works properly", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsNotPresent()
        await DriverSignatureScreen.OKButton_IsNotPresent()

        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()
        await DriverSignatureScreen.ClearButton_Click()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsNotPresent()
        await DriverSignatureScreen.OKButton_IsNotPresent()
    })
    it("DRIVER SIGNATURE SCREEN - next button works properly", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverNameText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsNotPresent()
        await DriverSignatureScreen.OKButton_IsNotPresent()

        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsPresent()
        await DriverSignatureScreen.OKButton_IsPresent()
    })
    it("SEND DATA SCREEN - has main elements", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
    })
    it("SEND DATA SCREEN - Back button works properly", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
        await SendDataScreen.BottomBackButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
    })
    it("SEND DATA SCREEN - Send button works properly", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "1"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 4 pallets
        await NumberOfPalletsScreen.Button1_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)
        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
        await SendDataScreen.SendButton_Click()
        
        //AllSet Screen
        await SendDataScreen.AllSetText_IsPresent()
        await SendDataScreen.IAmDoneButton_IsPresent()
    })
    it("SEND DATA SCREEN - I am done button works properly", async () => {
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        const NumberOfPallets = "2"
        const NumberOfDesktops = "6"

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsNotPresent()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 
        await TakeArrivalPhotoScreen.ContinueButton_Click()
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Select Item Type
        await SelectItemTypeScreen.SelectItemTypeText_IsPresent()
        await SelectItemTypeScreen.DescktopButton_Click()

        //Enter number of assets
        await driver.pause(500)
        await EnterNumberOfAssetsScreen.NumberOfAssetsText_HasText("How many Desktops?")
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText("")
        
        //Entering the amount
        await EnterNumberOfAssetsScreen.Button6_Click()
        await EnterNumberOfAssetsScreen.NumberOfAssetsInput_HasText(NumberOfDesktops)
        await EnterNumberOfAssetsScreen.NextButton_Click()
        //Piece Count Screen
        await PieceCountScreen.PieceCountText_IsPresent()
        await PieceCountScreen.NextButton_Click()

        //Number of Pallets
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()
        
        //entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_HasText("Total Pallets: " + NumberOfPallets)

        //Pressing Next pallet
        await TotalPalletsScreen.NextPalletButton_Click()
        await InfoPalletPhotoScreen.PalletNumberText_HasText("Pallet: 2")
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click() 
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen 
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        await CustomerInfoScreen.EmailInput.addValue(Email)

        await CustomerInfoScreen.NextButton_Click()

        //Customer signature screen
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.OKButton_Click()
        
        //Driver signature screen
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsPresent()
        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
        await SendDataScreen.SendButton_Click()
        
        //AllSet Screen
        await SendDataScreen.AllSetText_IsPresent()
        await SendDataScreen.IAmDoneButton_Click()

        //Main screen
        await StartScreen.DriverAppText_IsPresent() 
    })
})