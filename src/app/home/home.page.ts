import { Component, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'angular8restapi';
   formdata: FormGroup;
   //data = [];
   response: string
   
   //users = {email: "", password:""}
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
   
   onClickSubmit() {
    let server_url = 'http://localhost:8000/api/login';
    this.response = 'Connexion réussie';
    this.http.post(server_url, this.formdata.value).subscribe(
      data => {if (this.response==data) {
        this.router.navigate(["/gestion-etudiant"]);
      }
      else{
        alert('Veuillez réessayer')
      }
    },
      error => console.log(error),
      
      
    );
    
    
    
      if(this.formdata.invalid)
     {
      this.formdata.get('email').markAsTouched();
    this.formdata.get('password').markAsTouched();
    }
    
  }
  ngOnInit() {
    /*Login form validation*/
    this.formdata = new FormGroup({
       email: new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
       ])),
      password: new FormControl("", this.passwordvalidation)
      
    });
}
passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 6) {
       return {"password" : true};
    }
 }   
 
  }
  
    
   
   
     
   
 
  


