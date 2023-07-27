import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/data.service';
import { CampaignInterface } from '../types/campaign.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaign-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campaign-info.component.html',
  styleUrls: ['./campaign-info.component.scss'],
})
export class CampaignInfoComponent implements OnInit {
  itemId!: string;
  campaigns!: CampaignInterface[];
  deleted: boolean = false;
  constructor(
    private sharedDataService: SharedDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  foundObject!: any;

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id')!;
    this.sharedDataService.getData().subscribe((data) => {
      this.campaigns = data;
    });
    this.foundObject = this.campaigns.find((obj) => obj['id'] === this.itemId)!;
  }

  deleteData() {
    this.deleted = true;
    setTimeout(() => {
      this.sharedDataService.deleteData(this.itemId);
      this.router.navigate(['/campaign']);
    }, 1000);
  }

  goBack() {
    this.router.navigate(['/campaign']);
  }
}
