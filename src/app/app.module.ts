import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from './config/config.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { BaseAdminComponent } from './admin/base-admin.component';
import { PageNotFoundComponent } from './404/page-not-found.component';
import { HomeComponent } from './admin/home.component';
import { UsersComponent } from './admin/users/users.component';
import { EditUsersComponentComponent } from './admin/users/edit-users-component/edit-users-component.component';
import { ListUsersComponentComponent } from './admin/users/list-users-component/list-users-component.component';


export class NameDirective { } 
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ListEmployeesComponent},
  { path: 'create', component: CreateEmployeeComponent},
  { path: 'admin', component: BaseAdminComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/list', component: ListUsersComponentComponent},
  { path: 'users/edit', component: EditUsersComponentComponent},
  { path: '**', component: PageNotFoundComponent },
  
];
const appInitializerFn = (appConfig: ConfigService) => {
  return () => {
      return appConfig.loadAppConfig();
  }
};
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    BaseAdminComponent,
    PageNotFoundComponent,
    HomeComponent,
    UsersComponent,
    EditUsersComponentComponent,
    ListUsersComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    ConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFn,
        multi: true,
        deps: [ConfigService]
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
