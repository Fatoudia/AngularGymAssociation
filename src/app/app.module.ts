import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGymnaseComponent } from './components/add-gymnase/add-gymnase.component';
import { GymnaseDetailsComponent } from './components/gymnase-details/gymnase-details.component';
import { GymnaseListComponent } from './components/gymnase-list/gymnase-list.component';
import { FormsModule } from '@angular/forms';
import { GymnaseService } from './services/gymnase.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddGymnaseComponent,
    GymnaseDetailsComponent,
    GymnaseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GymnaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
