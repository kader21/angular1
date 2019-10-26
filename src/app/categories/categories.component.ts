import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Observable } from 'rxjs';



@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


    public user: Observable<string>;
    public categories: string[] = new Array();



    constructor(private router: Router,
        public authService: AuthentificationService,
        public produitsService: ProduitsService) {
        this.user = this.authService.getUser();
    }

    ngOnInit() {
        this.produitsService.getCategories().subscribe(categories => {
            this.categories = categories;

        });
    }

    produitsParCategorie(categorie) {
        this.router.navigate(['/produits', categorie]);
    }
}
