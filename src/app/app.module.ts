import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WorkComponent } from './work/work.component';
import { CustomPreloadingService } from './service/custom-preloading.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GalleryComponent,
        WorkComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        CustomPreloadingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
