import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-kycdocumnet',
  templateUrl: './kycdocumnet.component.html',
  styleUrls: ['./kycdocumnet.component.scss']
})
export class KYCdocumnetComponent implements OnInit {
  makingChanges: boolean = false;
  AadharNO = new FormControl('', [
    Validators.required,
    Validators.pattern('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$'),
  ]);

  PanNo = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Z]{3}[PCHFATBLJG]{1}[A-Z]{1}[0-9]{4}[A-Z]$'),
  ]);

  GumastaNo = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{9}$'),
  ]);

  GstNo = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{2}[A-Z]{4}([A-Z]{1}|[0-9]{1}).[0-9]{3}[A-Z]([A-Z]|[0-9]){3}$'),
  ]);

  Fssaiexpiry = new FormControl('', [
    Validators.required,
  ]);

  FssaiNo = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{14}$'),
  ]);

  Reg_No = new FormControl('', [
    Validators.required,
  ]);
  // KycDocuments: FormGroup = new FormGroup({
  //   aadharNo: new FormControl(),
  //   PanNo: new FormControl(),
  //   GSTNo: new FormControl(),
  //   FssaiExpiry: new FormControl(),
  //   FssaiNo: new FormControl(),
  //   RegNo: new FormControl(),
  // });
  // AadharNo:FormGroup =new FormGroup({
  //   Validators.required,
  // })
  // kycData: any = {
  //   AadharNo: "",
  //   PanNo: "",
  //   GumastaNO: "",
  //   GSTNO: "",
  //   fssaiexpiry: "",
  //   FssaiNo: "",
  //   RegNo: ""
  // }
  termsAconditions: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(index: number) {
    if (index == 0) {
      if (this.AadharNO.hasError('required')) {
        return 'Pelase Enter the Aadhar Card Number.';
      }
      return this.AadharNO.hasError('pattern') ? 'Please Enter the Valid Aadhar Card Number.' : '';
    }
    else if (index == 1) {
      if (this.PanNo.hasError('required')) {
        return 'Pelase Enter the Pan Card Number.';
      }
      return this.PanNo.hasError('pattern') ? 'Please Enter the Valid Pan Card Number.' : '';
    }
    else if (index == 2) {
      if (this.GumastaNo.hasError('required')) {
        return 'Pelase Enter the Gumasta Number.';
      }
      return this.GumastaNo.hasError('pattern') ? 'Please Enter the Valid Gumasta Number.' : '';
    }
    else if (index == 3) {
      if (this.GstNo.hasError('required')) {
        return 'Pelase Enter the GST Number.';
      }
      return this.GstNo.hasError('pattern') ? 'Please Enter the Valid Gst No.' : '';
    }
    else if (index == 4) {
      if (this.Fssaiexpiry.hasError('required')) {
        return 'Please select the Fssai Expiry Date.';
      }
    }
    else if (index == 5) {
      if (this.FssaiNo.hasError('required')) {
        return 'Pelase Enter the Fssai Number.';
      }
      return this.FssaiNo.hasError('pattern') ? 'Please Enter the Valid Fssai Number.' : '';
    }
    else if(index == 6){
      if (this.Reg_No.hasError('required')) {
        return 'Pelase Enter the Registration Number.';
      }
    }
      return ""
    
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      height: 300,
      width: 300,
      allowEditing: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri,
    });
    console.log('image', image);
    const imageUrl = image.webPath || '';
    if (imageUrl) {
      console.log('image', imageUrl);
    }
    else {
      console.log('No image');
    }

  }
  async choosePhoto() {
    const image = await Camera.pickImages({
      quality: 100,
      height: 300,
      width: 300,
      limit: 1,
    });
    const imageUrl = image.photos[0].webPath || '';
    if (imageUrl) {
      console.log('image', imageUrl);
    }
    else {
      console.log('No image');
    }
  }






  // invalideAadharcard(aadharNo: string) {
  //   const newKey = new FormControl(aadharNo, [
  //     Validators.required,
  //     Validators.pattern('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$')
  //   ]);
  //   console.log(newKey.invalid);
  //   return newKey.invalid;
  // }

  // invalidePancard(PanNo: string) {
  //   const newKey = new FormControl(PanNo, [
  //     Validators.pattern('^[A-Z]{3}[PCHFATBLJG]{1}[A-Z]{1}[0-9]{4}[A-Z]$')
  //   ]);
  //   return newKey.invalid;
  // }

  // invalidefssiNO(fssiNo: string) {
  //   const newkey = new FormControl(fssiNo, [
  //     Validators.pattern('^[0-9]{14}$')
  //   ]);
  //   return newkey.invalid;
  // }

  // invalideGunastaNO(gunastaNo: string) {
  //   const newkey = new FormControl(gunastaNo, [
  //     Validators.pattern('^[0-9]{9}$')
  //   ]);
  //   return newkey.invalid;
  // }

  // invalideGSTNO(GSTNo: string) {
  //   const newkey = new FormControl(GSTNo, [
  //     Validators.pattern('^[0-9]{2}[A-Z]{4}([A-Z]{1}|[0-9]{1}).[0-9]{3}[A-Z]([A-Z]|[0-9]){3}$')
  //   ]);
  //   return newkey.invalid;
  // }

  submitdata(type: string, data: any, Expiry?: any) {
    //   console.log("Data" + data);
    //   if (this.termsAconditions == false) {
    //     // this.auth.resource.startSnackBar("Please read and accept terns and conditions.");
    //     console.log("Please read and accept terns and conditions.")
    //   }
    //   else {
    //     if (type == "AN") {
    //       if (this.invalideAadharcard(data) || data == "") {
    //         // this.auth.resource.startSnackBar("Invalide Aadhar Number.");
    //         console.log("Invalide Aadhar Number.");
    //       }
    //       else {
    //         console.log("Valid Aadhar No Good to Go");
    //       }
    //     }
    //     else if (type == "PN") {
    //       if (this.invalidePancard(data) || data == "") {
    //         // this.auth.resource.startSnackBar("Invalide Pan Number.");
    //         console.log("Invalide Pan Number.")
    //       }
    //       else {
    //         console.log("Valid Pan Card No Good to Go");
    //       }
    //     }
    //     else if (type == "GN") {
    //       // if(this)
    //       if (this.invalideGunastaNO(data) || data == "") {
    //         // this.auth.resource.startSnackBar("Please Enter Correct Registration Number.");
    //         console.log("Please Enter Correct Gumasta Number.");
    //       }
    //       else {
    //         console.log("Valid Gumasta No Good to Go");

    //       }
    //     }
    //     else if (type == "GSTN") {
    //       if (this.invalideGSTNO(data) || data == "") {
    //         // this.auth.resource.startSnackBar("Please Enter Correct GST Number.");
    //         console.log("Please Enter Correct GST Number.")
    //       }
    //       else {
    //         console.log("Valid GST No Good to Go");
    //       }
    //     }
    //     else if (type == "fssiN") {
    //       if (Expiry == "") {
    //         // this.auth.resource.startSnackBar("Please Select FSSAI Expiry.");
    //         console.log("please Select FSSAI Expiry.")
    //       }
    //       else if (this.invalidefssiNO(data) || data == "") {
    //         // this.auth.resource.startSnackBar("Please Enter correct FSSAI Number.");
    //         console.log("Please Enter correct FSSAI Number.")
    //       }
    //       else {
    //         console.log("Valid Fssi No Good to Go");
    //       }
    //     }
    //     else if (type == "RegNo") {
    //       if (data == "") {
    //         // this.auth.resource.startSnackBar("Please Enter Correct Registration Number.");
    //         console.log("Please Enter Correct Registration Number.");
    //       }
    //       else {
    //         console.log("Valid Reg No Good to Go");
    //       }
    //     }
    //   }
  }

  validdata(){
    console.log("valid Data.");
    this.makingChanges=true;
    console.log(this.AadharNO.value);
    setTimeout(() => {
      this.makingChanges =false;
    }, 10000);
  }
}
