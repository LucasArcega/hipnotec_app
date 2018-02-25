import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detail } from '../../Models/detail';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
    all:Array<Detail>;
    recent: Array<Detail>;
    favorites: Array<Detail>;
    constructor(public http: HttpClient) {
        this.getRecent();
        this.getFavorites();
    }
    endPoint = 'assets/json/';

    addFavorite(model:Detail){
        model.Abstract = Detail.getAbstract(model.Content);
        this.getRecent();
        if(this.favorites.length < 5){
            this.favorites.push(model);
        }
        else{
            this.favorites.shift();
            this.favorites.push(model);
        }
        let favoritesString = JSON.stringify(this.favorites);
        localStorage.setItem('favorites', favoritesString);
    }

    getFavorites(){
        let favoritesList = JSON.parse(localStorage.getItem('favorites'));
        if(favoritesList == null)
            favoritesList = new Array<Detail>();
        this.favorites = favoritesList;
    }
    getAll() {
        return new Promise(resolve => {
            this.http.get(this.endPoint + 'db.json').subscribe((model:Array<Detail>) => {
                this.all = model;
                resolve(model);
            }, err => {
                console.log(err);
            });
        });
    }

    addRecent(model){

		model.Abstract = Detail.getAbstract(model.Content);
        this.getRecent();
        if(this.recent.length < 5){
            this.recent.push(model);
        }
        else{
            this.recent.shift();
            this.recent.push(model);
        }
        let recentString = JSON.stringify(this.recent);
        localStorage.setItem('recent', recentString);
    }

    getRecent(){
        let recentList = JSON.parse(localStorage.getItem('recent'));
        if(recentList == null)
            recentList = new Array<Detail>();
        this.recent = recentList;
    }
    getById(Id):Detail{
        return this.all.filter(
            (elem,index,array)=>elem.Id===Id
        )[0];
    }

    search(query){
        return this.all.filter(
            (elem,index,array)=>elem.Content.includes(query)
        );
    }

    getByCategory(categoria){        
        return this.all.filter(
            (elem,index,array)=>elem.Category===categoria
        );
    }
}
