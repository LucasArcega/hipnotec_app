import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Detail } from '../../Models/detail';
import { DetalhePage } from '../detalhe/detalhe';
import { empty } from 'rxjs/Observer';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    query: String;
    queryResult: Array<Detail>;
    recent: Array<Detail>;
    searchResult: any;
    searchCategories:Array<string>;
    constructor(public navCtrl: NavController, public provider: RestProvider) {
        this.recent = provider.recent;
    }

    triggerSearch(ev: any) {
        this.query = ev.target.value || '';
        if (this.query.length >= 3)
            this.search();

        if (this.query.length == 0)
            this.cleanSearch();
    }
    generateArray(obj) {
        return Object.keys(obj).map((key) => { return obj[key] });
    }


    cleanSearch(){
        this.query = '';
        this.searchResult = this.queryResult = [];
        this.searchCategories = [];
    }

    search() {
        this.queryResult = this.provider.search(this.query);

        //GroupBy category;
        this.searchResult = this.queryResult.reduce(function (groups, item) {
            const val = item['Category']
            groups[val] = groups[val] || []
            groups[val].push(item)
            return groups
        }, []);

        this.searchCategories = Object.keys(this.searchResult);
        console.log(this.searchResult, this.searchCategories);
    }

    openScript(Id) {
        this.navCtrl.push(DetalhePage, { Id: Id });
    }
}
