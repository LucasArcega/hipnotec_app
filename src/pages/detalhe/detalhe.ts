import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Detail } from '../../Models/detail';
/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
	selector: 'page-detalhe',
	templateUrl: 'detalhe.html',
})
export class DetalhePage {
	Item: Detail;
	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
		 
		this.Item = restProvider.getById(this.navParams.get("Id"));
		this.addRecent(this.Item);
	}

	
	addRecent(item) {
		this.restProvider.addRecent(item);
	}
}
