import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)
      },
      {
        path: 'book',
        loadChildren: () => import('../book/book.module').then( m => m.BookPageModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('../employee/employee.module').then( m => m.EmployeePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/user',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
