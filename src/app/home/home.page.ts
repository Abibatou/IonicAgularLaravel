import { Component, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'angular8restapi';
   formdata
  constructor(
    private http: HttpClient
  ) {}
   
   onClickSubmit(data) {
      if(this.formdata.invalid)
     {
      this.formdata.get('email').markAsTouched();
    this.formdata.get('password').markAsTouched();
    }
    else
    {
      alert("Success");
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
    if (formcontrol.value.length < 5) {
       return {"password" : true};
    }
 }


  }
  

  
  
      /*Login form validation*/
    
   
   
     
   
 
  


