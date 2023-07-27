import { Component,Input,Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedDataService } from 'src/app/data.service';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent {
  constructor(private dataservice: SharedDataService){}
  @Input() showForm!:boolean
  @Input() campaignName:any 
  @Output() toggleForm = new EventEmitter<boolean>();
  @Output() campaignNameChange = new EventEmitter<string>();
  newCampaign:{} = {}
  category:boolean = false
  location = new FormControl()
  name = new FormControl('')
  objective = new FormControl('')
  categorySelect = new FormControl('select')
  offerSelect = new FormControl('select')
  comments = new FormControl('')
  categories = ['first', 'second', 'third']
  locations: String[] = []
  edit : boolean = false
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

  nameAlert:boolean = false;

  objectiveAlert:boolean = false;

  secondPage(){
    if(this.name.value == '')
      this.nameAlert = true;
    else if(this.objective.value == ''){
      if(this.nameAlert){
        this.nameAlert = false;
      }
      this.objectiveAlert = true;
      }
    else{
      if(this.nameAlert)
      this.nameAlert = false;
      if(this.objectiveAlert)
      this.objectiveAlert = false;
      this.toggleFirstPage()
      this.toggleSecondPage()
    } 
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

  updateCampaignName() {
    this.campaignName = this.name.value
    this.campaignNameChange.emit(this.campaignName) 
  }

  editableIndex: number | null = null;

  toggleEditable(index: number | null ): void {
    this.editableIndex = this.editableIndex === index ? null : index;
  }

  isEditable(index: number): boolean {
    return this.editableIndex === index;
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

  submitted:boolean = false

  submitForm() {
    this.submitted = true;
    setTimeout(() => {
    if(this.name.value == '')
    alert('Please enter a name')
    else if (this.objective.value == '')
    alert('Please enter objective')
    else{
      this.newCampaign = {
        'name': this.name.value,
        'objective': this.objective.value,
        'comment': this.comments.value,
        'category': this.categorySelect.value,
        'offer': this.offerSelect.value,
        'location': this.locations,
      }
      this.dataservice.addData(this.newCampaign)
      this.submitted = false
      this.showForm = false
      this.toggleForm.emit(this.showForm)
    }
  },1000)
  }
}
