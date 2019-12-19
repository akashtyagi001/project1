import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthModule } from './auth/auth.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { OperatorModule } from './operator/operator.module';
import { AllocationModule } from './allocation/allocation.module';
import { ConfigurationModule } from './configuration/configuration.module';


import { EmpBillModule } from './emp-bill/emp-bill.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,AboutModule,ContactModule,HomeModule,AdminModule,OperatorModule,AllocationModule,ConfigurationModule,ConfigurationModule,
    AllocationModule,OperatorModule,EmpBillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
