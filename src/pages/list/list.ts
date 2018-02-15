import { Component } from '@angular/core';
import { DetalhePage } from '../detalhe/detalhe';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Detail } from '../../Models/detail';

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class ListPage {

	detalhePage = DetalhePage;
	selectedItem: Detail;	
	itens:Array<any>;
	category: String;
	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider :RestProvider) {
		// If we navigated to this page, we will have an item available as a nav param
		this.category = navParams.get('categoria');		
		this.itens = restProvider.getByCategory(this.category);
	}

	setDetalhe(Id) {
		this.navCtrl.push(DetalhePage,{Id:Id} );
	}
}
