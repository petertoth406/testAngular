import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MyService {
    private _isLoggedIn = false;

    constructor(){}

    isLoggedIn(){
        return this._isLoggedIn;
    }

    login(){
        this._isLoggedIn = true;
    }
    logout(){
        this._isLoggedIn = false;
    }
}