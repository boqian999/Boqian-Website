import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WorkComponent } from './work/work.component';
import { CustomPreloadingService } from './service/custom-preloading.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'projects',
        component:  WorkComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
