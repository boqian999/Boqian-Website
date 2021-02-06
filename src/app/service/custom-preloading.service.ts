import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/index';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {
    constructor() { }

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload'.toString()]) {
            return load();
        } else {
            return of(null);
        }
    }
}
