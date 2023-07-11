import GeneralFunctions from '../pages/general.js';

class StartScreen {
  get Onepacklabel() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView');}
  get DriverAppText() {return $('//android.widget.TextView[@text="Driver App"]');}
  get WhatToDoButton() {return $('//android.widget.TextView[@text="What To Do"]');}
  get StartJobButton() {return $('//android.widget.TextView[@text="Start Job"]');}
  get TermsAndConditionsLink() {return $('//android.widget.TextView[@text="Terms & Conditions"]');}
  get CopyrightText() {return $('//android.widget.TextView[@text="© Copyright 2004-2023 OnePak Inc. All rights reserved."]');}

  //Onepacklabel
  async Onepacklabel_IsPresent() {
    await GeneralFunctions.ElementIsPresentOnTheScreen(this.Onepacklabel)
  }
  //DriverAppText
  async DriverAppText_IsPresent() {
    await GeneralFunctions.ElementIsPresentOnTheScreen(this.DriverAppText, 10000)
  }
  //WhatToDoButton
  async WhatToDoButton_IsPresent() {
    await GeneralFunctions.ElementIsPresentOnTheScreen(this.WhatToDoButton)
  }
  async WhatToDoButton_Click() {
    await GeneralFunctions.ElementIsClicked(this.WhatToDoButton)  
  }
  //StartJobButton
  async StartJobButton_IsPresent() {
    await GeneralFunctions.ElementIsPresentOnTheScreen(this.StartJobButton)
  }
  async StartJobButton_Click() {
    await GeneralFunctions.ElementIsClicked(this.StartJobButton)  
  }
  //TermsAndConditionsLink
  async TermsAndConditionsLink_IsPresent() {
    await GeneralFunctions.ElementIsPresentOnTheScreen(this.TermsAndConditionsLink)
  }
  async TermsAndConditionsLink_Click() {
    await GeneralFunctions.ElementIsClicked(this.TermsAndConditionsLink)  
  }
  //CopyrightText
  async CopyrightText_IsPresent() {
    await GeneralFunctions.ElementIsPresentOnTheScreen(this.CopyrightText)
  }
}
export default new StartScreen();