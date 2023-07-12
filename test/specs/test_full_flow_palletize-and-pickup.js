import GeneralFunctions from '../pages/general.js'
import HamburgerMenu from '../pages/hamburger-menu.js';

import StartScreen from '../pages/start.screen.js';
import MobilePhoneScreen from '../pages/mobile-phone.screen.js';
import SelectDispatchScreen from '../pages/select-dispatch.screen.js';

//Palletize and Pickup 
import ThisJobIsScreen from '../pages/palletize-and-pickup-job/info-this-job-is.screen.js';
import InfoArrivalPhotoScreen from '../pages/palletize-and-pickup-job/info-arrival-photo.screen.js';
import TakeArrivalPhotoScreen from '../pages/palletize-and-pickup-job/take-arrival-photo.screen.js';
import ArrivalPhotosScreen from '../pages/palletize-and-pickup-job/arrival-photos.screen.js';
import ArrivalPhotosSavedScreen from '../pages/palletize-and-pickup-job/arrival-photos-saved.screen.js';
import InfoPackAndWrapScreen from '../pages/palletize-and-pickup-job/info-pack-and-wrap.screen.js';
import TakePalletsPhotoScreen from '../pages/palletize-and-pickup-job/take-pallets-photo.screen.js';

import NumberOfPalletsScreen from '../pages/palletize-and-pickup-job/enter-number-of-pallets.screen.js';
import PalletCountScreen from '../pages/palletize-and-pickup-job/summary-pallet-count.screen.js';
import InfoPalletPhotoScreen from '../pages/palletize-and-pickup-job/info-pallet-photo.screen.js';
import TotalPalletsScreen from '../pages/palletize-and-pickup-job/summary-total-pallets.screen.js';
import PalletPhotosSavedScreen from '../pages/palletize-and-pickup-job/pallet-photos-saved.screen.js';


//Approval Screens
import CustomerApprovalScreen from '../pages/approval-screens/customer-approval.screen.js';
import CustomerInfoScreen from '../pages/approval-screens/customer-info.screen.js';
import CustomerSignatureScreen from '../pages/approval-screens/customer-signature.screen.js';
import DriverSignatureScreen from '../pages/approval-screens/driver-signature.screen.js';
import SendDataScreen from '../pages/approval-screens/send-data.screen.js';

