import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  public hour: any;
  public minute: string;
  public second: string;
  public ampm: string;
  public value: number;

  source: Observable<number>;
  subscribe: Subscription;
  timerPaused: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
    setInterval(() => {
      if(this.timerPaused==false) {
        const date = new Date();
        this.updateDate(date)};
      // if(this.timerPaused==false && this.value) {
      //   const date = new Date();
      //   this.second=date.setSeconds(this.value).toString();
      //   this.updateDate(date);}
      //   console.log(date)
    }, 1000);
  }

  public updateDate(date: Date){
    if(this.timerPaused==false){

      const hours = date.getHours();
  
      this.ampm = hours >=12? 'PM' : 'AM';
  
      this.hour = hours %12;
      this.hour = this.hour ?this.hour :12;
      this.hour = this.hour<10 ? '0' + this.hour: this.hour;
  
      const minutes = date.getMinutes();
      this.minute = minutes < 10? '0' + minutes: minutes.toString() ;
  
      let seconds = date.getSeconds();
      this.second = seconds <10? '0' + seconds: seconds.toString();  
      }
  }

  onPause() {
    this.timerPaused = true;
    }

  onResume(value: number): number{
    this.timerPaused = false;
    this.value = value;
    return this.value;
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
    }
}



