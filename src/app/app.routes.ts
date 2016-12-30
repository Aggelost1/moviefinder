import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { SearchComponent } from './search';
import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'detail', loadChildren: './+detail/index#DetailModule' },
  { path: 'search', component: SearchComponent },
  { path: '**',    component: NoContentComponent },
];
