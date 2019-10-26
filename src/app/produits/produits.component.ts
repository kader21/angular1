import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';


import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification.service';
import{ ActivatedRoute, Params } from'@angular/router';

@Component({
    selector: 'app-produits',
    templateUrl: './produits.component.html',
    styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
    

    public user: Observable<string>;
    public produits: Object[] = new Array();

    constructor(public route: ActivatedRoute,

                public authService: AuthentificationService,
                public produitsService: ProduitsService) {

        this.user = this.authService.getUser();

    }


    ngOnInit() {
        this.route.params.subscribe ((params :Params) => {
            console.log ("dans produits.component.ts avec " + params["categorie"]);

            if (params["categorie"] !== undefined) {
                console.log("/produits/" + params['categorie']);
                this.produitsService.getProduitsParCategorie(params["categorie"]).subscribe(produits => {
                this.produits = produits;
            });
        }


       else {
            this.produitsService.getProduits().subscribe(produits => {
                this.produits = produits;
            });
        }
    });
}
}
        






