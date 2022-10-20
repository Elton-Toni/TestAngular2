import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'userdetail/:id', component: UserdetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
