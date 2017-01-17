import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie.details.component';


const movieRoutes = [
    { path: '', component: MoviesComponent, pathMatch: 'full' },
    { path: 'movie/:id', component: MovieComponent, pathMatch: 'full' }
];

export default RouterModule.forChild(movieRoutes)