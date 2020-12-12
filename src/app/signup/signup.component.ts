import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  error: Error = new Error();
  hasError:boolean=false;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private userService: UserService) { 
        this.user = new User();
      }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.signup(this.user).subscribe(_result => {
      
    this.gotoHome();
    
    },error => {console.log(error);
      this.error=error;
    this.hasError=true;});
  }

 gotoHome() {
    this.router.navigate(['/home']);
  }


}
