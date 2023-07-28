import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './manage-campaign/campaign-list/campaign.component';
import { CampaignInfoComponent } from './manage-campaign/campaign-info/campaign-info.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: AppComponent},
  { path: 'campaign', component: CampaignComponent },
  // {
  //   path: 'campaign/:id',
  //   loadComponent: () =>
  //     import('./manage-campaign/campaign-info/campaign-info.component').then(
  //       (e) => e.CampaignInfoComponent
  //     ),
  // },
  { path: 'campaign/:id', component : CampaignInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
