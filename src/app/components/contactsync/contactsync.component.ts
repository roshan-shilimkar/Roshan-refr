import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatInput } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { AddnewcontactComponent } from './addnewcontact/addnewcontact.component';

export interface UserData {
  name: string;
  email: string;
  phone: string;
  Fletter: string;
}
@Component({
  selector: 'app-contactsync',
  templateUrl: './contactsync.component.html',
  styleUrls: ['./contactsync.component.scss']
})
export class ContactsyncComponent implements OnInit {
  @ViewChild("roshan") roshaninput!:ElementRef;
  displayedColumns: string[] = ['check', 'name', "action1", "action2"];
  activated: number = 1;
  Eusercontacts!: MatTableDataSource<UserData>;
  newusercontacts!: MatTableDataSource<UserData>;
  Eusercontactlist: Array<UserData> = [];
  newusercontactlist: Array<UserData> = [];
  show:boolean=false;
 
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.syncContact();
      // this.roshaninput.nativeElement.focus();
      // console.log("asdasdas",this.roshaninput)
    }, 3000);
  }

  activate(index: number) {
    this.activated = index;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.Eusercontacts.filter = filterValue.trim().toLowerCase();
    if (this.Eusercontacts.paginator) {
      this.Eusercontacts.paginator.firstPage();
    }
    this.newusercontacts.filter = filterValue.trim().toLowerCase();
    if (this.newusercontacts.paginator) {
      this.newusercontacts.paginator.firstPage();
    }
  }

  async syncContact() {
    // await Contacts.getContacts().then(result => {
    let result: any;
    if (result != undefined) {
      for (let i = 0; i < result.contacts.length; i++) {
        const element = result.contacts[i];
        if (element.displayName && element.contactId && element.phoneNumbers.length) {

          const newCon: any[] = [{
            displayName: element.displayName,
            contactId: element.contactId,
            phoneNumber: element.phoneNumbers[0].number,
          }];
          this.Eusercontacts = new MatTableDataSource(newCon);
        }
      }
    }
    else {
      this.Eusercontactlist = [
        { name: "Name1", email: "email1@example.com", phone: "9167452128", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567801", Fletter: "N" },
      ]

      this.newusercontactlist = [
        { name: "Name1", email: "email1@example.com", phone: "9167452128", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567801", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567802", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567803", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567804", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567805", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567806", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567807", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567808", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567809", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567810", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567811", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567812", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567813", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567814", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567815", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567816", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567817", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567819", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "1234567820", Fletter: "N" },
        { name: "Name1", email: "email1@example.com", phone: "1234567821", Fletter: "N" },
        { name: "Name2", email: "email2@example.com", phone: "9167452128", Fletter: "N" },
      ];
      this.Eusercontacts = new MatTableDataSource(this.Eusercontactlist);
      this.newusercontacts = new MatTableDataSource(this.newusercontactlist);
    }
  // }).catch(err => {
  //   this.newContacts = [];
  //   this.loading = false;
  //   this.errorContacts = true;
  //   console.log("newContacts", err)
  // });
  }

  whatappshare(row: any) {
    // if (!this.auth.resource.appMode) {
    // const X = window.encodeURIComponent(textBODY)
    const x = "this is message from ";
    const wa = `https://wa.me/?${'phone=' + row.phone + '&text=' + x}`;
    window.open(wa, "_blank");
    // } 
    // else {
    // this.socialSharing.canShareVia("whatsapp").then((res) => {
    // this.socialSharing.shareViaWhatsApp(dataX.message, dataX.image).then(res => {
    //       console.log("Success");
    //       this.erz.push("res: " + res)
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }).catch(e => {
    // this.auth.resource.startSnackBar("Error: " + e)
    //   })
    // }
  }

  invitesmsuser(row: any) {
    var userAgent = window.navigator.userAgent;
    let message = "hi i rec https://refr.club/ to visit ";
    // if (!this.auth.resource.appMode) {
    let comma = "";
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      comma = "";
    }
    else {
      comma = ";";
    }
    const url = "sms:" + comma + row.phone + "?" + "body=" + message;
    // alert(url);
    window.open(url, "_blank");
    // }
    // else{
    // this.socialSharing.shareViaSMS(message, "")
    // }
  }

  addcontact() {
    this._bottomSheet.open(AddnewcontactComponent, {
      panelClass: 'newcontact',
    });
  }
}