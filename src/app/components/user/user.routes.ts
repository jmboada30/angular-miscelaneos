import { Routes } from '@angular/router'
import { DetailtUserComponent } from './detailt-user.component'
import { EditUserComponent } from './edit-user.component'
import { NewUserComponent } from './new-user.component'

export const USER_ROUTES: Routes = [
  {
    path: 'new',
    component: NewUserComponent,
  },
  {
    path: 'edit',
    component: EditUserComponent,
  },
  {
    path: 'detail',
    component: DetailtUserComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'new',
  },
]
