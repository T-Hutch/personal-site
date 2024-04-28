import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeditechComponent } from './meditech/meditech.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Tom's Home Page"
    },
    {
        path: 'meditech',
        component: MeditechComponent,
        title: 'Meditech Page'
    }
];

export default routeConfig;
