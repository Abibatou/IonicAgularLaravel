import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-insertion',
  templateUrl: './insertion.page.html',
  styleUrls: ['./insertion.page.scss'],
})
export class InsertionPage implements OnInit {
  nom: string = "";
  prenom: string = "";
  filiere: string = "";

  constructor(
    private http: HttpClient,
    //private router: Router
  ) { }

  ngOnInit() {
  }

  addItem(){
    let server_url = 'http://localhost:8000/api/save';
    /*let param = new FormData();
    param.append("nom", this.nom);
    param.append("prenom", this.prenom);
    param.append("filiere", this.filiere);
    console.log(param); */
    let data = {
      "nom":this.nom,
      "prenom":this.prenom,
      "filiere":this.filiere
    }
   
    this.http.post(server_url, data).subscribe((res)=> {
      
    }
    )
   
  } 
}
