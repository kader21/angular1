import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


const httpOPtions = {
    headers: new HttpHeaders({
        "Access-Control-Allow-methods": "GET,POST",
        "Access-Control-Allow-Headers": "Content-type",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"


    })
};
@Injectable({
    providedIn: 'root'
})

export class AuthentificationService {
    public user: Subject<string> = new BehaviorSubject<string>(undefined);
    public baseURL: string = "http://localhost:8888/";



    constructor(public http: HttpClient) { }

    getUser() { return this.user; }

    connect(data: string) { this.user.next(data); }

    disconnect() { this.user.next(null); }

    verificationConnexion(identifiants): Observable<any> {
        return this.http.post(this.baseURL + 'membre/connexion', JSON.stringify(identifiants), httpOPtions);
    }
}
