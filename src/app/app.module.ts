import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CampaignInfoComponent } from './campaign/campaign-info/campaign-info.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';

@NgModule({
  declarations: [AppComponent,
    CampaignComponent,
     SidebarComponent, CampaignInfoComponent, CampaignFormComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
