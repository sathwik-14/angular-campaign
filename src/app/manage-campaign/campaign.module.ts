import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { CampaignInfoComponent } from './campaign-info/campaign-info.component';
import { CampaignComponent } from './campaign-list/campaign.component';
import { SharedDataService } from '../services/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CampaignFormComponent,
    CampaignInfoComponent,
    CampaignComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ SharedDataService]
})
export class CampaignModule { }
