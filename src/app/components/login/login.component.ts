import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  invalidForm:boolean = false
  invalidCredentials:boolean = false

  constructor(
    private fb:FormBuilder,
    private router:Router
  ) { 
    this.setLoginForm()
  }

  

  ngOnInit(): void {
  }

  setLoginForm(){
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.invalidCredentials = false
    this.invalidForm = false
    if(this.loginForm.invalid){
      this.invalidForm = true
      return
    }
    else{
      if(this.loginForm.value.username == 'jane' && this.loginForm.value.password == '0000'){
        //route to main app
        console.log('yes')
        localStorage.setItem('vendeaseuser',JSON.stringify({username:'Jane'}))
        this.router.navigateByUrl('/main/products')
      }
      else{
        //invalid login credentials
        console.log('no')
        this.invalidCredentials = true
      }
    }
  }



}
