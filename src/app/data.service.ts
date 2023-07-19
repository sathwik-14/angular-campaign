// shared-data.service.ts

import { Injectable } from '@angular/core';
import { CampaignInterface } from './campaign/types/campaign.interface';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  sharedData: any; // Define the shared data property
  campaignData: CampaignInterface[] =[
    {
      "Program ID": "P001",
      "Campaign Name": "Summer Sale",
      "Status": "Completed",
      "CTR": 3.2,
      "Start Date": "2023-03-01"
    },
    {
      "Program ID": "P002",
      "Campaign Name": "Back to School",
      "Status": "Draft",
      "CTR": 2.8,
      "Start Date": "2023-04-15"
    },
    {
      "Program ID": "P003",
      "Campaign Name": "Holiday Specials",
      "Status": "Completed",
      "CTR": 4.1,
      "Start Date": "2023-05-20"
    },
    {
      "Program ID": "P004",
      "Campaign Name": "New Year's Countdown",
      "Status": "Scheduled",
      "CTR": 0,
      "Start Date": "2023-06-25"
    },
    {
      "Program ID": "P005",
      "Campaign Name": "Spring Promotion",
      "Status": "Scheduled",
      "CTR": 1.9,
      "Start Date": "2023-07-10"
    }
  ]
  // Add methods to access and modify the data as needed

  getData(): any {
    return this.campaignData;
  }

}
