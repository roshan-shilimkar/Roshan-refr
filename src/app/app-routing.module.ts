import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blogs/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BurnComponent } from './components/burn/burn.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddnewcontactComponent } from './components/contactsync/addnewcontact/addnewcontact.component';
import { ContactsyncComponent } from './components/contactsync/contactsync.component';
import { CustomerWalletComponent } from './components/customer-wallet/customer-wallet.component';
import { DistancecalculatorComponent } from './components/distancecalculator/distancecalculator.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { KnowMoreComponent } from './components/how-it-works/know-more/know-more.component';
import { KYCdocumnetComponent } from './components/kycdocumnet/kycdocumnet.component';
import { TimestampcompareComponent } from './components/timestampcompare/timestampcompare.component';
import { VendorWalletComponent } from './components/vendor-wallet/vendor-wallet.component';
import { CustomerComponent } from './customer/customer.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  // { path:"", component: WelcomeComponent }, // Without gaurd
  {
    path: "", component: TabsComponent,
    children: [
      { path: "", redirectTo: "/Burn", pathMatch: "full" },
      { path: "blogs", component: BlogsComponent },
      { path: "blogs/:id", component: BlogComponent },
      { path: "blogs/business", component: BlogsComponent },
      { path: "blogs/business/:id", component: BlogComponent },
      { path: "how-it-works", component: HowItWorksComponent },
      { path: "know-more/:id", component: KnowMoreComponent },
      { path: "contact-us", component: ContactUsComponent },
      { path: "customer", component: CustomerComponent },
      { path: "customer", component: CustomerComponent },
      { path: "Vendor_Wallet", component: VendorWalletComponent },
      { path: "contactsync", component: ContactsyncComponent },
      { path: "addcontact", component: AddnewcontactComponent },
      { path: "kyc", component: KYCdocumnetComponent },
      { path: "timestamp", component: TimestampcompareComponent },
      { path: "cust_Wallet", component: CustomerWalletComponent },
      { path: "DistanceCalc", component: DistancecalculatorComponent },
      { path: "Burn", component: BurnComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
