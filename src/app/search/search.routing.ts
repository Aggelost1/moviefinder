import { Routes, RouterModule } from '@angular/router';

import { IRouting } from '../shared/interfaces';
import { Movie } from './item.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  }

];

export const searchRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [Movie, SearchComponent]
};
