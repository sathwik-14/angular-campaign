import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CampaignInfoComponent } from './campaign/campaign-info/campaign-info.component';
import { CampaignComponent } from './campaign/campaign.component';
@NgModule({
  declarations: [AppComponent,
    CampaignComponent,
     SidebarComponent, CampaignInfoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
