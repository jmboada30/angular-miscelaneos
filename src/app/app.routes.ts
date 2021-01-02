import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { UserComponent } from './components/user/user.component'
import { NewUserComponent } from './components/user/new-user.component'
import { EditUserComponent } from './components/user/edit-user.component'
import { DetailtUserComponent } from './components/user/detailt-user.component'
import { USER_ROUTES } from './components/user/user.routes'

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
    children: USER_ROUTES,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
]
