import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/data.service';
import { CampaignInterface  } from '../types/campaign.interface';

@Component({
  selector: 'app-campaign-info',
  templateUrl: './campaign-info.component.html',
  styleUrls: ['./campaign-info.component.scss']
})
export class CampaignInfoComponent implements OnInit {
  itemId!: string;
  campaigns!: CampaignInterface[];
  constructor(private sharedDataService: SharedDataService,private route: ActivatedRoute) { }
  foundObject!: any;

  ngOnInit() {

    this.itemId = this.route.snapshot.paramMap.get('id')!;
    this.campaigns = this.sharedDataService.getData();
     this.foundObject = this.campaigns.find((obj) => obj['id'] === this.itemId)!;

  }
}
