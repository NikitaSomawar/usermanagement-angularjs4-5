import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http';


const appRoutes:Routes = [
  {
    path: '',
    component:UserlistComponent
  },
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }

]

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
