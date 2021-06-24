import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MobileHeaderComponent } from './components/header/mobile-header/mobile-header.component';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { BrandPreviewComponent } from './components/brand-preview/brand-preview.component';
import { BrandComponent } from './components/brand-preview/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MobileHeaderComponent,
    CustomBtnComponent,
    BrandPreviewComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
