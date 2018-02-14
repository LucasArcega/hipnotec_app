import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ArrayType } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    query: String;    
    queryResult: Array<any>;
    constructor(public navCtrl: NavController,public provider: RestProvider) {

    }

    triggerSearch(){
        if(this.query.length >=3)
            this.search();
        
            if(this.query.length == 0)
                this.queryResult = [];
    }

    search() {
        this.queryResult = this.provider.search(this.query);                
    }
}
