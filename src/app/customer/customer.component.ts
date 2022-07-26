import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';

export interface UserData {
  name?: string;
  email?: string;
  phone: string;
  userexist?: boolean;
  selected?: boolean;
  inviteddate?: string;
}

export interface Contact {
  contactId: string;
  displayName?: string;
  // phoneNumbers: PhoneNumber[];
  // emails: EmailAddress[];
  photoThumbnail?: string;
  organizationName?: string;
  organizationRole?: string;
  birthday?: string;
}


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  listofscontact: string = "";
  displayedColumns: string[] = ['check', 'name', "action"];
  Eusercontacts!: MatTableDataSource<UserData>;
  newusercontacts!: MatTableDataSource<UserData>;
  invitedContact!: MatTableDataSource<UserData>;
  todaysdate: string = "";
  showData = false;
  Eusercontactlist: Array<UserData> = [];
  newusercontactlist: Array<UserData> = [];
  selectedcontactlist: Array<UserData> = [];
  invitedusers: Array<UserData> = [];
  constructor() {
    localStorage.getItem("contactList");
    this.todaysdate = new Date().getDate().toString() + new Date().getMonth().toString() + new Date().getFullYear().toString();
  }


  whatappshare() {
    // if (!this.auth.resource.appMode) {
    // const X = window.encodeURIComponent(textBODY)
    const x = "this is message from ";
    const wa = `https://wa.me/?${'text=' + x}`;
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

    //   })
    // }
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.syncContact();
    }, 1000);
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
          // contacts.push(element)
          this.Eusercontacts = new MatTableDataSource(newCon);
        }
      }
    }

    this.Eusercontactlist = [
      { name: "Name1", email: "email1@example.com", phone: "9167452128", userexist: true, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567801", userexist: true, selected: false, inviteddate: "" },
    ]

    this.newusercontactlist = [
      { name: "Name1", email: "email1@example.com", phone: "9167452128", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567801", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567802", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567803", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567804", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567805", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567806", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567807", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567808", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567809", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567810", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567811", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567812", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567813", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567814", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567815", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567816", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567817", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567819", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "1234567820", userexist: false, selected: false, inviteddate: "" },
      { name: "Name1", email: "email1@example.com", phone: "1234567821", userexist: false, selected: false, inviteddate: "" },
      { name: "Name2", email: "email2@example.com", phone: "9167452128", userexist: false, selected: false, inviteddate: "" },
    ];
    this.Eusercontacts = new MatTableDataSource(this.Eusercontactlist);
    this.newusercontacts = new MatTableDataSource(this.newusercontactlist);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.newusercontacts.filter = filterValue.trim().toLowerCase();
    if (this.newusercontacts.paginator) {
      this.newusercontacts.paginator.firstPage();
    }
  }

  // execute(){
  // Create 100 users
  // const users: any[] = [
  //    {name:"Name1", email:"email1@example.com", phone:"+919876543210", exist: true},
  //    {name:"Name2", email:"email2@example.com", phone:"+919876543211", exist: false}
  // ];
  // this.dataSource = new MatTableDataSource(users);
  // this.dataSource.paginator = this.paginator;
  // this.dataSource.sort = this.sort;
  // this.showData = true;
  // }

  invitesmsuser() {
    var userAgent = window.navigator.userAgent;
    let message = "hi i rec https://refr.club/ to visit ";
    // if(!this.auth.resource.appMode){
    const url = "sms:" + (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) ? "" : ";" + "body=" + message;
    window.open(url, "_blank");
    // }
    // else{
    // this.socialSharing.shareViaSMS(message, "")
    // }
  }


  check(row: any) {
    if (row.selected == false) {
      if (this.selectedcontactlist.length < 20) {
        this.selectedcontactlist.push({ phone: row.phone });
        row.selected = true;
      }
      else {
        alert("limit extended");
      }
    }
    else {
      const index = this.selectedcontactlist.findIndex(d => d.phone === row.phone);
      if (index > -1) {
        this.selectedcontactlist.splice(index, 1);
        row.selected = false;
      }
    }
  }

  selectall() {
    if (this.selectedcontactlist.length < 20) {
      for (let i = 0; i < this.newusercontacts.data.length; i++) {
        if (this.selectedcontactlist.length < 20 && this.newusercontacts.data[i].selected == false) {
          this.selectedcontactlist.push({ phone: this.newusercontacts.data[i].phone });
          this.newusercontacts.data[i].selected = true;
        }
      }
    }
  }



  sendall() {
    var userAgent = window.navigator.userAgent;

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      
    }

    let message = "hi i rec https://refr.club/ to visit";
    this.listofscontact = "";
    for (let i = 0; i < this.selectedcontactlist.length; i++) {
      let comma = this.listofscontact == "" ? "" : ","
      this.listofscontact = this.listofscontact + comma + this.selectedcontactlist[i].phone;
    }
    console.log(this.listofscontact);
    let comma = "";
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      comma = "";
    }
    else {
      comma = ";";
    }
    const url = "sms:" + comma + this.listofscontact + "?" + "body=" + message;

    window.open(url, "_blank");
    this.selectedcontactlist = [];
    for (let i = 0; i < this.newusercontactlist.length; i++) {
      let data = this.newusercontactlist[i];
      if (this.newusercontactlist[i].selected == true) {
        this.invitedusers.push({
          name: data.name,
          email: data.email,
          phone: data.phone,
          userexist: data.userexist,
          selected: data.selected,
          inviteddate: this.todaysdate
        });
        this.newusercontactlist.splice(i, 1);
        i--;
      }
    }
    localStorage.setItem("contactList",JSON.stringify(this.invitedusers));
    this.newusercontacts = new MatTableDataSource(this.newusercontactlist);
    this.invitedContact = new MatTableDataSource(this.invitedusers);
  }



}
