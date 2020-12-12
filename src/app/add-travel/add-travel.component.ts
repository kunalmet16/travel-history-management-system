import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../services/travel.service';
import { Travel } from '../shared/travel';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {

  travel: Travel;
  travelForm:any;
  submission:boolean=false;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private travelService: TravelService) {
        this.travel=new Travel();
       }

  ngOnInit(): void {
  }
  onSubmit(travelForm:any) {
    this.travelService.save(this.travel).subscribe(_result => {
      this.submission=true;
      this.travelForm=travelForm;
    },error => console.log(error));
    
  }
  
  addJourneyform()
  {
    this.travelForm.reset();
    this.submission=false;
    
    
  }

}
