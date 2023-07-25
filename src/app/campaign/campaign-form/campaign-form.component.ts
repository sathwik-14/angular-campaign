import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedDataService } from 'src/app/data.service';
import { CampaignInterface } from '../types/campaign.interface';
@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent {
  constructor(private dataservice: SharedDataService){}
  newCampaign:{} = {}
  category:boolean = false
  location = new FormControl()
  name = new FormControl('')
  objective = new FormControl('')
  categorySelect = new FormControl('undefined')
  offerSelect = new FormControl('undefined')
  comments = new FormControl('')
  categories = ['first', 'second', 'third']
  locations: String[] = []

  showFirstPage:boolean = true;
  showSecondPage:boolean = false;
  showThirdPage: boolean = false;
  showFourthPage: boolean = false;
  browse:boolean = false;
  application:boolean = false;
  toggleFirstPage(){
    this.showFirstPage = !this.showFirstPage
  }
  toggleSecondPage(){
    this.showSecondPage = !this.showSecondPage
  }
  toggleThirdPage(){
    this.showThirdPage = !this.showThirdPage
  }
  toggleFourthPage(){
    this.showFourthPage = !this.showFourthPage
  }

  toggleBrowse(){
    this.browse = !this.browse
  }

  secondPage(){
    this.toggleFirstPage()
    this.toggleSecondPage()
  }

  thirdPage(){
    this.toggleThirdPage()
    this.toggleSecondPage()
  }

  fourthPage(){
    this.toggleThirdPage()
    this.toggleFourthPage()
  }

  toggleCategory(){
    this.category = true
  }


  toggleApplication() {
    this.toggleCategory()
    this.application = true
  }


  addLocation(event:any){
    this.locations.push(this.location.value)
    event.target.value = ''
  }

  onCategoryChange(event: any) {
    const selectedValue = event.target.value;
    this.categorySelect.setValue(selectedValue.split(':')[1])
    // console.log(this.categorySelect.value);

  }

  onOfferChange(event: any) {
    const selectedValue = event.target.value;
    this.offerSelect.setValue(selectedValue.split(':')[1])
    // console.log(this.offerSelect.value);
  }

  deleteLocation(i : any) {
    if (i <= this.locations.length)
    this.locations.splice(i,1)
  }

  submitForm() {
    this.newCampaign = {
      'name': this.name.value,
      'objective': this.objective.value,
      'comment': this.comments.value,
      'category': this.categorySelect.value,
      'offer': this.offerSelect.value,
      'location': this.locations,
    }
    this.dataservice.addData(this.newCampaign)
  }
}
