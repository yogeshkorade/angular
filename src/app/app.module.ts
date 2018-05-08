import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CustomComponent } from './custom/custom.component';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { OnlyDigits } from './directive/keyborad.directive';
import { OnlyAlpha  } from './directive/keyborad.directive';
import { EmailValid } from './directive/keyborad.directive';
import { ChangeTextDirective } from './directive/change-text.directive';
import { WebService } from './services/web.service';
import { HeaderComponent } from './header/header.component';

import { RoutingModule } from './routing/routing.module';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  // class
  declarations: [
    AppComponent,
    TestComponent,
    CustomComponent,
    ErrorDisplayComponent,
    OnlyDigits,
    OnlyAlpha,
    ChangeTextDirective,
    EmailValid,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent
  ],
  // modules 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RoutingModule
  ],
  // services
  providers: [WebService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
