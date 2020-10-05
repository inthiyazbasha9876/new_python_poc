import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/shared/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    userName:new FormControl(),
    password:new FormControl()
  })

  logindata
  constructor(private service:ServiceService,private route:Router) { 
    this.userdetails()
  }

  ngOnInit(): void {
  }


  userdetails(){
    this.service.logindatafun().subscribe(res=>{
      this.logindata=res
      console.log(this.logindata);
      
    })
  }
  login(){
    console.log(this.loginForm.value);
    for(let i of this.logindata){
      if(this.loginForm.value.userName== i.email && this.loginForm.value.password==i.password){
        console.log("helo");
        
          localStorage.setItem('id',i.id)
          localStorage.setItem('role',i.role)
          this.route.navigate(['/home'])
      }
    }
  }
}
