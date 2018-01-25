import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class ListPage {
	selectedItem: any;
	icons: string[];
	items: Array<{ title: string, note: string, icon: string }>;
	categorias: Array<{ Id: Number, Titulo: string, Subtitulo: string, Enum: string }>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		// If we navigated to this page, we will have an item available as a nav param
		this.selectedItem = navParams.get('item');

		// Let's populate this page with some filler content for funzies
		this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
			'american-football', 'boat', 'bluetooth', 'build'];

		this.items = [];
		for (let i = 1; i < 11; i++) {
			this.items.push({
				title: 'Item ' + i,
				note: 'This is item #' + i,
				icon: this.icons[Math.floor(Math.random() * this.icons.length)]
			});
		}

		this.categorias = [{
			Id: 1,
			Titulo: "Técnicas",
			Subtitulo: "",			
			Enum:""
		},
		{
			Id: 2,
			Titulo: "Tecnologia",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 1,
			Titulo: "Linguagem",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 1,
			Titulo: "Métodos",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 1,
			Titulo: "Induções",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 1,
			Titulo: "Aplicações",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 1,
			Titulo: "Metáforas",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 1,
			Titulo: "A Hipnose",
			Subtitulo: "",
			Enum: ""
		}];

	}
}