describe('PALLETIZE AND PICKUP NO PHOTOS TEST:', () => {
    beforeEach(async () => {
        try {
            //launching the app and going to mobile screen
            await GeneralFunctions.LaunchAppWithSeveralAttempts()

            //entering phone number with the job
            await GeneralFunctions.CloseNotificationButton.click()
            await MobilePhoneScreen.EnterPhoneNumberWithJob()        
            await MobilePhoneScreen.NextButton_Click()

            //select Dispatch
            await SelectDispatchScreen.SelectDispatchText_IsPresent()
            await SelectDispatchScreen.PalletizeAndPickupWithoutPhoto_Click()
            await SelectDispatchScreen.SelectButton_Click()
        }
        catch(error) {
            console.error(`Error setting up test: ${error}`);
        }
    })
    afterEach(async () => {
        await driver.closeApp()
    })
    it("Full Run", async () => {
        const NumberOfPallets = "987"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"

        //This is a Job 
        await ThisJobIsScreen.TopBackButton_IsPresent()
        await ThisJobIsScreen.HamburgerMenuButton_IsPresent()

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.PalletizeAndPickupText_IsPresent()
        await ThisJobIsScreen.LoadText_IsPresent()
        await ThisJobIsScreen.LearnMoreButton_IsPresent()

        await ThisJobIsScreen.TopBackButton_IsPresent()
        await ThisJobIsScreen.NextButton_IsPresent()
    
        await ThisJobIsScreen.NextButton_Click()

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
    
        //next btn doe not work
        await NumberOfPalletsScreen.NextButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()

        //Can't start with 0
        await NumberOfPalletsScreen.Button0_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Can enter 3 numbers
        await NumberOfPalletsScreen.Button9_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("9")
        //Can enter 0
        await NumberOfPalletsScreen.Button8_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("98")
        await NumberOfPalletsScreen.Button7_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("987")
        //Can't enter 4th number
        await NumberOfPalletsScreen.Button6_Click()
        await expect(NumberOfPalletsScreen.NumberOfPalletsInput).toHaveText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Pallet Count Page
        await PalletCountScreen.TopBackButton_IsPresent()
        await PalletCountScreen.HamburgerMenuButton_IsPresent()
        await PalletCountScreen.PalletCountText_IsPresent()
        await PalletCountScreen.PalletsImage_IsPresent()
        await PalletCountScreen.TotalPalletsText_IsPresent()

        await PalletCountScreen.TotalPalletsNumber_HasText(NumberOfPallets)
        await PalletCountScreen.NextButton_IsPresent()
        await PalletCountScreen.NextButton_Click()

        //Approval screen
        await CustomerApprovalScreen.CustomerApprovalText_IsPresent()
        await CustomerApprovalScreen.TotalLoadCountText_IsPresent()
        await CustomerApprovalScreen.TotalLoadCountNumber_IsPresent()
        await CustomerApprovalScreen.TotalLoadCountNumber_HasText(NumberOfPallets)
        await CustomerApprovalScreen.BottomBackButton_IsPresent()
        await CustomerApprovalScreen.NextButton_IsPresent()
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen main elements
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput_HasText("First Name")
        await CustomerInfoScreen.LastNameInput_HasText("Last Name")
        await CustomerInfoScreen.EmailInput_HasText("Email")
        await CustomerInfoScreen.TotalLoadCountText_IsPresent()
        await CustomerInfoScreen.TotalLoadCountNumber_HasText(NumberOfPallets)
        await CustomerInfoScreen.BottomBackButton_IsPresent()
        await CustomerInfoScreen.NextButton_IsPresent()

        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        
        //entering correct email
        await CustomerInfoScreen.EmailInput.addValue(Email)
        await CustomerInfoScreen.EmailInput_HasText(Email)
        //await CustomerInfoScreen.InvalidEmailText_IsNotPresent()

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.TotalItemsText_HasText("Total Items: " + NumberOfPallets)
        await CustomerSignatureScreen.CustomerSugnatureInput_IsPresent()
        await CustomerSignatureScreen.CustomerNameText_HasText(FirstName + " " + LastName)
        await CustomerSignatureScreen.ClearButton_IsPresent()
        await CustomerSignatureScreen.BottomBackButton_IsPresent()
        await CustomerSignatureScreen.NextButton_IsPresent()

        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsNotPresent()
        await CustomerSignatureScreen.OKButton_IsNotPresent()

        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsPresent()
        await CustomerSignatureScreen.OKButton_IsPresent()
        await CustomerSignatureScreen.OKButton_Click()

        //Driver Signature screenn opens
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.TotalItemsText_HasText("Total Items: " + NumberOfPallets)
        await DriverSignatureScreen.DriverNameText_HasText("Driver")
        await DriverSignatureScreen.ClearButton_IsPresent()
        await DriverSignatureScreen.BottomBackButton_IsPresent()
        await DriverSignatureScreen.ApproveButton_IsPresent()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsNotPresent()
        await DriverSignatureScreen.OKButton_IsNotPresent()

        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()
        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsPresent()
        await DriverSignatureScreen.OKButton_IsPresent()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
        await SendDataScreen.SendButton_Click()
        
        //AllSet Screen
        await SendDataScreen.AllSetText_IsPresent()
        await SendDataScreen.IAmDoneButton_IsPresent()
        await SendDataScreen.IAmDoneButton_Click()

        //Main screen
        await StartScreen.DriverAppText_IsPresent() 
    })
})
describe('PALLETIZE AND PICKUP WITH PHOTOS TEST:', () => {
    beforeEach(async () => {
        try {
            //launching the app and going to mobile screen
            await GeneralFunctions.LaunchAppWithSeveralAttempts()

            //entering phone number with the job
            await GeneralFunctions.CloseNotificationButton.click()
            await MobilePhoneScreen.EnterPhoneNumberWithJob()        
            await MobilePhoneScreen.NextButton_Click()

            //select Dispatch
            await SelectDispatchScreen.SelectDispatchText_IsPresent()
            await SelectDispatchScreen.PalletizeAndPickupWithPhoto_Click()
            await SelectDispatchScreen.SelectButton_Click()
        }
        catch(error) {
            console.error(`Error setting up test: ${error}`);
        }
    })
    afterEach(async () => {
        await driver.closeApp()
    })
    it("Full Run", async () => {
        const NumberOfPallets = "2"
        const FirstName = "John"
        const LastName = "Smith"
        const Email = "john.smith@test.com"
        //This is a Job 
        await ThisJobIsScreen.TopBackButton_IsPresent()
        await ThisJobIsScreen.HamburgerMenuButton_IsPresent()

        await ThisJobIsScreen.ThisJobIsText_IsPresent()
        await ThisJobIsScreen.PalletizeAndPickupText_IsPresent()
        await ThisJobIsScreen.PackPalletsText_IsPresent()
        await ThisJobIsScreen.LoadText_IsPresent()
        await ThisJobIsScreen.LearnMoreButton_IsPresent()

        await ThisJobIsScreen.TopBackButton_IsPresent()
        await ThisJobIsScreen.NextButton_Click()

        //Info Arrival photos page
        await InfoArrivalPhotoScreen.IllustrationImage_IsPresent()
        await InfoArrivalPhotoScreen.InstructionText_IsPresent()    
        await InfoArrivalPhotoScreen.PhotoButton_Click()

        //Photo page
        await TakeArrivalPhotoScreen.AllowPhotosButton_Click()
        await TakeArrivalPhotoScreen.TakeAPhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()
        
        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.DeletePhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.ContinueButton_IsPresent() 

        await TakeArrivalPhotoScreen.DeletePhotoButton_Click()

        await TakeArrivalPhotoScreen.TakeAPhotoButton_IsPresent()
        await TakeArrivalPhotoScreen.DeletePhotoButton_IsNotPresent()

        await TakeArrivalPhotoScreen.TakeAPhotoButton_Click()

        await TakeArrivalPhotoScreen.ContinueButton_Click()       
        
        //Arrival Photos screen
        await ArrivalPhotosScreen.TopBackButton_IsPresent()
        await ArrivalPhotosScreen.HamburgerMenuButton_IsPresent()
        await ArrivalPhotosScreen.ArrivalPhotosText_IsPresent()
        await ArrivalPhotosScreen.TakeAnotherPhotoButton_IsPresent()
        await ArrivalPhotosScreen.NextButton_Click()

        //Arrival Photos Saved Screen
        await ArrivalPhotosSavedScreen.ArrivalPhotosSavedText_IsPresent()
        await ArrivalPhotosSavedScreen.NextButton_Click()

        //Pack and wrap pallets screen
        await InfoPackAndWrapScreen.TopBackButton_IsPresent()
        await InfoPackAndWrapScreen.HamburgerMenuButton_IsPresent()
        await InfoPackAndWrapScreen.PackAndWrapPalletsText_IsPresent()
        await InfoPackAndWrapScreen.IllustrationImage_IsPresent()
        await InfoPackAndWrapScreen.ContinueButton_IsPresent()
        await InfoPackAndWrapScreen.ContinueButton_Click()

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
        //next btn doe not work
        await NumberOfPalletsScreen.NextButton_Click()
        await NumberOfPalletsScreen.NumberOfPalletsText_IsPresent()

        //Can't start with 0
        await NumberOfPalletsScreen.Button0_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText("")

        //Entering 2 pallets
        await NumberOfPalletsScreen.Button2_Click()
        await NumberOfPalletsScreen.NumberOfPalletsInput_HasText(NumberOfPallets)
        await NumberOfPalletsScreen.NextButton_Click()

        //Info Photo page
        await InfoPalletPhotoScreen.PalletNumberText_IsPresent()
        await InfoPalletPhotoScreen.PalletNumberText_HasText("Pallet: 1")
        await InfoPalletPhotoScreen.IllustrationImage_IsPresent()
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click()

        //Photo page
        await TakePalletsPhotoScreen.TakeAPhotoButton_IsPresent()

        //Photo page, click take a photo btn
        await TakePalletsPhotoScreen.DeletePhotoButton_IsNotPresent()
        await TakePalletsPhotoScreen.AddPhotoButton_IsNotPresent()
        await TakePalletsPhotoScreen.ContinueButton_IsNotPresent()
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()

        await TakePalletsPhotoScreen.DeletePhotoButton_IsPresent()
        await TakePalletsPhotoScreen.AddPhotoButton_IsPresent()
        await TakePalletsPhotoScreen.ContinueButton_IsPresent()  

        //delete a photo
        await TakePalletsPhotoScreen.DeletePhotoButton_Click()
        await TakePalletsPhotoScreen.TakeAPhotoButton_IsPresent()
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()

        //add a photo
        await TakePalletsPhotoScreen.AddPhotoButton_Click()
        await GeneralFunctions.CloseNotificationButton.click()

        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        //Total pallets page
        await TotalPalletsScreen.TotalPalletsText_IsPresent()
        await TotalPalletsScreen.TotalPalletsText_HasText(`Total Pallets: ${NumberOfPallets}`)
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.FirstPalletPhotosNumberText_HasText("2")  
        await TotalPalletsScreen.SecondPalletNumber_IsPresent()

        await TotalPalletsScreen.NextPalletButton_IsPresent()
        await TotalPalletsScreen.DoneButton_IsNotPresent()

        //pressing remove btn for the second pallet, canceling it
        await TotalPalletsScreen.RemoveSecondPalletButton_Click()
        await TotalPalletsScreen.DeletePalletText_HasText("Are you sure you want to remove pallet #2?")
        await TotalPalletsScreen.CancelDeletePalletButton_Click()
        await TotalPalletsScreen.SecondPalletNumber_IsPresent()

        //pressing remove btn for the second pallet, confirming it
        await TotalPalletsScreen.RemoveSecondPalletButton_Click()
        await TotalPalletsScreen.DeletePalletText_HasText("Are you sure you want to remove pallet #2?")
        await TotalPalletsScreen.ConfirmDeletePalletButton_Click()
        await TotalPalletsScreen.TotalPalletsText_HasText(`Total Pallets: 1`)

        await TotalPalletsScreen.SecondPalletNumber_IsNotPresent()
        
        await TotalPalletsScreen.NextPalletButton_IsNotPresent()
        await TotalPalletsScreen.DoneButton_IsPresent()

        //adding new pallet
        await TotalPalletsScreen.AddAnotherPalletButton_Click()
        await TotalPalletsScreen.TotalPalletsText_HasText(`Total Pallets: ${NumberOfPallets}`)
        await TotalPalletsScreen.FirstPalletNumber_IsPresent()
        await TotalPalletsScreen.SecondPalletNumber_IsPresent()
        await TotalPalletsScreen.NextPalletButton_IsPresent()
        await TotalPalletsScreen.DoneButton_IsNotPresent()

        //Pressing Next pallet
        await TotalPalletsScreen.NextPalletButton_Click()
        await InfoPalletPhotoScreen.PalletNumberText_HasText("Pallet: 2")
        await InfoPalletPhotoScreen.InstructionText_IsPresent()
        await InfoPalletPhotoScreen.PhotoButton_Click() 
        await TakePalletsPhotoScreen.TakeAPhotoButton_Click()
        await TakePalletsPhotoScreen.ContinueButton_Click()

        await TotalPalletsScreen.FirstPalletPhotosNumberText_HasText("2") 
        await TotalPalletsScreen.SecondPalletPhotosNumberText_HasText("1") 

        await TotalPalletsScreen.DoneButton_Click()
        await PalletPhotosSavedScreen.ContinueButton_Click()

        //Approval screen
        await CustomerApprovalScreen.CustomerApprovalText_IsPresent()
        await CustomerApprovalScreen.TotalLoadCountText_IsPresent()
        await CustomerApprovalScreen.TotalLoadCountNumber_IsPresent()
        await CustomerApprovalScreen.TotalLoadCountNumber_HasText(NumberOfPallets)
        await CustomerApprovalScreen.BottomBackButton_IsPresent()
        await CustomerApprovalScreen.NextButton_IsPresent()
        await CustomerApprovalScreen.NextButton_Click()

        //CustomerInfoScreen main elements
        await CustomerInfoScreen.CustomerInfoText_IsPresent()
        await CustomerInfoScreen.FirstNameInput_HasText("First Name")
        await CustomerInfoScreen.LastNameInput_HasText("Last Name")
        await CustomerInfoScreen.EmailInput_HasText("Email")
        await CustomerInfoScreen.TotalLoadCountText_IsPresent()
        await CustomerInfoScreen.TotalLoadCountNumber_HasText(NumberOfPallets)
        await CustomerInfoScreen.BottomBackButton_IsPresent()
        await CustomerInfoScreen.NextButton_IsPresent()

        await CustomerInfoScreen.FirstNameInput.addValue(FirstName)
        await CustomerInfoScreen.LastNameInput.addValue(LastName)
        
        //entering correct email
        await CustomerInfoScreen.EmailInput.addValue(Email)
        await CustomerInfoScreen.EmailInput_HasText(Email)
        //await CustomerInfoScreen.InvalidEmailText_IsNotPresent()

        await CustomerInfoScreen.NextButton_Click()

        //Customer Signature screenn opens
        await CustomerSignatureScreen.CustomerSignatureText_IsPresent()
        await CustomerSignatureScreen.TotalItemsText_HasText("Total Items: " + NumberOfPallets)
        await CustomerSignatureScreen.CustomerSugnatureInput_IsPresent()
        await CustomerSignatureScreen.CustomerNameText_HasText(FirstName + " " + LastName)
        await CustomerSignatureScreen.ClearButton_IsPresent()
        await CustomerSignatureScreen.BottomBackButton_IsPresent()
        await CustomerSignatureScreen.NextButton_IsPresent()

        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsNotPresent()
        await CustomerSignatureScreen.OKButton_IsNotPresent()

        await CustomerSignatureScreen.CustomerSugnatureInput_IsSigned()
        await CustomerSignatureScreen.NextButton_Click()
        await CustomerSignatureScreen.SignedText_IsPresent()
        await CustomerSignatureScreen.OKButton_IsPresent()
        await CustomerSignatureScreen.OKButton_Click()

        //Driver Signature screenn opens
        await DriverSignatureScreen.DriverSignatureText_IsPresent()
        await DriverSignatureScreen.TotalItemsText_HasText("Total Items: " + NumberOfPallets)
        await DriverSignatureScreen.DriverNameText_HasText("Driver")
        await DriverSignatureScreen.ClearButton_IsPresent()
        await DriverSignatureScreen.BottomBackButton_IsPresent()
        await DriverSignatureScreen.ApproveButton_IsPresent()

        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsNotPresent()
        await DriverSignatureScreen.OKButton_IsNotPresent()

        await DriverSignatureScreen.DriverSugnatureInput_IsSigned()
        await DriverSignatureScreen.ApproveButton_Click()
        await DriverSignatureScreen.SignedText_IsPresent()
        await DriverSignatureScreen.OKButton_IsPresent()
        await DriverSignatureScreen.OKButton_Click()

        //Send Data Screen
        await SendDataScreen.SendDataText_IsPresent()
        await SendDataScreen.SendButton_Click()
        
        //AllSet Screen
        await SendDataScreen.AllSetText_IsPresent()
        await SendDataScreen.IAmDoneButton_IsPresent()
        await SendDataScreen.IAmDoneButton_Click()

        //Main screen
        await StartScreen.DriverAppText_IsPresent()  
    })
})