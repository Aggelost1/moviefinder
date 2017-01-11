import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { MovieComponent } from './movie.component';


const routes = [
    { path: '', component: SearchComponent, pathMatch: 'full' },
    { path: 'movie/:id', component: MovieComponent }
];

export default RouterModule.forChild(routes)