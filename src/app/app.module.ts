import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneFormatPipe } from './component/Pipe/phone-format.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './component/Person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
