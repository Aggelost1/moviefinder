import { RouterModule } from '@angular/router';
//import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie.details.component';
import {TestComponent} from './test.component';


const movieRoutes = [
//{ path: '', component: MoviesComponent, pathMatch: 'full' },
  { path: '', component: TestComponent, pathMatch: 'full' },
     { path: 'movie/:id', component: MovieComponent  },
];

export default RouterModule.forChild(movieRoutes)