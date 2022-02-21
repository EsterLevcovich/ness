import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { ItemsListComponent } from '../items-list/items-list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  LoginForm: FormGroup = new FormGroup({
      id: new FormControl('', [Validators.required,Validators.minLength(6)],),
      name: new FormControl('', [Validators.required]),
    });  
  NoUser=false;

  constructor( private router:Router,private authservice:AuthService,private userService:UserService) { }
  
  ngOnInit(): void {
  }

  getErrorMessage(formControl:any) { 
         
    if (formControl.hasError('required')) {
      return 'Required field';
    } 

    else if (formControl.hasError('minLength')) {
      return 'Minimum 8 characters';
    } 
  
    return  '';
  }

  logIn() {
    {      
      let user = new User();
      user.id + this.LoginForm.value.id;
      user.name=this.LoginForm.value.name;
      if(this.userService.may(user))
      {
         this.authservice.loginAuth(user);
         this.router.navigate(['/items-list']);
      }
      else
      {
        alert("this user name is not exsist!")
      }
      }
    
      
    }
    get id() { return this.LoginForm.get('id') }
    get name() { return this.LoginForm.get('name') }
  }
  



