import { Component, OnInit } from '@angular/core';

//import { Http } from '@angular/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

    email: string;
    mdp: string;
    nom: string;
    prenom: string;
 

    //constructor (private http: Http, private router: Router) { } 




    msgVisible: boolean = false;
    msg: String;
    dataService = [];





    getUtilisateur(): Observable<any> {
        const url = 'http://localhost:8888/membres'

        const observable: Observable<any> = this.http.get(url).pipe(map((res: Response) => res.json()));
        return observable;
    }
  ngOnInit() {
      this.getUtilisateur().subscribe(res => {
          this.dataService.push(res);
      });
  }



    addUtilisateur(email: string, mpd: string, nom: string, prenom: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("ok :" + email + " " + nom);
        let observable: Observable<any>;
        const url = "http://localhost:8888/membres";
        let body = { "email": email, "MDP": mpd, "nom": nom, "prenom": prenom };
        observable = this.http.post(url, JSON.stringify(body), options).pipe(map((res: Response) => res.json()));


        return observable;
    }

                    }
              

















