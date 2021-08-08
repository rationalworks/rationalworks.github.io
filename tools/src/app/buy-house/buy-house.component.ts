import { Component, OnInit } from '@angular/core';
import { pmt, fv, pv  } from 'financial'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-house',
  templateUrl: './buy-house.component.html',
  styleUrls: ['./buy-house.component.css']
})
export class BuyHouseComponent implements OnInit {

  currency ='₹';
  emi = 0;
  inflationAsjustedRequiredCapital = 0;
  currentCapitalNeeds = 0;
  currentCost = 0;
  loanTenure = 0;
  remainingAmountWithFullPay = 0;
  remainingAmountWithFullEmi = 0;
  currentAvailableFund = 0;

  showAnanlysis = false;

  houseForm = new FormGroup({
    currentCost: new FormControl(Validators.minLength(2)),
    loanTenure: new FormControl(Validators.minLength(2)),
    loanOnInterestRate: new FormControl(Validators.minLength(2)),
    returnRateOnInvestement: new FormControl(Validators.minLength(2)),
    rateOfInflation: new FormControl(Validators.minLength(2)),
    currency: new FormControl(),
    currentAvailableFund: new FormControl()
  });


  constructor() { }

  ngOnInit(): void {
    this.houseForm.get("currentCost").setValue(3000000);
    this.houseForm.get("currentAvailableFund").setValue(0);
    this.houseForm.get("currency").setValue("rupee");
    this.houseForm.get("loanTenure").setValue(15);
    this.houseForm.get("loanOnInterestRate").setValue(9);
    this.houseForm.get("returnRateOnInvestement").setValue(10);
    this.houseForm.get("rateOfInflation").setValue(0);
    this.houseForm.get("currency").setValue("rupee");
    this.houseForm.get("currency").valueChanges.subscribe(newValue => {
      if(newValue == "doller")
      {
        this.currency = '$';
      }

      if(newValue == "pound")
      {
        this.currency = '£';
      }

      if(newValue == "rupee")
      {
        this.currency = '₹';
      }
    })
  }

  analyse()
  {
    console.log("Analysing....");
    let loanAmount = this.houseForm.get("currentCost").value
    let additionalAmount = this.houseForm.get("currentAvailableFund").value
    let loanInterest = this.houseForm.get("loanOnInterestRate").value;
    let loanTeanure = this.houseForm.get("loanTenure").value;
    let returnOnInvestment = this.houseForm.get("returnRateOnInvestement").value;
    let rateOfInflation = this.houseForm.get("rateOfInflation").value;
    this.currentCost = loanAmount;
    this.loanTenure = loanTeanure *12;
    this.emi = pmt(loanInterest/1200, loanTeanure*12, loanAmount);
    console.log("EMI is ",this.emi*-1 );
    let minumumRequiredCapitalToPayEMI = Math.max(pv(returnOnInvestment/1200,loanTeanure*12,this.emi*-1,0,), loanAmount);
    console.log("Minimum capital required to pay EMI is ",minumumRequiredCapitalToPayEMI );
    
    let minumumRequiredCapitalToSave = pv(returnOnInvestment/1200,loanTeanure*12,0,loanAmount)*-1;
    console.log("Minimum capital required to save loan amount ",minumumRequiredCapitalToSave );

    this.currentCapitalNeeds = additionalAmount +minumumRequiredCapitalToPayEMI + minumumRequiredCapitalToSave;
    console.log("Total capital need is ",this.currentCapitalNeeds );

    console.log("Availabe fund before full payment" , (this.currentCapitalNeeds-this.currentCost));
    this.remainingAmountWithFullPay = fv(returnOnInvestment/1200,loanTeanure*12,0,(this.currentCapitalNeeds -this.currentCost)*-1);
    console.log("Remaining funds after full payment" , this.remainingAmountWithFullPay );
    this.remainingAmountWithFullEmi = fv(returnOnInvestment/1200,loanTeanure*12,this.emi*-1,( this.currentCapitalNeeds)*-1);
    console.log("Remaining funds after all EMI payment" , this.remainingAmountWithFullEmi );
    this.showAnanlysis = true;
  }
}
