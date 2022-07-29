import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-openingtime',
  templateUrl: './openingtime.component.html',
  styleUrls: ['./openingtime.component.scss']
})
export class OpeningtimeComponent implements OnInit {
  storeLoc:any;
  constructor( public dialogRef: MatDialogRef<OpeningtimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      this.storeLoc= data.timedata;
      console.log(this.storeLoc.openMonS);
    }

  ngOnInit(): void {
  }

  tConvert(time: any) {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];
    // console.log("Time = " + time);
    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? 'AM' : 'PM';
      time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
  }
}
