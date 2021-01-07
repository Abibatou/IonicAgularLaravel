import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router'



@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.page.html',
  styleUrls: ['./affichage.page.scss'],
})
export class AffichagePage implements OnInit {
  private items;
  //nim: any;
  id: string;
  nom: string;
  prenom: string;
  filiere: string
  constructor(
    private http: HttpClient,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.showItems();
  }

  showItems(){
    let server_url = 'http://localhost:8000/api/index';
    this.http.get(server_url).subscribe((res) => {
      if (res) {
        this.items = res;
      }
      //console.log(res);
    
    })
  }
  editItem(id:any){
    this.router.navigate(["/modification/", id])

  }
  deleteItem(id:string){
    //this.nim = this.route.snapshot.params.id;
    this.id = id;
    if (confirm('Êtes-vous sûr de vouloir supprimer ?')) {
      let server_url = 'http://localhost:8000/api/delete/'+ this.id;
      this.http.delete(server_url).subscribe((res : any)=> {
        this.router.navigate(["/affichage"]);
      }
      )
    }
   
    
    
  }

}