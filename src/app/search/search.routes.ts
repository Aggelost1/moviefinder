import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';



const routes = [
    { path: 'new', component: SearchComponent },
     { path: 'movie/:id', component: SearchComponent, pathMatch: 'full' }
    { path: 'search2', component: SearchComponent }
];

export default RouterModule.forChild(routes)