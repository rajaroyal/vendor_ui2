import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { MycashComponent } from './mycash/mycash.component';
import { OfferzoneComponent } from './offerzone/offerzone.component';
import { ViewcountComponent } from './viewcount/viewcount.component';
import { OrdersComponent } from './orders/orders.component';
import { OldordersComponent } from './oldorders/oldorders.component';
import { ReviewComponent } from './review/review.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { IndividualitemsComponent } from './individualitems/individualitems.component';
import { BussinessprofileComponent } from './bussinessprofile/bussinessprofile.component';
import { BusinessanalasysComponent } from './businessanalasys/businessanalasys.component';
import { SearchhistoryComponent } from './searchhistory/searchhistory.component';
import { ArrivedComponent } from './arrived/arrived.component';
import { PlanComponent } from './plan/plan.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NewlistComponent } from './newlist/newlist.component';
import { AdditemComponent } from './additem/additem.component';
import { OrderanalasysComponent } from './orderanalasys/orderanalasys.component';
import { AcceptComponent } from './accept/accept.component';
import { RejectComponent } from './reject/reject.component';
import { CancelordersComponent } from './cancelorders/cancelorders.component';
import { HoursComponent } from './hours/hours.component';
import { ExclusiveofferComponent } from './exclusiveoffer/exclusiveoffer.component';
import { ParticularofferComponent } from './particularoffer/particularoffer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BusinesssettingComponent } from './businesssetting/businesssetting.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { CreatenewComponent } from './createnew/createnew.component';
import { ChangeComponent } from './change/change.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { CreatelistComponent } from './createlist/createlist.component';
import { ItemsnewComponent } from './itemsnew/itemsnew.component';
import { InboxComponent } from './inbox/inbox.component';
import { HomedeliveryComponent } from './homedelivery/homedelivery.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { MydocumentsComponent } from './mydocuments/mydocuments.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { WebsocialComponent } from './websocial/websocial.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpComponent } from './help/help.component';
import { EdititemsnewComponent } from './edititemsnew/edititemsnew.component';
import { CreatebusinessComponent } from './createbusiness/createbusiness.component';
import { VendorhomeComponent } from './vendorhome/vendorhome.component';
import { LoginComponent } from './login/login.component';
import { NewbusinessComponent } from './newbusiness/newbusiness.component';

const routes: Routes = [
  
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'aside',
    component:AsideComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'mycash',
    component:MycashComponent
  },
  {
    path:'offerzone',
    component:OfferzoneComponent
  },
  {
    path:'viewcount',
    component:ViewcountComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'oldorders',
    component:OldordersComponent
  },
  {
    path:'review',
    component:ReviewComponent
  },
  {
    path:'itemlist',
    component:ItemlistComponent
  },
  {
    path:'individualitems',
    component:IndividualitemsComponent
  },
  {
    path:'bussinessprofile',
    component:BussinessprofileComponent
  },
  {
    path:'businessanalasys',
    component:BusinessanalasysComponent
  },
  {
    path:'searchhistory',
    component:SearchhistoryComponent
  },
  {
    path:'arrived',
    component:ArrivedComponent
  },
  {
    path:'plan',
    component:PlanComponent
  },
  {
    path:'privacy',
    component:PrivacyComponent
  },
  {
    path:'newlist',
    component:NewlistComponent
  },
  {
    path:'additem',
    component:AdditemComponent
  },
  {
    path:'orderanalasys',
    component:OrderanalasysComponent
  },
  {
    path:'accept',
    component:AcceptComponent
  },
  {
    path:'reject',
    component:RejectComponent
  },
  {
    path:'cancelorders',
    component:CancelordersComponent
  },
    {
    path:'hours',
    component:HoursComponent
  },
  {
    path:'Exclusiveoffer',
    component:ExclusiveofferComponent
  },
  {
    path:'particularoffer',
    component:ParticularofferComponent
  },
  {
    path:'sidebar',
    component:SidebarComponent
  },
  {
    path:'businesssetting',
    component:BusinesssettingComponent
  },
  {
    path:'myprofile',
    component:MyprofileComponent
  },
  {
    path:'paymenthistory',
    component:PaymenthistoryComponent
  },
  {
    path:'createnew',
    component:CreatenewComponent
  },
  {
    path:'change',
    component:ChangeComponent
  },
  {
    path:'importdata',
    component:ImportdataComponent
  },
  {
    path:'createlist',
    component:CreatelistComponent
  },
  {
    path:'itemsnew',
    component:ItemsnewComponent
  },
  {
    path:'inbox',
    component:InboxComponent
  },
  {
    path:'homedelivery',
    component:HomedeliveryComponent
  },
  {
    path:'promotions',
    component:PromotionsComponent
  },
  {
    path:'bankdetails',
    component:BankdetailsComponent
  },
  {
    path:'mydocuments',
    component:MydocumentsComponent
  },
  {
    path:'aadhar',
    component:AadharComponent
  },
  {
    path:'websocial',
    component:WebsocialComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'help',
    component:HelpComponent
  },
  {
    path:'edititemsnew',
    component:EdititemsnewComponent
  },
  {
    path:'createbusiness',
    component:CreatebusinessComponent
  },
  {
    path:'vendorhome',
    component:VendorhomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'newbusiness',
    component:NewbusinessComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    FooterComponent,
    MycashComponent,
    OfferzoneComponent,
    ViewcountComponent,
    OrdersComponent,
    OldordersComponent,
    ReviewComponent,
    ItemlistComponent,
    IndividualitemsComponent,
    BussinessprofileComponent,
    BusinessanalasysComponent,
    SearchhistoryComponent,
    ArrivedComponent,
    PlanComponent,
    PrivacyComponent,
    NewlistComponent,
    AdditemComponent,
    OrderanalasysComponent,
    AcceptComponent,
    RejectComponent,
    CancelordersComponent,
    HoursComponent,
    ExclusiveofferComponent,
    ParticularofferComponent,
    SidebarComponent,
    BusinesssettingComponent,
    MyprofileComponent,
    PaymenthistoryComponent,
    CreatenewComponent,
    ChangeComponent,
    ImportdataComponent,
    CreatelistComponent,
    ItemsnewComponent,
    InboxComponent,
    HomedeliveryComponent,
    PromotionsComponent,
    BankdetailsComponent,
    MydocumentsComponent,
    AadharComponent,
    WebsocialComponent,
    FeedbackComponent,
    HelpComponent,
    EdititemsnewComponent,
    CreatebusinessComponent,
    VendorhomeComponent,
    LoginComponent,
    NewbusinessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
