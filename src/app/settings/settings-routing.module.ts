import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeprofileComponent } from './changeprofile/changeprofile.component';


const routes: Routes = [
  {path:'' , component:ChangeprofileComponent},
  // {path:'home' , component:ChangeprofileComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SettingsRoutingModule { }
