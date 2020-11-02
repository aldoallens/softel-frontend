import { Component,OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'softel-frontend';
  /**
 * Interval to update the chart
 * @var {any} intervalUpdate
 */
 private intervalUpdate: any = null;
  /**
 * Print the data to the chart
 * @function showData
 * @return {void}
 */
/**
 * The ChartJS Object
 * @var {any} chart
 */
public chart: any = null;
/**
 * Constructor
 */
constructor(private http: HttpClient) {
  
}
/**
 * On component initialization
 * @function ngOnInit
 * @return {void}
 */
private ngOnInit(): void {
  this.intervalUpdate = setInterval(function(){
   this.showData();
  }.bind(this), 3000);
  this.chart = new Chart('realtime', {
    type: 'line',
    data: {
     labels: [],
     datasets: [
       {
      label: 'Data',
      fill: false,
      data: [],
      backgroundColor: '#168ede',
      borderColor: '#168ede'
       }
     ]
      },
      options: {
     tooltips: {
      enabled: false
     },
     legend: {
      display: true,
      position: 'bottom',
      labels: {
       fontColor: 'white'
      }
     },
     scales: {
       yAxes: [{
        ticks: {
         fontColor: "white"
        }
       }],
       xAxes: [{
      ticks: {
       fontColor: "white",
       beginAtZero: true
      }
       }]
     }
      }
   });
 }
 /**
 * On component destroy
 * @function ngOnDestroy
 * @return {void}
 */
private ngOnDestroy(): void {
  clearInterval(this.intervalUpdate);
 }

 private showData(): void {
  this.getFromAPI().subscribe(response => {

    if(response.error === false) {
      let chartTime: any = new Date();
      chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
      this.chart.data.labels.push(chartTime);
      if(this.chart.data.labels.length > 10) {
        this.chart.data.labels.shift();
        this.chart.data.datasets[0].data.shift();
  }
      this.chart.data.datasets[0].data.push(response.data);
      this.chart.update();
     } else {
      console.error("ERROR: The response had an error, retrying");
     }
   
  }, error => {
   console.error("ERROR: Unexpected response");
  });
}
 
/**
* Get the data from the API
* @function getFromAPI
* @return {Observable<any>}
*/
private getFromAPI(): Observable<any>{
  return this.http.get(
     'http://localhost:3000',
     { responseType: 'json' }
  );
}
coordinarEnlaces(elemento:string):void{
  console.log(elemento+" hola :)");
  document.getElementById(elemento).classList.toggle("router-link-active");
  document.getElementById(elemento).classList.toggle("active");
}

}
