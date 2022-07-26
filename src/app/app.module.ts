import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blogs/blog/blog.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { KnowMoreComponent } from './components/how-it-works/know-more/know-more.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBlogComponent } from './components/blogs/blog/create-blog/create-blog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { VendorWalletComponent } from './components/vendor-wallet/vendor-wallet.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddnewcontactComponent } from './components/contactsync/addnewcontact/addnewcontact.component';
import { ContactsyncComponent } from './components/contactsync/contactsync.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { KYCdocumnetComponent } from './components/kycdocumnet/kycdocumnet.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { TimestampcompareComponent } from './components/timestampcompare/timestampcompare.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// 

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomerWalletComponent } from './components/customer-wallet/customer-wallet.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { DistancecalculatorComponent } from './components/distancecalculator/distancecalculator.component';
import { BurnComponent } from './components/burn/burn.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    WelcomeComponent,
    BlogsComponent,
    BlogComponent,
    HowItWorksComponent,
    VendorWalletComponent,
    KnowMoreComponent,
    ContactUsComponent,
    CreateBlogComponent,
    CustomerComponent,
    ContactsyncComponent,
    AddnewcontactComponent,
    KYCdocumnetComponent,
    TimestampcompareComponent,
    CustomerWalletComponent,
    DistancecalculatorComponent,
    BurnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    // MatSnackBarModule,
    MatBottomSheetModule,
    // MatMenuModule,
    // MatStepperModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    // MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatMenuModule,
    MatStepperModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
