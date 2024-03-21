import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './gifs/page-main/page-main.component';

const routes: Routes = [
    {
        path: '',
        component: PageMainComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
