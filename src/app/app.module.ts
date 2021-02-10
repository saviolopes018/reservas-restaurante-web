import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './landing-page/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TopoComponent } from './landing-page/topo/topo.component';
import { QuemSomosComponent } from './landing-page/quem-somos/quem-somos.component';
import { FeedBackComponent } from './landing-page/feed-back/feed-back.component';
import { ContatoComponent } from './landing-page/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    QuemSomosComponent,
    FeedBackComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
