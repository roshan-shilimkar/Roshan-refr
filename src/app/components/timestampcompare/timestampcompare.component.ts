import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-timestampcompare',
  templateUrl: './timestampcompare.component.html',
  styleUrls: ['./timestampcompare.component.scss']
})
export class TimestampcompareComponent implements OnInit {
  todaysdate: string = "";
  timestampdate: string = "";
  breakS: string = "";
  breakE: string = "";
  OffDays = new FormControl('');
  selectedoffDay: string = "";
  isbreak: boolean = false;
  weekstartday: string = "";
  weekendday: string = "";
  storeLoc: any = {
    opensDaily: false, opensDailyS: "07:00", opensDailyE: "23:00",
    openMon: true, openMonS: "07:00", openMonE: "23:00",
    openTue: true, openTueS: "07:00", openTueE: "23:00",
    openWed: true, openWedS: "07:00", openWedE: "23:00",
    openThu: true, openThuS: "07:00", openThuE: "23:00",
    openFri: true, openFriS: "07:00", openFriE: "23:00",
    openSat: false, openSatS: "07:00", openSatE: "23:00",
    openSun: true, openSunS: "07:00", openSunE: "23:00",
    BreakDaily: true, BreakStart: "13:30", BreakEnd: "16:00",
  }
  // take Current time from firebse in miliseconds and campare it with store time and show 
  timestamp: any = {
    nanoseconds: 0,
    seconds: 1562524200
  }
  constructor() { }

  ngOnInit(): void {
    this.storeLoc.BreakStart = this.tConvert(this.storeLoc.BreakStart.toString());
    this.storeLoc.BreakEnd = this.tConvert(this.storeLoc.BreakEnd.toString());
    this.storeLoc.opensDailyS = this.tConvert(this.storeLoc.opensDailyS.toString());
    this.storeLoc.opensDailyE = this.tConvert(this.storeLoc.opensDailyE.toString());
  }

  tConvert(time: any) {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];
    console.log("Time = " + time);
    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? 'AM' : 'PM';
      time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
  }


  comparetimestamp() {
    this.timestampdate = new Date(this.timestamp.seconds * 1000).toDateString();
  }

  getTOdaysDate() {
    this.todaysdate = new Date().toDateString();
  }

  getdiff() {
    var startDate = new Date(this.timestamp.seconds * 1000);
    var endDate = new Date();
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  }

  printvalue() {
    // if (this.ShopS == "") {
    //   alert("Please Enter the shop opening time.");
    // }
    // else if (this.ShopE == "") {
    //   alert("Please Enter the shop Closing time.");
    // }
    // else if (this.ShopE < this.ShopS) {
    //   this.ShopE = "";
    //   this.ShopS = "";
    //   alert("Please Enter the valid opening and closing time.");
    // }
    // else if (this.isbreak == true && this.breakS == "") {
    //   alert("Please Enter the shop's break Start time.");
    // }
    // else if (this.isbreak == true && this.breakE == "") {
    //   alert("Please Enter the shop's break End time.");
    // }
    // else if (this.isbreak == true && this.breakE < this.breakS) {
    //   this.breakE = "";
    //   this.breakS = "";
    //   alert("Please Enter the valid break start and end time.");
    // }
    // else if ((this.ShopS > this.breakS || this.ShopE < this.breakE) && this.isbreak == true) {
    //   alert("break time shouold be in between Opening and closing time.")
    // }
    // else {
    //   if (this.selectedoffDay == "") {
    //     this.weekstartday = "Sun";
    //     this.weekstartday = "Sat";
    //   }
    //   else {
    // let index = this.WeekdaysList.findIndex((e: any) => e.values == this.selectedoffDay);

    // if (index == 0 || index == 6) {
    //   this.weekstartday = (index == 0 ? this.WeekdaysList[1].values : this.WeekdaysList[0].values);
    //   this.weekendday = (index == 0 ? this.WeekdaysList[6].values : this.WeekdaysList[5].values);
    // }
    // else {
    //   this.weekstartday = this.WeekdaysList[index + 1].values;
    //   this.weekendday = this.WeekdaysList[index - 1].values;
    // }
    //   this.breakS = (parseFloat(this.breakS.substring(0, 2)) < 12) ? this.breakS + " AM" : this.breakS.replace(this.breakS.substring(0, 2), (parseFloat(this.breakS.substring(0, 2)) - 12).toString()) + " PM";
    //   this.breakE = (parseFloat(this.breakE.substring(0, 2)) < 12) ? this.breakE + " AM" : this.breakE.replace(this.breakE.substring(0, 2), (parseFloat(this.breakE.substring(0, 2)) - 12).toString()) + " PM";
    //   this.ShopS = (parseFloat(this.ShopS.substring(0, 2)) < 12) ? this.ShopS + " AM" : this.ShopS.replace(this.ShopS.substring(0, 2), (parseFloat(this.ShopS.substring(0, 2)) - 12).toString()) + " PM";
    //   this.ShopE = (parseFloat(this.ShopE.substring(0, 2)) < 12) ? this.ShopE + " AM" : this.ShopE.replace(this.ShopE.substring(0, 2), (parseFloat(this.ShopE.substring(0, 2)) - 12).toString()) + " PM";
    // }
    // }
  }
}
