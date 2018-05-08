import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { HeaderComponent } from '../header/header.component';
import { CustomComponent } from '../custom/custom.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component'

const appRoutes = [
    //{ path:'', redirect: '/', pathMatch: 'full' },
    { path:'index', component: HomeComponent },
    { path:'contactUs', component: ContactComponent },
    { path:'login', component: LoginComponent },
    { path:'test', component: TestComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports:[
        RouterModule
    ]
})

export class RoutingModule {

}