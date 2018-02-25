import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ListPage } from '../pages/list/list';
import { RestProvider } from '../providers/rest/rest';
@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;
	categorias: Array<{ Id: number, title: string, Subtitulo: string, Enum: any }>
	pages: Array<{ title: string, component: any }>;
	favoritesPage :any;
	categoriasRest: any;
	showCategories: boolean;
	constructor(public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		public restProvider: RestProvider) {
		this.initializeApp();
		this.getAll();
			this.showCategories = true;
		this.categorias = [{
			Id: 1,
			title: "Técnicas",
			Subtitulo: "",
			Enum: ""
			},		
			{
				Id: 3,
				title: "Linguagem",
				Subtitulo: "",
				Enum: ""
			},
			{
				Id: 4,
				title: "Métodos",
				Subtitulo: "",
				Enum: ""
			},
			{
				Id: 5,
				title: "Induções",
				Subtitulo: "",
				Enum: ""
			},
			{
				Id: 6,
				title: "Aplicações",
				Subtitulo: "",
				Enum: ""
			},
			{
				Id: 7,
				title: "Metáforas",
				Subtitulo: "",
				Enum: ""
			},
			{
				Id: 8,
				title: "Hipnose",
				Subtitulo: "",
				Enum: ""
			}];

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'List', component: ListPage }
		];
		this.favoritesPage = FavoritesPage;
	}

	getAll() {
		this.restProvider.getAll();
	}

	setCategoria(categoria) {		
		this.nav.setRoot(ListPage, { categoria: categoria });
	}
	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	goRoot() {
		// Navigates to the homePage
		this.nav.setRoot(HomePage);
	}

	goFavorites() {
		this.nav.push(FavoritesPage);
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}
}
