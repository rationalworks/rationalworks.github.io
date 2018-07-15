import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  initialCapital: number = 300000;
  equityPerentage: number = 70;
  debtPercent: number = 30;
  equityGrowthPerentage: number = 15;
  debtGrowthPercent: number = 8;
  initialWithdrawl: number = 2000;
  withdrawlIncreasePercent: number = 5;
  currentYear: number = (new Date()).getFullYear();
  maxYearCount: number = 30;

  public chartDatasets: Array<any> = [
    { data: [], label: 'Equity' },
    { data: [], label: 'Debt' },
    { data: [], label: 'Total value' }
  ];

  public tableData: Array<any> = [];

  public chartLabels: Array<any> = [];

  public startSimulation(): void {

    this.chartDatasets[0].data = [];
    this.chartDatasets[1].data = [];
    this.chartDatasets[2].data = [];
    this.chartLabels = [];
    this.tableData = [];

    let currentCapital:number = this.initialCapital ;
    let currentWithdrawl:number = this.initialWithdrawl*12;
    let currentEquityValue:number = currentCapital * (this.equityPerentage / 100);
    let currentDebtValue:number = currentCapital * (this.debtPercent / 100);
    let currentYearValue:number = this.currentYear;

    let itrInterst = 0;
    while (currentYearValue < (this.currentYear + this.maxYearCount) && (currentCapital>0)) {

      this.chartDatasets[0].data.push(Math.round(currentEquityValue));
      this.chartDatasets[1].data.push(Math.round(currentDebtValue));
      this.chartDatasets[2].data.push(Math.round(currentCapital));
      this.chartLabels.push(currentYearValue);
      this.tableData.push({"year":currentYearValue,"eqv":Math.round(currentEquityValue),"dv":Math.round(currentDebtValue),"withdraw":Math.round(currentWithdrawl),"yeb":Math.round(currentCapital)});
      console.log("TOT:"+(currentEquityValue+currentDebtValue)+" EQV:"+currentEquityValue+" DV:"+currentDebtValue+" WD:"+currentWithdrawl +" Y:"+currentYearValue)
      console.log("TOT:"+currentCapital);
      currentWithdrawl = currentWithdrawl +(currentWithdrawl *(this.withdrawlIncreasePercent/100));
      
      currentEquityValue =currentEquityValue -(currentWithdrawl*(this.equityPerentage/100));
      currentDebtValue =currentDebtValue -(currentWithdrawl*(this.debtPercent/100));
      console.log("EQV -W:"+currentEquityValue+" DV -W:"+currentDebtValue);

      currentEquityValue = currentEquityValue + (currentEquityValue * (this.equityGrowthPerentage / 100));
      currentDebtValue = currentDebtValue + (currentDebtValue * (this.debtGrowthPercent / 100));

      console.log("EQV +G:"+currentEquityValue+" DV +G:"+currentDebtValue);
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
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
