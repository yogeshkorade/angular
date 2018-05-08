import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CustomComponent } from './custom/custom.component';
import { ErrorDisplayComponent } from './error-display/error-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CustomComponent,
    ErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
