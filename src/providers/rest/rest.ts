import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
    all:any;
    constructor(public http: HttpClient) {        
    }
    endPoint = "../../assets/json/";
    
    getAll() {
        return new Promise(resolve => {
            this.http.get(this.endPoint + 'db.json').subscribe(data => {
                this.all = data;
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getById(Id){
        return this.all.filter(
            (elem,index,array)=>elem.Id===Id
        )[0];
    }

    search(query){
        return this.all.filter(
            (elem,index,array)=>elem.Conteudo.includes(query)
        );
    }

    getByCategory(categoria){        
        return this.all.filter(
            (elem,index,array)=>elem.categoria===categoria
        );
    }
}
