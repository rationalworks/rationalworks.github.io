import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  initialCapital: number = 100000;
  equityPerentage: number = 70;
  debtPercent: number = 30;
  equityGrowthPerentage: number = 16;
  debtGrowthPercent: number = 9;
  initialWithdrawl: number = 1000;
  withdrawlIncreasePercent: number = 9;
  currentYear: number = (new Date()).getFullYear();
  maxYearCount: number = 30;

  public chartDatasets: Array<any> = [
    { data: [], label: 'Equity' },
    { data: [], label: 'Debt' },
    { data: [], label: 'Total value' }
  ];

  public chartLabels: Array<any> = [];

  public startSimulation(): void {

    this.chartDatasets[0].data = [];
    this.chartDatasets[1].data = [];
    this.chartLabels = [];

    let currentCapital = this.initialCapital ;
    let currentWithdrawl = this.initialWithdrawl*12;
    let currentEquityValue = currentCapital * (this.equityPerentage / 100);
    let currentDebtValue = currentCapital * (this.debtPercent / 100);
    let currentYearValue = this.currentYear;

    let itrInterst = 0;
    while (currentYearValue < (this.currentYear + this.maxYearCount) && (currentEquityValue + currentDebtValue) >= 0) {

      this.chartDatasets[0].data.push(currentEquityValue);
      this.chartDatasets[1].data.push(currentDebtValue);
      this.chartDatasets[2].data.push(currentCapital);
      this.chartLabels.push(currentYearValue);
      
      console.log("EQV:"+currentEquityValue+" DV:"+currentDebtValue+" WD:"+currentWithdrawl +" Y:"+currentYearValue)

      currentWithdrawl = currentWithdrawl +(currentWithdrawl *(this.withdrawlIncreasePercent/100));
      
      currentEquityValue =currentEquityValue -(currentWithdrawl*(this.equityPerentage/100));
      currentDebtValue =currentDebtValue -(currentWithdrawl*(this.debtPercent/100));
      currentEquityValue = currentEquityValue + (currentEquityValue * (this.equityGrowthPerentage / 100));
      currentDebtValue = currentDebtValue + (currentDebtValue * (this.debtGrowthPercent / 100));
      currentCapital = currentEquityValue +currentDebtValue;
      

      currentYearValue++;
    }
    //console.log(this.chartDatasets[0].data);
    //console.log(this.chartDatasets[1].data);
    //console.log(this.chartLabels);
  }


  public chartType: string = 'line';



  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(220,220,220,0.2)',
      borderColor: 'rgba(220,220,220,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(220,220,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
    },
    {
      backgroundColor: 'rgba(151,187,205,0.2)',
      borderColor: 'rgba(151,187,205,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  //public chartClicked(e: any): void { }
  //public chartHovered(e: any): void { }

}
