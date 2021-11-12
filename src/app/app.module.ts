import { routing, appRoutingProviders } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CineComponent } from './components/cine/cine.component';
import { MusicaComponent } from './components/musica/musica.component';
import { TvComponent } from './components/tv/tv.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    TvComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
