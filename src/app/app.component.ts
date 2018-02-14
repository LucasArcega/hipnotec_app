import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RestProvider } from '../providers/rest/rest';
@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;
	categorias: Array<{ Id: number, Titulo: string, Subtitulo: string, Enum: any }>
	pages: Array<{ title: string, component: any }>;
	categoriasRest: any;
	constructor(public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		public restProvider: RestProvider) {
		this.initializeApp();
		this.getAll();

		this.categorias = [{
			Id: 1,
			Titulo: "Técnicas",
			Subtitulo: "",
			Enum: ""
		},		
		{
			Id: 3,
			Titulo: "Linguagem",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 4,
			Titulo: "Métodos",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 5,
			Titulo: "Induções",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 6,
			Titulo: "Aplicações",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 7,
			Titulo: "Metáforas",
			Subtitulo: "",
			Enum: ""
		},
		{
			Id: 8,
			Titulo: "Hipnose",
			Subtitulo: "",
			Enum: ""
		}];

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'List', component: ListPage }
		];

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


	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
