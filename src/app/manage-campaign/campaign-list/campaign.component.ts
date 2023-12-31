import { Component } from '@angular/core';
import { CampaignInterface } from '../types/campaign.interface';
import { SharedDataService } from '../../services/data.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent {
  constructor(private dataService: SharedDataService) {
    this.dataService.getData().subscribe((data) => (this.campaignData = data));
    this.sortDate();
  }
  campaignData: CampaignInterface[] = [];

  newCampaignName: string  = 'New Campaign';
  showForm: boolean = false;
  ascOrder = true;

  toggleForm() {
    this.showForm = !this.showForm;
    this.sortDate();
  }

  onCampaignNameChange(newName: string) {
    this.newCampaignName = newName;
  }

  sortDate() {
    if (this.ascOrder) {
      this.campaignData = this.campaignData.sort(
        (a: CampaignInterface, b: CampaignInterface) => {
          const date1 = new Date(a['start date']).getTime();
          const date2 = new Date(b['start date']).getTime();
          return date2 - date1;
        }
      );
    } else {
      this.campaignData = this.campaignData.sort(
        (a: CampaignInterface, b: CampaignInterface) => {
          const date1 = new Date(a['start date']).getTime();
          const date2 = new Date(b['start date']).getTime();
          return date1 - date2;
        }
      );
    }
    this.ascOrder = !this.ascOrder;
  }
}
