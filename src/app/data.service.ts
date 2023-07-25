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
<<<<<<< HEAD
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
=======
      "id": "P001",
      "name": "Summer Sale",
      "status": "Completed",
      "ctr": 3.2,
      "start date": "2023-03-01"
    },
    {
      "id": "P002",
      "name": "Back to School",
      "status": "Draft",
      "ctr": 2.8,
      "start date": "2023-04-15"
    },
    {
      "id": "P003",
      "name": "Holiday Specials",
      "status": "Completed",
      "ctr": 4.1,
      "start date": "2023-05-20"
    },
    {
      "id": "P004",
      "name": "New Year's Countdown",
      "status": "Scheduled",
      "ctr": 0,
      "start date": "2023-06-25"
    },
    {
      "id": "P005",
      "name": "Spring Promotion",
      "status": "Scheduled",
      "ctr": 1.9,
      "start date": "2023-07-10"
>>>>>>> 671cd6f (updted)
    }
  ]
  // Add methods to access and modify the data as needed

  getData(): any {
    return this.campaignData;
  }

<<<<<<< HEAD
=======
  addData(newItem: any): void {
    length =this.campaignData.length+1
    let newid: String ='P'
    let idnum = length
    if (length < 10)
      newid +='00'+idnum
    else if (length>=10 && length <100)
      newid +='0'+idnum
    newItem.id = newid
    newItem.status = "Draft";
    newItem['start date'] = Date.now();
    newItem.ctr = 2.3;
    this.campaignData.push(newItem);
  }

>>>>>>> 671cd6f (updted)
}
