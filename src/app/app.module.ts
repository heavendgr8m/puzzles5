import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Level1Component } from './components/level1/level1.component';
import { Level2Component } from './components/level2/level2.component';
import { Level3Component } from './components/level3/level3.component';
import { Level4Component } from './components/level4/level4.component';
import { Level5Component } from './components/level5/level5.component';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component,
    Level5Component,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
