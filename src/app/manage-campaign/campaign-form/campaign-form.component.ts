import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators,FormBuilder, FormArray } from '@angular/forms';
import { SharedDataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss'],
})
export class CampaignFormComponent {
  constructor(private dataservice: SharedDataService,private fb:FormBuilder) {}

  campaignForm = this.fb.group({
    name: ['',Validators.required],
    objective: ['',Validators.required],
    categorySelect: ['select'],
    offerSelect: ['select'],
    comments: [''],
    locations:this.fb.array([
    ]),
  });

  @Input() showForm!: boolean;
  @Input() campaignName: any;
  @Output() toggleForm = new EventEmitter<boolean>();
  @Output() campaignNameChange = new EventEmitter<string>();
  newCampaign: {} = {};
  category: boolean = false;
  categories = ['first', 'second', 'third'];
  edit: boolean = false;
  showFirstPage: boolean = true;
  showSecondPage: boolean = false;
  showThirdPage: boolean = false;
  showFourthPage: boolean = false;
  browse: boolean = false;
  application: boolean = false;

  toggleFirstPage() {
    this.showFirstPage = !this.showFirstPage;
  }
  toggleSecondPage() {
    this.showSecondPage = !this.showSecondPage;
  }
  toggleThirdPage() {
    this.showThirdPage = !this.showThirdPage;
  }
  toggleFourthPage() {
    this.showFourthPage = !this.showFourthPage;
  }

  toggleBrowse() {
    this.browse = !this.browse;
  }



  secondPage() {
  
      this.toggleFirstPage();
      this.toggleSecondPage();
    
  }

  thirdPage() {
    this.toggleThirdPage();
    this.toggleSecondPage();
  }

  fourthPage() {
    this.toggleThirdPage();
    this.toggleFourthPage();
  }

  toggleCategory() {
    this.category = true;
  }

  toggleApplication() {
    this.toggleCategory();
    this.application = true;
  }

  updateCampaignName() {
    this.campaignName = this.campaignForm.value.name;
    this.campaignNameChange.emit(this.campaignName);
  }

  editableIndex: number | null = null;

  toggleEditable(index: number | null): void {
    this.editableIndex = this.editableIndex === index ? null : index;
  }

  isEditable(index: number): boolean {
    return this.editableIndex === index;
  }

  addLocation(place: any) {
    this.locations.push(this.fb.control(place.value));
    place.value = ''
  }

  get locations() {
    return this.campaignForm.get('locations') as FormArray;
  }

  get name() {
    return this.campaignForm.get('name');
  }

  get objective() {
    return this.campaignForm.get('objective');
  }


  onCategoryChange(event: any) {
    const selectedValue = event.target.value;
    this.campaignForm.value.categorySelect=selectedValue.split(':')[1];
    // console.log(this.categorySelect.value);
  }

  onOfferChange(event: any) {
    const selectedValue = event.target.value;
    this.campaignForm.value.offerSelect = selectedValue.split(':')[1];
    // console.log(this.offerSelect.value);
  }

  deleteLocation(i: any) {
    this.locations.removeAt(i)
  }

  submitted: boolean = false;

  submitForm() {
    this.submitted = true;
    if(this.campaignForm.valid){
      setTimeout(() => {
          this.newCampaign = {
            name: this.campaignForm.value.name,
            objective: this.campaignForm.value.objective,
            comment: this.campaignForm.value.comments,
            category: this.campaignForm.value.categorySelect,
            offer: this.campaignForm.value.offerSelect,
            location: this.locations,
          };
          this.dataservice.addData(this.newCampaign);
          this.submitted = false;
          this.showForm = false;
          this.toggleForm.emit(this.showForm);
      }, 1000);
    }
    else {
      this.submitted = false;

    }
    
  }
}
