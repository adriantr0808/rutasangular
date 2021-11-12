import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Necesitamos importar los componentes que vayamos a navegar
import { HomeComponent } from './components/home/home.component';
import { CineComponent } from './components/cine/cine.component'
import { TvComponent } from './components/tv/tv.component';
import { MusicaComponent } from './components/musica/musica.component';


//Definimos el array de rutas para la navegacion
//Qes es de tipo Routes
const appRoutes: Routes = [
    //En path la barra ya esta implicita
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "musica", component: MusicaComponent },
    { path: "tv", component: TvComponent },
    { path: "cine", component: CineComponent }
];


//De esta clase se exportan dos elementos
//El primero es el proveedor de rutas, que es un array vacio

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);