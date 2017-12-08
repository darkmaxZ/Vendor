import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatSidenavModule, MatIconModule,
  MatMenuModule, MatListModule, MatToolbarModule
} from '@angular/material';
import { SlickModule } from 'ngx-slick';
import { RootComponent } from './components/root/root.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AboutComponent,
    NewsComponent,
    ShopComponent,
    CartComponent,
    ContactsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
