import { Component, OnInit } from '@angular/core';
import { CampaignInterface } from './types/campaign.interface'
import { SharedDataService } from '../data.service';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  constructor(private dataService: SharedDataService) { }
  campaignData: CampaignInterface[] = [];

  ngOnInit(): void {
    this.campaignData = this.dataService.getData();
    this.ascOrder = true
    this.sortDate()
  }
  showForm:boolean = false;
  ascOrder = true;
  
  toggleForm(){
    this.showForm = !this.showForm
    this.sortDate()
  }


  sortDate(){
    if(this.ascOrder){
      this.campaignData=this.campaignData.sort((a:CampaignInterface, b:CampaignInterface) =>{
        const date1=new Date(a["start date"]).getTime()
        const date2=new Date(b["start date"]).getTime()
        return date2 - date1
      })
    }
    else{
      this.campaignData=this.campaignData.sort((a:CampaignInterface, b:CampaignInterface) =>{
        const date1=new Date(a["start date"]).getTime()
        const date2=new Date(b["start date"]).getTime()
        return date1 - date2
      
      })
    }
    this.ascOrder = !this.ascOrder;
  }
}
