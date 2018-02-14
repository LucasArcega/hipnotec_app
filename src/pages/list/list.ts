import { Component } from '@angular/core';
import { DetalhePage } from '../detalhe/detalhe';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class ListPage {

	detalhePage = DetalhePage;
	selectedItem: any;	
	itens:Array<any>;
	categoria: String;
	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider :RestProvider) {
		// If we navigated to this page, we will have an item available as a nav param
		this.categoria = navParams.get('categoria');
		
		this.itens = restProvider.getByCategory(this.categoria);
		console.log(this.categoria, this.itens);
	}

	setDetalhe(Id) {
		this.navCtrl.push(DetalhePage,{Id:Id} );
	}
}
