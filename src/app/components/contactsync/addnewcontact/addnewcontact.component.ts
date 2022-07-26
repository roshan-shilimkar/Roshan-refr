import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsyncComponent } from '../contactsync.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-addnewcontact',
  templateUrl: './addnewcontact.component.html',
  styleUrls: ['./addnewcontact.component.scss']
})
export class AddnewcontactComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name : new FormControl(),
    number: new FormControl(),
  });


  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ContactsyncComponent>,
    private fb: FormBuilder
  ) {
    // this.form = fb.group({
    //   name: this.fb.control('', [Validators.required]),
    //   number: this.fb.control('', [
    //     Validators.required,
    //     Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    //   ]),
    // });
  }

  ngOnInit(): void { }



  close() {
    this._bottomSheetRef.dismiss();
  }

  invalidPhone(phone: string) {
    const newkey = new FormControl(phone,[
      Validators.pattern('^[1-9]{1}[0-9]{9}$')
    ]);
    return newkey.invalid;
  }

  invalidName(name:string){
    const newKey  = new FormControl(name, [
      Validators.pattern('^[A-Za-z]+$')
    ]);
    return newKey.invalid;
  }

  submit() {
    if (this.invalidPhone(this.form.value.number)) {
      // this.auth.resource.startSnackBar("Invalid Phone Number.");
    }
    else if(this.form.value.name.trim() == "" && this.invalidName(this.form.value.name)){
      // this.auth.resource.startSnackBar("Please Enter Contcat Name.");
    }
    else {
      console.log("valid Number & valid Contact Name" +this.form.value);
    }
  }
}