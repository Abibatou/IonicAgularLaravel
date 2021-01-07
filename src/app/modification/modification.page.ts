import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-modification',
  templateUrl: './modification.page.html',
  styleUrls: ['./modification.page.scss'],
})
export class ModificationPage implements OnInit {
  nom: string;
  prenom: string;
  filiere: string;
  id: any;
  //nim: any;
  constructor(
    private location: Location,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.showItem();
  }

  showItem(){
    this.id = this.route.snapshot.params.id;
    let server_url = 'http://localhost:8000/api/edit/'+ this.id ;
    this.http.get(server_url).subscribe((res: any)=>{
      //console.log(res.nom);
      this.nom = res.nom;
      this.prenom = res.prenom;
      this.filiere = res.filiere;  
     
    })
  }

  updateItem(){
    let server_url = 'http://localhost:8000/api/update/'+ this.id;
    let data = {
      "nom":this.nom,
      "prenom":this.prenom,
      "filiere":this.filiere
    }
    this.http.put(server_url, data).subscribe((res)=> {
      //console.log('bonjour');
      this.location.back();
    }
    )
  }

}
