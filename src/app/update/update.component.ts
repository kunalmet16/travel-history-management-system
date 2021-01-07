import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../services/travel.service';
import { Travel } from '../shared/travel';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  travel: Travel;
  updateForm:any;
  submission:boolean=false;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private travelService: TravelService) {
        this.travel=new Travel();
       }

  ngOnInit(): void {
  }
  onSubmit(updateForm:any) {
    const id=+this.route.snapshot.params['id'];
    
    this.travelService.updateTravel(this.travel,id).subscribe(_result => {
      this.submission=true;
      this.updateForm=updateForm;
      this.updateForm.reset();
    },(error) => console.log(error));
    
  }

}
