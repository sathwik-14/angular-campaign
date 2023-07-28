import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CampaignModule } from './manage-campaign/campaign.module';

@NgModule({
  declarations: [AppComponent,
  SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, CampaignModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
