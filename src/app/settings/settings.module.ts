import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ChangeprofileComponent } from './changeprofile/changeprofile.component';


@NgModule({
  declarations: [
    ChangeprofileComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})


export class SettingsModule { }
