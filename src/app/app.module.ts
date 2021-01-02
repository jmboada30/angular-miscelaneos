import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClassComponent } from './components/class/class.component';
import { StandOutDirective } from './directives/stand-out.directive';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
// Routes
import { APP_ROUTES } from './app.routes';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailtUserComponent } from './components/user/detailt-user.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassComponent,
    StandOutDirective,
    NgswitchComponent,
    HomeComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    DetailtUserComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES, { useHash: false })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
