<<<<<<< HEAD
import { Component } from '@angular/core';
import { CampaignInterface } from './types/campaign.interface'
=======
import { Component, OnInit } from '@angular/core';
import { CampaignInterface } from './types/campaign.interface'
import { SharedDataService } from '../data.service';
>>>>>>> 671cd6f (updted)
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
<<<<<<< HEAD
export class CampaignComponent {
  ascOrder = true;
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
  

  
  
=======
export class CampaignComponent implements OnInit {

  constructor(private dataService: SharedDataService) { }
  campaignData: CampaignInterface[] = [];

  ngOnInit(): void {
    this.campaignData = this.dataService.getData();
  }
  showForm:boolean = false;
  ascOrder = true;
  
  toggleForm(){
    this.showForm = !this.showForm
  }

>>>>>>> 671cd6f (updted)

  sortDate(){
    if(this.ascOrder){
      this.campaignData=this.campaignData.sort((a:CampaignInterface, b:CampaignInterface) =>{
<<<<<<< HEAD
        const date1=new Date(a['Start Date']).getTime()
        const date2=new Date(b['Start Date']).getTime()
=======
        const date1=new Date(a["start date"]).getTime()
        const date2=new Date(b["start date"]).getTime()
>>>>>>> 671cd6f (updted)
        return date2 - date1
      })
    }
    else{
      this.campaignData=this.campaignData.sort((a:CampaignInterface, b:CampaignInterface) =>{
<<<<<<< HEAD
        const date1=new Date(a['Start Date']).getTime()
        const date2=new Date(b['Start Date']).getTime()
=======
        const date1=new Date(a["start date"]).getTime()
        const date2=new Date(b["start date"]).getTime()
>>>>>>> 671cd6f (updted)
        return date1 - date2
      
      })
    }
    this.ascOrder = !this.ascOrder;
  }
}
